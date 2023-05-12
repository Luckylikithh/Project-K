const con = require("./db_connect");

async function createTable() {
  let sql = `CREATE TABLE IF NOT EXISTS users (
    userID INT NOT NULL AUTO_INCREMENT,
    userName VARCHAR(255) NOT NULL UNIQUE,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    CONSTRAINT userPK PRIMARY KEY(userID)
  );`

  await con.query(sql);  
}

createTable();

/*const users = [
    {
     userId: 12334,
     userName: "Luckylikith",
     password: "minky kota"  
    },
    {
      userId: 534,
      userName: "Nanna",
      password: "bujjithalli"  
     },
     {
      userId: 654,
      userName: "kanna",
      password: "bubulovesdudu"  
     }
  ]*/
  
  // functions to complete CRUD operations
  async function getAllUsers() {
    let sql = `SELECT * FROM users;`
    return await con.query(sql);
  }
  
  async function userExists(userName) {
    let sql = `
      SELECT * FROM users
      WHERE userName = "${userName}"
    `
    return await con.query(sql);
  }
  
  async function login(user) {
    let cUser = await userExists(user.userName);
    if(!cUser[0]) throw Error("Username does not exist!");
    if(cUser[0].password != user.password) throw Error("Password is incorrect!");
  
    return cUser[0];
  }
  
  async function register(user) {
    // check to see if username is already in use
    let cUser = await userExists(user.userName);
    if(cUser.length>0) throw Error("Username already exists");
  
    // create new user
    let sql = `
      INSERT INTO users(userName,firstName,lastName, password)
      VALUES ("${user.userName}", "${user.firstName}","${user.lastName}","${user.password}");
    `
    await con.query(sql)
  
    // get user to send over
    cUser = await getUser(user)
    console.log(cUser)
    return cUser[0];
  }
  
  async function getUser(user) {
    let sql;
    if(user.userID) {
      sql = `
        SELECT * FROM users
        WHERE userID = ${user.userID};
      `
    } else {
      sql = `
        SELECT * FROM users
        WHERE userName = "${user.userName}";
      `
    }
  
    return await con.query(sql);
  }
  
  // edit a username function
  async function editUser(user) {
    let cUser = await userExists(user.userName);
    if(cUser.length > 0) throw Error("Username in use!!");
  
    let sql = `
      UPDATE users 
      SET userName = "${user.userName}"
      WHERE userID = ${user.userID};
    `
  
    await con.query(sql)
    cUser = await getUser(user)
    return cUser[0]
  }
  
  async function deleteUser(user) {
    let sql = `
      DELETE FROM users
      WHERE userID = ${user.userID}
    `
    await con.query(sql);
  }
  
  module.exports = { getAllUsers, login, register, editUser, deleteUser }
  
  