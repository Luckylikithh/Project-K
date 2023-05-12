require('dotenv').config();
const mysql = require('mysql2');
const con = mysql.createConnection({
    database: process.env.MYSQL_DB,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PSWD
    
 });

 /*con.connect(function(err){
    if(err) throw err;
    console.log("connected");
    con.query("CREATE DATABASE IF NOT EXISTS  ProjectK_db",function(err){
        if(err) throw err;
        console.log("Database created");
    });
 });*/

 const query = (sql, binding) => {
    return new Promise((resolve, reject) => {
      con.query(sql, binding, (err, result, fields) => {
        if (err) reject(err);
        resolve(result);
      });
    });
  }

  const createQuery = "CREATE DATABASE IF NOT EXISTS  project_db;";
  con.query(createQuery);
 module.exports = { con, query };