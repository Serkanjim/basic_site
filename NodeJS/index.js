const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db"); // to run queries with postgres
const jwt = require("jsonwebtoken");

/*
app.get("/api", (req, res)=> { // route for api
    res.json({"users": ["userOne", "userTwo", "userThree","We came from backend" ]
    })
})

app.listen(5000, () => {console.log("Server started on port 5000")})
*/
//middleware

app.use(cors());
app.use(express.json());

const secretKey = "secretkey";

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, secretKey, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

//ROUTES//

//create a user

app.post("/register", async (req,res) =>{



  
    try {// error handling
        const{user_name, user_email, user_password} = req.body;
        console.log("name geldi",user_name);
        console.log("email geldi",user_email);
        console.log("password geldi",user_password);
        const emailCheckResult = await pool.query('SELECT * FROM users WHERE user_email = $1', [user_email]); //email check for uniqueness

        if (emailCheckResult.rows.length > 0) {
          // If e-mail address exists in database, cancel registration and return error message
          console.log("girdim");
          return res.status(409).json({ message: 'This e-mail address is already registered. \nIf you already have an account, please go to the login page.' });
        }
        const registerUser = await pool.query(
            "INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING user_id",
            [user_name, user_email, user_password]
          ); //user registered and user_id returned

        const token = jwt.sign({ user_id: registerUser.rows[0].user_id }, secretKey);
        const user_id = registerUser.rows[0].user_id;
        res.json({ success: true, message: "The user has been successfully registered." ,user_id, token});
        console.log(user_id);
        
    } catch (error) {
        console.error("Database error",error);
        return res.status(500).json({ message: 'There is an error, please try again later' });

    }

});




app.post("/login", async (req,res) =>{
    try {// error handling
        const{user_email, user_password} = req.body;
        console.log("email geldi",user_email);
        console.log("password geldi",user_password);
        const user = await pool.query(
            "SELECT * FROM users WHERE user_email = $1 ",
            [user_email]
          );
          
        
          if (user.rows.length === 0) {
            return res.status(401).json({ error: "Invalid email.",message: "Apologies, no account found for the given email.\nPlease check and try again or use a different email for registration."  });
          }
          
            // Get password from database
          const storedPassword = user.rows[0].user_password;
            // Password check
          if (storedPassword !== user_password) {
            console.log("sifre yanlis");
            return res.status(401).json({ error: "Invalid password.",message: "We're sorry, the password you entered is incorrect.\nPlease double-check your password and try again " });
            
            
          }
          const user_id = user.rows[0].user_id;
          console.log(user_id,"userid bu");
          console.log("sifre dogru");
          const token = jwt.sign({ user_id: user.rows[0].user_id }, secretKey);
           // send JWT to frontend
           res.json({ success: true, token, user_id});
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Server error.",message: 'Incorrect entry made by the user.' });
          }
        });


//get user by id

app.get("/register/:id",authenticateToken, async (req, res) => {
    try {
      const { id } = req.params;
      //console.log(id,"get user by id");
      const user = await pool.query("SELECT user_name, user_email, user_password FROM users WHERE user_id = $1", [id]);
       
      if (user.rows.length === 0) {
        return res.status(404).json({ errorMessage: "Kullanıcı bulunamadı." });
      }
      const { user_name, user_email ,user_password} = user.rows[0];
      if (req.user.user_id !== parseInt(id)) {
        return res.status(403).json({ errorMessage: "Bu profil sayfasına erişme izniniz yok." });
      }

      res.json({ user_name, user_email ,user_password});
      //console.log(user_email,user_name,user_password);
    } catch (error) {
      console.error(error);
      res.status(500).json({ errorMessage: "Sunucudan kullanıcı bilgileri alınamadı." });
    }
    
  });



//get all users

app.get("/register", async(req,res) => {
    try {
        const allUsers = await pool.query("SELECT * FROM users");
        res.json(allUsers.rows);
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ errorMessage: "Sunucudan kullanıcı bilgileri alınamadı." });
    }
})

//get a user
    /*
app.get("/register/:id", async(req,res) => {
    try {
        console.log(req.params);
        const {id} = req.params;
        const user = await pool.query("SELECT * FROM users WHERE user_id = $1", [id]);
        res.json(user.rows[0]);

    } catch (error) {
        console.error(error);
    }
});
*/
//update a user

app.put("/register/:id",authenticateToken, async(req,res) => {

    try {
        const {id} = req.params;
        const {user_name, user_email, user_password} = req.body;
        const updateUser = await pool.query("UPDATE users SET user_name = $1, user_email =$2 , user_password = $3 WHERE user_id = $4",[user_name, user_email, user_password, id]);

        res.json("User's informations were updated succesfully!");
    } catch (error) {
        res.status(500).json({ errorMessage: "An error occured while updating the profile" });
    }
})

//delete a user

app.delete("/register/:id",authenticateToken, async(req,res) => {

    try {
        const { id } = req.params;
        const deleteUser = await pool.query("DELETE FROM users WHERE user_id = $1",[id]);
        res.json("User's password was deleted!");
    } catch (error) {
        console.error(error);
    }
})

app.listen(5000, () => {console.log("Server started on port 5000")})