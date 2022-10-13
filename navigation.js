const header = document.querySelector('header');
const signMenu = document.getElementById("signup");
const txtSign = document.getElementById("signup-heading");


window.addEventListener('scroll',function () {
    header.classList.toggle("sticky",window.scrollY > 0);
});
function displaySignMenu(){
    
    if(signMenu.style.display=="block"){
        signMenu.style.display="none";
    }
    else 
    {
        signMenu.style.display = "block";
    }

}