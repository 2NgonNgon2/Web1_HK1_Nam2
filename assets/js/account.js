
let isAdmin;

$(document).ready(function(){
    account.forEach(element => {
        var json = JSON.stringify(element);
	    localStorage.setItem(element.username,json);
    });
    if(location.href=='/admin.html'){
        document.querySelector("span.dropdown-select").innerHTML="Admin"; 
    }
});
function dangnhap(event){
    var username = document.getElementById("name").value;
    var password = document.getElementById("pass").value;
    var userLocal=JSON.parse(localStorage.getItem(username));
    if(username==userLocal.username && password==userLocal.password && userLocal.authority =="admin"){
        localStorage.setItem("adminSignedin",username);
        window.location.href = "/admin.html";
        event.preventDefault(); // ngăn form không bị reload sau khi submit
    }
    else if(username==userLocal.username && password==userLocal.password && userLocal.authority =="user"){
        isSignedin = true;
        isAdmin = false;
        event.preventDefault();
        console.log("you are user");        
    }
    else{
        alert("Error!");
    }
    if(isSignedin){
        document.querySelector("span.dropdown-select").innerHTML=userLocal.username;  
        var dropdown_list = document.querySelector(".dropdown .dropdown-list");
            dropdown_list.innerHTML=`
                <li class="dropdown-item">
                    <span class="dropdown-text">Thông tin cá nhân</span>
                </li>
                <li class="dropdown-item ">
                    <span class="dropdown-text">Lịch sử mua hàng</span>
                </li>
                <li class="dropdown-item">
                    <span class="dropdown-text">Xem đơn hàng đã đặt</span>
                </li>
                <li class="dropdown-item">
                    <span class="dropdown-text">Đăng xuất</span>
                </li>
                    `;
    } 

      $(".dropdown-item:contains('Đăng xuất')").click(function(){
        if(isSignedin==true){
            isSignedin= false;
            dropdown_list.innerHTML=`
                <li class="dropdown-item" onclick="displaySignMenu('Sign in')" >
                    <span class="dropdown-text" id="sign-in">Đăng nhập</span>
                </li>
                <li class="dropdown-item" onclick="displaySignMenu('Sign up')" >
                    <span class="dropdown-text" id="sign-up">Đăng kí</span>
                </li>
          `; 
        }  
        document.querySelector("span.dropdown-select").innerHTML="My account"; 
    }); 
    backgroundLogin.style.display="none";
}





