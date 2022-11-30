let isAdmin;
let isSignedin = false;

$(document).ready(function () {

    if (location.href == '/admin.html') {
        document.querySelector("span.dropdown-select").innerHTML = "Admin";
    }
});

if (localStorage.getItem("isSignedin") != "true") {
    isSignedin = false;
}
else {
    isSignedin = true;
}

if (localStorage.getItem("adminSignedin") != null) {
    document.querySelector("span.dropdown-select").innerHTML = localStorage.getItem("adminSignedin");
}

if (localStorage.getItem("userSignIn") != null) {
    let userNameTmp = JSON.parse(localStorage.getItem("currentUser"));
    document.querySelector("span.dropdown-select").innerHTML = localStorage.getItem("userSignIn");
    var dropdown_list = document.querySelector(".dropdown .dropdown-list");
    dropdown_list.innerHTML = `
            <li class="dropdown-item" onclick="openEditAccountTable(${userNameTmp.id})">
                <span class="dropdown-text">Thông tin cá nhân</span>
            </li>
            <li class="dropdown-item" onclick="showViewOrder()">
                <span class="dropdown-text">Xem đơn hàng đã đặt</span>
            </li>
            <li class="dropdown-item">
                <span class="dropdown-text">Đăng xuất</span>
            </li>
                `;
    localStorage.setItem("isSignedin", "true");
    $(".dropdown-item:contains('Đăng xuất')").click(function () {
        if (isSignedin == true) {
            isSignedin = false;
            dropdown_list.innerHTML = `
                <li class="dropdown-item" onclick="displaySignMenu('Sign in')" >
                    <span class="dropdown-text" id="sign-in">Đăng nhập</span>
                </li>
                <li class="dropdown-item" onclick="displaySignMenu('Sign up')" >
                    <span class="dropdown-text" id="sign-up">Đăng kí</span>
                </li>
          `;
        }
        localStorage.setItem("cart",JSON.stringify([]));
        document.querySelector("span.dropdown-select").innerHTML = "Tài khoản";
        localStorage.removeItem("userSignIn");
        localStorage.removeItem("textSpan");
        localStorage.setItem("currentUser",JSON.stringify({}));
        localStorage.setItem("isSignedin", isSignedin);
        window.location.reload();
    });
}

function dangXuatAdmin() {
    localStorage.setItem("isSignedin", "false");
    localStorage.removeItem("adminSignedin");
    window.location.href = "/index.html";
}

function dangnhap(event) {
    try {
        var username = document.getElementById("name").value;
        var password = document.getElementById("pass").value;

        var arr = JSON.parse(localStorage.getItem("arr-account"));
        var found = false;
        arr.forEach(element => {
            if (username == element.username && password == element.password && element.authority == "admin") {
                found = true;
                localStorage.setItem("adminSignedin", username);
                localStorage.setItem("isSignedin", "true");
                window.location.href = "/admin.html";
                event.preventDefault(); // ngăn form không bị reload sau khi submit
            }
            else if (username == element.username && password == element.password && element.authority == "user") {
                localStorage.setItem("isSignedin", "true");
                localStorage.setItem("userSignIn", username);
                localStorage.setItem("currentUser",JSON.stringify(element));
                found = true;
            }
        });
        if (found === false) {
            alert("Sai tài khoản hoặc mật khẩu!!");
        }

        backgroundLogin.style.display = "none";
    } catch (err) {
        alert(err);
    }

}

function createAcc(event) {
    try {
        var authority = "user";
        var username = document.getElementById("form-Name").value;
        var password = document.getElementById("form-Password").value;
        var phone = document.getElementById("form-Phone").value;
        var email = document.getElementById("form-Email").value;
        var arr = JSON.parse(localStorage.getItem("arr-account"));
        var found = false;
        arr.forEach(element => {
            if (element.username === username) {
                alert("Tên đăng nhập đã tồn tại!");
                found = true;
            }
        });
        if (found == false) {
            var id = arr.length + 1 + "";
            var user = {
                id: id,
                username: username,
                password: password,
                phone: phone,
                email: email,
                authority: authority,
                status: false,
            }
            arr.push(user);
            localStorage.setItem("arr-account", JSON.stringify(arr));
            alert("Dang ki thanh cong");
        }

    } catch (err) {
        alert(err);
    }
}




