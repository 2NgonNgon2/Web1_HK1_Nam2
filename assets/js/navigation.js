// scoll header menu bar
window.addEventListener('scroll', function () {
  var header = document.querySelector('header');
  header.classList.toggle("sticky", window.scrollY > 0);
});
// ham display ra menu dang nhap
// var loginMenu = document.getElementById("login");
// var createMenu = document.getElementById("create");
var backgroundLogin = document.getElementById("sigin-background");
let headerIconList = document.getElementById('header-icon-list');


headerIconList.addEventListener("click", function() {
    menu.classList.add("showMenu");
})

menuCloseIcon.addEventListener("click", function() {
    menu.classList.remove("showMenu");
})

// loginMenu.addEventListener("click", function (event) {
//     stopPropagate(event);
// })

// createMenu.addEventListener("click", function (event) {
//     stopPropagate(event);
// })

// backgroundLogin.addEventListener("click", function () {
//     backgroundLogin.style.display = "none";
// })

function displaySignMenu(input) {

  if (input == "Sign in" || input == "Sign up") {
    backgroundLogin.style.display = "flex";
    hideInfoProduct();
  }
  else {
    backgroundLogin.style.display = "none";
  }

}

function fdk() {
  if (isSignedin == false) {
    $("#sigin-background").html(`
    <div class="signin" id="create">
        <a class="signin-icon" onclick="displaySignMenu('none')">X</a>
        <h2 class="signin-heading" >Create account</h2>
        <p class="signin-already" id="signin-already">
          Already have an account ? 
          <a href="#" class="signin-link-underline" onclick="fdn()">Login now</a>
        </p>
        <form onsubmit="createAcc(event)">
          <div class="form-user-name">
              <input type="text" class="form-input" placeholder="Name" id="form-Name">
          </div>
          <div class="form-password">
              <input type="password" class="form-input" placeholder="Password" id="form-Password">
          </div>
          <div class="form-phone">
            <input type="text" class="form-input" placeholder="Phone" id="form-Phone">
          </div>
          <div class="form-email">
              <input type="text" class="form-input" placeholder="E-mail" id="form-Email">
          </div>
          <div >
              <button type="submit" class="form-submit">
                  <span class="form-submit-text" >Sign up</span>             
                  <i class="fa fa-long-arrow-right form-submit-icon"></i>      
                </button>
          </div>
        </form>
      </div>
        `);

  }
}

function fdn() {
  if (isSignedin == false) {
    $("#sigin-background").html(`
    <div class="signin" id="login">
      <a class="signin-icon" onclick="displaySignMenu('none')">
        <i class="fa-solid fa-xmark"></i></a>
      <h2 class="signin-heading">Log in</h2>
      <p class="signin-already" id="signin-already">
        You don't have an account?
        <a href="#" class="signin-link-underline" onclick="fdk()">Create now</a>
      </p>
      <form onsubmit="dangnhap(event)" >
        <div class="form-user-name">
          <input type="text" class="form-input" placeholder="Name" id="name" />
        </div>
        <div class="form-password">
          <input type="password" class="form-input" placeholder="Password" id="pass" />
        </div>
        <div>
          <button type="submit" class="form-submit">
            <span class="form-submit-text">Sign in</span>
            <i class="fa fa-long-arrow-right form-submit-icon"></i>
          </button>
        </div>
      </form>
    </div>
        `);
  }
}
$(".dropdown-item:contains('Đăng kí')").click(fdk);
$(".dropdown-item:contains('Đăng nhập')").click(fdn);