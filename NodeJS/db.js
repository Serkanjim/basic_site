const Pool = require("pg").Pool;
const pool = new Pool({

    user: "postgres",
    password: "4545",
    host: "localhost",
    port: 5432,
    database: "test_database"
})

module.exports = pool;