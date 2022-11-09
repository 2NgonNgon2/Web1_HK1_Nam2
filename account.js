



$(document).ready(function(){
    account.forEach(element => {
        var json = JSON.stringify(element);
	    localStorage.setItem(element.username,json);
    });
});
function dangnhap(event){
    var username = document.getElementById("name").value;
	var password = document.getElementById("pass").value;
    var userLocal=JSON.parse(localStorage.getItem(username));

    if(username==userLocal.username && password==userLocal.password && userLocal.authority =="admin"){
        alert("Dang nhap admin thanh cong");
        event.preventDefault(); // ngăn form không bị reload sau khi submit
        //window.location.href = '/admin.html' ;
        document.querySelector("span.dropdown-select").innerHTML=userLocal.username;
        
    }
    
    else if(username==userLocal.username && password==userLocal.password && userLocal.authority =="user"){
        isSignedin = true;
        isAdmin = false;
        alert("Dang nhap user thanh cong");
        event.preventDefault();
        console.log("you are user");
    }
    else{
        alert("Error!");
    }   
    
    
}