class User {
    constructor(firstname,lastname,email,pwd){
            this.userfirstName = firstname;
            this.userlastName = lastname;
            this.userEmail= email;
            this.userPassword = pwd;
    }
    get FirstName(){
        return this.userfirstName;
    }
    get LastName(){
        return this.userlastName;
    }
    get Email(){
        return this.userEmail;
    }
    get Password(){
        return this.userPassword;
    }
    set FirstName(firstname){
        this.userfirstName = firstname;
    }
    set LastName(lastname){
        this.userlastName = lastname;
    }
    set Email(email){
        this.userEmail= email;
    }
    set Password(pwd){
        this.userPassword = pwd;
    }
}

let registerform = document.getElementById("registerform");
if(registerform){
    registerform.addEventListener("submit", (event) =>{
       event.preventDefault();
       const firstnameInput = document.getElementById("firstname").value;
       const lastnameInput = document.getElementById("secondname").value;
       const emailInput = document.getElementById("email").value;
       const passwordInput = document.getElementById("pwd").value;

       const registerUser=new User(firstnameInput,lastnameInput,emailInput,passwordInput);
       console.log(registerUser);
    });
}

let loginform = document.getElementById("login-form");
if(loginform){
    loginform.addEventListener("submit", (event) =>{
       event.preventDefault();
       
       const emailInput = document.getElementById("Email").value;
       const passwordInput = document.getElementById("pwd").value;

       const LoginUser=new User("", "", emailInput, passwordInput);
       console.log(LoginUser);
    });
}

let postform = document.getElementById("post-form");
if(postform){
    postform.addEventListener("submit", (event) =>{
       event.preventDefault();
       const post= document.getElementById("post").value;
    
       console.log(post);
    });
}
