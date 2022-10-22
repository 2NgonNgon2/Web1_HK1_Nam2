var signinMenu = document.getElementById("signin");
var signupMenu = document.getElementById("signup");



window.addEventListener('scroll',function () {
    var header = document.querySelector('header');
    header.classList.toggle("sticky",window.scrollY > 0);
});
function displaySignMenu(input){
    if(input=="Sign in")
    {
        signinMenu.style.display="block";
    }
    else
    {
        signupMenu.style.display="block";
    }
}
function disableMenu(input){
    if(input=="Sign in")
    {
        signinMenu.style.display="none";
    }
    else
    {
        signupMenu.style.display="none";
    }
}





