$(document).ready(function(){
    account.forEach(element => {
        var json = JSON.stringify(element);
	    localStorage.setItem(element.username,json);
    });
});
// scoll header menu bar
window.addEventListener('scroll',function () {
    var header = document.querySelector('header');
    header.classList.toggle("sticky",window.scrollY > 0);
});
// ham display ra menu dang nhap
var loginMenu = document.getElementById("login");
var backgroundLogin = document.getElementById("sigin-background");

loginMenu.addEventListener("click", function(event) {
    stopPropagate(event);
})
backgroundLogin.addEventListener("click", function() {
    backgroundLogin.style.display="none";
})

function displaySignMenu(input){
    // var createMenu = document.getElementById("create");
    if(input=="Sign in")
    {
        backgroundLogin.style.display="flex";
        // createMenu.style.display="none";
    }
    else if(input=="Sign up")
    {
        // createMenu.style.display="block";
        backgroundLogin.style.display="none";
    }
    else{
        backgroundLogin.style.display="none";
        // createMenu.style.display="none";
    }
}
function dangnhap(event){
    var username = document.getElementById("name").value;
	var password = document.getElementById("pass").value;
    var userLocal=JSON.parse(localStorage.getItem(username));

    if(username==userLocal.username && password==userLocal.password && userLocal.authority =="admin"){
        alert("Dang nhap admin thanh cong");
        event.preventDefault(); // ngăn form không bị reload sau khi submit
        window.location.href = '/admin.html' ;
        backgroundLogin.style.display="none";
    }
    
    else if(username==userLocal.username && password==userLocal.password && userLocal.authority =="user"){
        isSignedin = true;
        isAdmin = false;
        alert("Dang nhap user thanh cong");
        event.preventDefault();
        backgroundLogin.style.display="none";
        console.log("you are user");
    }
    else{
        alert("Error!");
    }   
}






