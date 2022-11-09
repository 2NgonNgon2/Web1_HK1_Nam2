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







