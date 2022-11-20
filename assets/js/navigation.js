// scoll header menu bar
window.addEventListener('scroll',function () {
    var header = document.querySelector('header');
    header.classList.toggle("sticky",window.scrollY > 0);
});
// ham display ra menu dang nhap
var loginMenu = document.getElementById("login");
var backgroundLogin = document.getElementById("sigin-background");
let headerIconList = document.getElementById('header-icon-list');


headerIconList.addEventListener("click", function() {
    menu.classList.add("showMenu");
})

menuCloseIcon.addEventListener("click", function() {
    menu.classList.remove("showMenu");
})

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
        hideInfoProduct();
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







