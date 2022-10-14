var signMenu = document.getElementById("signin");



window.addEventListener('scroll',function () {
    var header = document.querySelector('header');
    header.classList.toggle("sticky",window.scrollY > 0);
});
function displaySignMenu(input){
    
    var headingtxt = document.getElementById('signin-heading');
    var submittxt = document.getElementById('form-submit-text');
    var signin = document.getElementById('signin-already');

    signMenu.style.display="block";
    if(input=="Sign in"){
        signin.style.display="none";
    }
    else{
        signin.style.display="block";
    }
    headingtxt.innerHTML=input;
    submittxt.innerHTML=input;
}
function disableMenu(){
    signMenu.style.display="none";
}





