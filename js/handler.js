document.getElementById("btn-update-h1").addEventListener('click' ,function(){
 // console.log("button clicked");
     const h1Text= document.getElementById("h1-title");
     h1Text.innerText = "Changed the h1 text"
});

document.getElementById("btn-logIn").addEventListener('click', function(){
    console.log("log in button clicked");
            const userLogin= document.getElementById("user-login-info");
            userLogin.innerText= "User Logged In"
 })
       