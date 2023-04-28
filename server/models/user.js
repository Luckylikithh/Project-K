const users = [
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
  ]
  
  // functions to complete CRUD operations
  function getAllUsers() {
    return users;
  }
  
  function login(user) {
    /* user {
      userName: "cathy123",
      password: "icecream"
    } */
    let cUser = users.filter(u => u.userName == user.userName);
    if(!cUser[0]) throw Error("Username does not exist!");
  
    if(cUser[0].password != user.password) throw Error("Password is incorrect!");
  
    return cUser[0];
  }
  
  function randomFunction() {
    return "Hello World!";
  }
  
  module.exports = { getAllUsers, randomFunction, login }