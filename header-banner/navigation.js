// scoll header menu bar
window.addEventListener('scroll',function () {
    var header = document.querySelector('header');
    header.classList.toggle("sticky",window.scrollY > 0);
});
// ham display ra menu dang nhap
function displaySignMenu(input){
    var loginMenu = document.getElementById("login");
    var createMenu = document.getElementById("create");
    if(input=="Sign in")
    {
        loginMenu.style.display="block";
        createMenu.style.display="none";
    }
    else if(input=="Sign up")
    {
        createMenu.style.display="block";
        loginMenu.style.display="none";
    }
    else{
        loginMenu.style.display="none";
        createMenu.style.display="none";
    }
}
function createAcc() {
	var username = document.getElementById("form-Name").value;
	var password = document.getElementById("form-Password").value;
	var phone = document.getElementById("form-Phone").value;
	var email = document.getElementById("form-E-mail").value;
    var user = {
        username : username,
        password : password,
        phone : phone,
        email : email,
    } 
	var json = JSON.stringify(user);
	localStorage.setItem(username,json);
}
function dangnhap(){
    var username = document.getElementById("name").value;
	var password = document.getElementById("pass").value;
    var userLocal=JSON.parse(localStorage.getItem(username));
    if(username==userLocal.username&&password==userLocal.password){
        alert("dntk")
    }
    else{
        alert("njnki");
    }
}





