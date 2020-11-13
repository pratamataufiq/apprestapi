var mysql = require('mysql');

// create connection for database
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'db_mgrv'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('Connection Succed');
});

module.exports = conn;