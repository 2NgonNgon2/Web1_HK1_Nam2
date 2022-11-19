let isAdmin;
let isSignedin = false; 
if(localStorage.getItem("isSignedin") != "true")
{
    isSignedin = false;
}
else
{
    isSignedin = true;
}

if(localStorage.getItem("adminSignedin") != null)
{
    document.querySelector("span.dropdown-select").innerHTML = localStorage.getItem("adminSignedin");
}

if(localStorage.getItem("userSignIn") != null){
    document.querySelector("span.dropdown-select").innerHTML=localStorage.getItem("userSignIn");  
    var dropdown_list = document.querySelector(".dropdown .dropdown-list");
        dropdown_list.innerHTML=`
            <li class="dropdown-item">
                <span class="dropdown-text">Thông tin cá nhân</span>
            </li>
            <li class="dropdown-item" onclick="showViewOrder()">
                <span class="dropdown-text">Xem đơn hàng đã đặt</span>
            </li>
            <li class="dropdown-item">
                <span class="dropdown-text" onclick="dangXuat()">Đăng xuất</span>
            </li>
                `;
    localStorage.setItem("isSignedin","true");  

} 

$(document).ready(function(){
    account.forEach(element => {
        //localStorage.clear;
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
        localStorage.setItem("isSignedin","true"); 
        window.location.href = "/admin.html";
        event.preventDefault(); // ngăn form không bị reload sau khi submit
    }
    else if(username==userLocal.username && password==userLocal.password && userLocal.authority =="user"){
        localStorage.setItem("isSignedin","true");
        localStorage.setItem("userSignIn",username);
        event.preventDefault();
        window.location.reload();
        console.log("you are user"); 
        localStorage.setItem('idCurrentUser',userLocal.id);
        showViewOrderFormWithIdUser();
    }
    else{
        alert("Error!");
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
        localStorage.removeItem("userSignIn");
    }); 
    backgroundLogin.style.display="none";
}

function dangXuat()
{
    dropdown_list.innerHTML=`
                <li class="dropdown-item" onclick="displaySignMenu('Sign in')" >
                    <span class="dropdown-text" id="sign-in">Đăng nhập</span>
                </li>
                <li class="dropdown-item" onclick="displaySignMenu('Sign up')" >
                    <span class="dropdown-text" id="sign-up">Đăng kí</span>
                </li>
          `; 

    document.querySelector("span.dropdown-select").innerHTML="My account"; 
    localStorage.removeItem("userSignIn");
    localStorage.setItem("isSignedin","false");   
    window.location.reload();
    localStorage.removeItem('idCurrentUser');
};

function dangXuatAdmin()
{
  localStorage.setItem("isSignedin","false");
  localStorage.removeItem("adminSignedin");
  window.location.href = "/index.html";
}






