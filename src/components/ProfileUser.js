import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom'
import UploadPicture from './UploadPicture';

const ProfileUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user_id } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const [failedMessage, setFailedMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // user_id'yi kullanarak API'den kullanıcı bilgilerini çekme işlemi yapabilirsiniz
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/login');
        }

        const response = await fetch(`http://localhost:5000/register/${user_id}`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Tokenı Authorization başlığında gönderin
          },
        });

        if (response.ok) {
          const data = await response.json();
          setName(data.user_name || "");
          setEmail(data.user_email || "");
          setPassword(data.user_password || "");
          console.log(data.user_email,"email");
          console.log(data.user_name,"name");
          console.log(data.user_password,"password");
          console.log("girdi");// Kullanıcı bilgilerini state'e atayın
        } else {
          {
            
            window.alert("Error: Page not Found.\n You are being redirected to the login page");
            setTimeout(() => {
              setFailedMessage("");
              navigate('/login')
            }, 1000); 
          } // Kullanıcı bulunamazsa state'i null olarak ayarlayın
        }
      } catch (error) {
        console.error(error);
        navigate('/login')
        const errorData = await response.json();
        throw new Error(errorData.message);
        
        
      }
    };

    fetchUserData();
}, [user_id, navigate]);

  const handleEdit = () => {
    setIsEditing(true);
    try {
      
    } catch (error) {
      
    }
  };

  const handleSave = async () => {

    try {
      const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }

    // Kullanıcının güncellenmiş bilgilerini sunucuya gönderme işlemi yapabilirsiniz
    const response = await fetch(`http://localhost:5000/register/${user_id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`, // Tokenı Authorization başlığında gönderin
      },
      body: JSON.stringify({ user_name: name, user_email: email, user_password: password }),
    });

      if (!response.ok) {
            // Eğer fetch işlemi başarısızsa (HTTP durum kodu 400 ve üzeri)
            const errorData = await response.json();
            throw new Error(errorData.message);
          }
          navigate(`/profile/${user_id}`);
        } catch (error) {
          console.error(error.message); 
          
          window.alert("Error: " + error.message);
          setTimeout(() => {
            setFailedMessage("");
          }, 5000); 
        }
      
    // Burada güncellenen profil bilgilerini sunucuya gönderme işlemleri yapabilirsiniz.
    // Örneğin, bir API çağrısı ile güncel verileri sunucuya kaydedebilirsiniz.
  };
 
  
    

  


  if (!user_id && !password) {
    return <div>Loading...</div>; // Kullanıcı bilgileri yüklenirken bir yükleme durumu gösterebilirsiniz
  }

 


  return (
    <div>
      My Profile
      <br />
      <br />
      {handleEdit ? (
        <div>
        <div>
          <div className='imagepicker'>
                  Click Photo to Change
                  <UploadPicture/>
                  <br />
              
                  </div>
          <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} />
          <TextField label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <TextField label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
        </div>
        </div>
      ) : (
        <div>
          
          <Box>
            <Typography variant="h6">Name:</Typography>
            <Typography>{name}</Typography>
          </Box>
          <Box>
            <Typography variant="h6">Email:</Typography>
            <Typography>{email}</Typography>
          </Box>
          <Box>
            <Typography variant="h6">Password:</Typography>
            <Typography>{password}</Typography>
          </Box>
          <Button variant="contained" color="primary" onClick={handleEdit}>
            Edit Profile
          </Button>
        </div>
      )}
    </div>
  );
};

export default ProfileUser;