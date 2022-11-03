const cardProduct = document.querySelector(".card-products-container");

let isSignedin = false  // check xem đã đăng nhập chưa   
let lastPageIs = 0;     // check xem trang cuối của sản phẩm là trang bao nhiêu
let tmpProduct = [];    // mảng để chứa các sản phẩm sau khi đã lọc
let item = "";          // dùng để chứa các html product-items

// Adjust quantity product

let quantityProduct;
let btnIncreaseQuantity ;
let btnDecreaseQuantity;
let btnSubmitQuantity;
let inputProductInfoBtn;
let quantity;

// mặc định khi khởi động web sẽ load trang 1 keyboard
filterProduct("keyboard");

// click card product item to open info product
let cardProductItem = document.getElementsByClassName("card-product-item");
let productInfo = document.getElementById("products-info");
let closeInfoProduct ;
let productInfoContainer ;
let cardProductItemBuyingBtn = document.querySelector(
  ".card-product-content-bottom-buying-btn"
);


function checkSignin()
{
  if(isSignedin == false)
  {
    alert("đăng nhập đi thằng đầu buồi");
  }
}



function filterProduct(typeProduct) {
  item = "";
  tmpProduct = [];
  switch (typeProduct) {
    case "keyboard": {
      for (let i = 0; i < product.length; i++) {
        if (product[i].type == typeProduct) {
          tmpProduct.push(product[i]);
        }
      }
      // kiểm tra xem 1 có phải là trang cuối không
      createPageNum(tmpProduct);
      // xử lý nếu 1 là trang cuối
      pageOneHandle();
      break;
    }
    case "headphone": {
      for (let i = 0; i < product.length; i++) {
        if (product[i].type == typeProduct) {
          tmpProduct.push(product[i]);
        }
      }
      // kiểm tra xem 1 có phải là trang cuối không
      createPageNum(tmpProduct);
      // xử lý nếu 1 là trang cuối
      pageOneHandle();
      break;
    }
    case "mouse": {
      for (let i = 0; i < product.length; i++) {
        if (product[i].type == typeProduct) {
          tmpProduct.push(product[i]);
        }
      }
      
      // kiểm tra xem có phải trang cuối chưa, tránh trường hợp load vượt quá số lượng mảng
      createPageNum(tmpProduct);
      pageOneHandle();
      break;
    }
    case "speaker": {
      for (let i = 0; i < product.length; i++) {
        if (product[i].type == typeProduct) {
          tmpProduct.push(product[i]);
        }
      }
      createPageNum(tmpProduct);
      pageOneHandle();
      break;
    }
    case "mousepad": {
      for (let i = 0; i < product.length; i++) {
        if (product[i].type == typeProduct) {
          tmpProduct.push(product[i]);
        }
      }
      createPageNum(tmpProduct);
      pageOneHandle();
      break;
    }
  }
}

function createPageNum(tmpProduct) {
  let quantity;
  console.log(isAdmin);                           // cục div thêm sản phẩm
  quantity = tmpProduct.length / 8;
  
  if (quantity % 1 != 0) {
    quantity++;
  }

  quantity = Math.floor(quantity);

  let pageNum = `<div class="menu-card-products-page-number">`;
  let count = 0;

  lastPageIs = 0;

  do {
    count++;
    if (count === quantity) {
        lastPageIs = count;
        pageNum += `
        <div class="pageNumber" onclick="pageRender(${count},true)">${count}</div>
        `;
      }
    else {
        pageNum += `
        <div class="pageNumber" onclick="pageRender(${count},false)">${count}</div>
        `;
      }
    }
  while (count < quantity);

  pageNum += `</div>`;

  activePageNumber(1);
  return pageNum;
}

function pageOneHandle() {
  if (lastPageIs == 1) {
    pageRender(1, true);
  } else {
    pageRender(1, false);
  }
}

function pageRender(pageNumberClicked, lastPage) {
  console.log(tmpProduct);
  console.log("da click trang: "+pageNumberClicked);
  item = "";
  let positionLoad = (pageNumberClicked - 1) * 8;
  
  // vị trí sản phẩm load không âm 
  if (positionLoad < 0) {
    positionLoad = 0;
  }
  // kiểm tra nếu là trang cuối thì duyệt tới hết mảng 
  if (lastPage == true) {
    console.log("đã tới trang cuối !");
    for (let k = positionLoad; k < tmpProduct.length; k++) {
      renderProduct(tmpProduct[k]);
    }
    
    item += createPageNum(tmpProduct); // thêm vào lại 3 cục div pageNumber
    cardProduct.innerHTML = item;
  }
  
  // nếu không thì duyệt đến 8 vị trí cách từ positionLoad 
  else {
    for (let k = positionLoad; k < positionLoad + 8; k++) {
      renderProduct(tmpProduct[k]);
    }
    item += createPageNum(tmpProduct);
    cardProduct.innerHTML = item;
  }
  activePageNumber(pageNumberClicked);
  
}

function activePageNumber(pageNumberClicked)
{
  const pageNumBers = document.querySelectorAll(".pageNumber");

  pageNumBers.forEach((pageNumber,index) => {
      if((index+1) != pageNumberClicked){
        pageNumber.classList.remove("activePageNumber");
      }
      else{
        pageNumber.classList.add("activePageNumber");
      }
  }); 
}

function renderProduct(product) {

  item += `
      <div class="card-product-item" title=" ${product.name}" id="${product.id}" onclick="productInfomation(${product.id})">
        <img
          class="card-img"
          src="${product.img}"
        />
        <div class="card-product-content">
          <div class="card-product-content-top">
            <div class="card-product-content-title card-title">
              ${product.name}
            </div>
            <div class="label-card-title card-title">${product.description}</div>
          </div>
          <div class="card-product-content-bottom">


          <div class="card-product-content-bottom-buying-btn" onclick="stopPropagate(event);checkSignin();addProduct(${product.id});">

            <i class="fa-solid fa-cart-shopping icon-btn-shop"></i>
            Thêm giỏ hàng
          </div>

            <div class="card-product-content-bottom-buying-btn" onclick="stopPropagate(event);checkSignin();">
              <i class="fa-solid fa-cart-shopping icon-btn-shop"></i>
              Thêm giỏ hàng
            </div>

            <div class="card-product-content-bottom-buying">
              <div class="card-product-content-bottom-buying-price">
                <span class="card-product-priceNumber">${product.price}</span> 
                <span class="card-product-priceIcon">₫</span>
              </div>
              <div class="card-product-status">
                Còn hàng
                <i class="fa-solid fa-check icon-check-status"></i>
              </div>
            </div>
            
          </div>
          </div>
        </div>
      </div>
      `;
}

// hold active menu-items
const menuItems = document.querySelectorAll(".menu-items");
const menuItemsImg = document.querySelectorAll(".menu-items-img");
const menuItemsOverlay = document.querySelectorAll(".overlay");

menuItems.forEach((menuItem, index) => {
  const menuItemImg = menuItemsImg[index];
  const menuItemOverlay = menuItemsOverlay[index];

  menuItem.onclick = function () {
    document
      .querySelector(".menu-items.activeMenuItems")
      .classList.remove("activeMenuItems");
    document
      .querySelector(".overlay.activeMenuItemOverlay")
      .classList.remove("activeMenuItemOverlay");
    document
      .querySelector(".menu-items-img.activeMenuItemImg")
      .classList.remove("activeMenuItemImg");

    this.classList.add("activeMenuItems");
    menuItemOverlay.classList.add("activeMenuItemOverlay");
    menuItemImg.classList.add("activeMenuItemImg");
  };
});


let cart = document.getElementById("cart");
let shoppingIcon = document.querySelector(".shopping-icon");
let cartContainerMiddle = document.querySelector(".cart-container-middle");

function productInfomation(id) {
  for (let i = 0; i < product.length; i++) {
    if (product[i].id == id) {
      productInfo.innerHTML = `
        <div class="prodcts-info-container" onclick="stopPropagate(event)">
          
          <div class="product-info-item" >
            <img src="${product[i].img}" class="product-info-img" alt="">
            <div class="product-info-item-content">
              <div class="products-container-close" onclick="hideInfoProduct()">
                <i class="fa-solid fa-xmark"></i>
              </div>
              <div class="product-info-item-content-top">
                <div class="product-info-item-content-top-title card-title">
                  ${product[i].name}
                </div>
                <div class="product-info-item-content-top-label-card-title card-title">
                ${product[i].description}
                </div>
              </div>

              <div class="product-info-item-content-middle">
                  <div class="product-info-item-content-middle-title">
                      Product info
                  </div>

                  <div class="product-info-item-content-middle-content">
                      ${product[i].description}
                  </div>
              </div>

              <form action="" class="product-info-item-content-bottom">

                <div class="adjustProductQuantity">
                  <div class="adjustProductQuantity-title">Số lượng : </div>
                    <div class="adjustProductQuantity-btn">
                      <button  type="button" id="adjustProductQuantity-decrease" onclick="decreaseQuantity()"><i class="fa-sharp fa-solid fa-minus adjustProductQuantity-decrease-icon"></i></button>
                      <input name="quantity" id="adjustProductQuantity-number" type="text" value="1" onkeypress="getValueUserEntered(event)" >
                      <button type="button" id="adjustProductQuantity-increase" onclick="increaseQuantity()";><i class="fa-regular fa-plus adjustProductQuantity-increase-icon"></i></button>
                    </div>
                </div>

                <div class="product-info-item-content-bottom-buying">
                  <div class="product-info-item-content-bottom-buying-price">
                    <span class="product-info-item-content-priceNumber">${product[i].price}</span> 
                    <span class="product-info-item-content-priceIcon">₫</span>
                  </div>
                  <div id="product-info-item-content-bottom-buying-btn" onclick="addProductByInfoBtn(${product[i].id});addProduct(${product[i].id});">

                    <i class="fa-solid fa-cart-shopping product-info-item-icon-btn-shop"></i>
                    <input type="button" value="Thêm giỏ hàng" id="product-info-item-content-bottom-buying-btn-input">
                    
                  </div>
                </div>
              
              </form>
            </div>
          </div>
        </div>
      `;
    }
  }
  productInfoContainer = document.querySelector(".prodcts-info-container");
  closeInfoProduct = document.querySelector(".products-container-close");
  quantityProduct = document.getElementById("adjustProductQuantity-number");
  btnIncreaseQuantity = document.getElementById(
    "adjustProductQuantity-increase"
  );
  btnDecreaseQuantity = document.getElementById(
    "adjustProductQuantity-decrease"
  );
  btnSubmitQuantity = document.getElementById(
    "product-info-item-content-bottom-buying-btn"
  );


  productInfo.classList.add("open");


  // check if quantity input <= 1 ,clock decrease button .
  if (quantityProduct.value <= 1) {
    btnDecreaseQuantity.classList.add("clockBtn");
  }

}


// show cart
function showCart() {
  cart.classList.add("open");
}

// hide info products

function hideInfoProduct() {
  productInfo.classList.remove("open");
}
productInfo.addEventListener("click", hideInfoProduct);

// hide cart
function hideCart() {
  cart.classList.remove("open");
}
cart.addEventListener("click", hideCart);

function stopPropagate(e) {
  e.stopPropagation();
}

// click to increase quantity product
function increaseQuantity() {
  var valueQuantityProduct = parseInt(quantityProduct.value);
  quantity = valueQuantityProduct + 1;
  quantityProduct.value = quantity;
  if (quantityProduct.value > 1) {
    btnDecreaseQuantity.classList.remove("clockBtn");
  }
}

/* btnIncreaseQuantity.addEventListener("click", function () {
  valueQuantityProduct = parseInt(quantityProduct.value);
  quantity = valueQuantityProduct + 1;
  quantityProduct.value = quantity;
  if (quantityProduct.value > 1) {
    btnDecreaseQuantity.classList.remove("clockBtn");
  }
}); */

// click to decrease quantity product

function decreaseQuantity() {
  var valueQuantityProduct = parseInt(quantityProduct.value);
  quantity = valueQuantityProduct - 1;
  quantityProduct.value = quantity;
  if (quantityProduct.value == 1) {
    btnDecreaseQuantity.classList.add("clockBtn");
  }
}

/* btnDecreaseQuantity.addEventListener("click", function () {
  valueQuantityProduct = parseInt(quantityProduct.value);
  quantity = valueQuantityProduct - 1;
  quantityProduct.value = quantity;
  if (quantityProduct.value == 1) {
    btnDecreaseQuantity.classList.add("clockBtn");
  }
}); */

// get value when user enter value to input
var x=1;
function getValueUserEntered(e) {
  x = parseInt(quantityProduct.value + e.key);
  var y = parseInt(e.key);
  // kiểm tra số lớn hơn 1 thì mở khóa nút giảm số lượng
  if (x > 1 || y > 1) {
    btnDecreaseQuantity.classList.remove("clockBtn");
  } 
  // kiểm tra số nhỏ hơn 1 thì cảnh báo
  else if (x < 1 || y < 1) {
    alert("Số lượng sản phẩm không nhỏ hơn 1!");
    btnDecreaseQuantity.classList.add("clockBtn");
  } 
  // kiểm tra không là số thì cảnh báo
  else if( isNaN(x) || isNaN(y)) {
    alert("Số lượng sản phẩm phải là số!");
  }
}

// đổi tổng tiền khi thêm và xóa sản phẩm
var cartTotalAmountNumber = document.getElementById('cart-container-bottom-total-amount-number');
var cartTotalAmountNumberValue = parseInt(cartTotalAmountNumber.value);
var numberTmp=0;
console.log(cartTotalAmountNumber.value);

function updateTotal(quantity,price) {
  console.log(quantity);
  console.log(price);
  console.log();
  numberTmp += quantity * price ;
  cartTotalAmountNumber.value = numberTmp.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + '.000' ;
  console.log( cartTotalAmountNumber.value);
}


function addProductByInfoBtn(id) {  
  x = parseInt(quantityProduct.value);
  
}
 
// nút thêm sản phẩm vào giỏ hàng   
let cartContainItem = "";
var btnRemoveProductInCarts;
var temp = [];

function addProduct(id) { 
  // kiểm tra quantity khi nhấn nút thêm sản phẩm trong product info 
  if (isNaN(x)) {
    alert("Số lượng sản phẩm phải là số!");
    return;// thoát khỏi sự kiện click
  }
  if (x < 0) {
    alert("Số lượng sản phẩm không nhỏ hơn 1!");
    return;// thoát khỏi sự kiện click
  }
  
  
  var savePrice;
  // chạy for để thêm đúng sản phẩm vào giỏ hàng
  for (let i = 0; i < product.length; i++) {
    if (product[i].id == id) {
      cartContainItem = `
    <div class="cart-container-middle-product">
      <div class="cart-container-middle-product-img">
       <img src="${product[i].img}" alt="">
      </div>
      <div class="cart-container-middle-product-name">
        <div class="cart-container-middle-product-name-title">
          ${product[i].name}
        </div>
        <div class="cart-container-middle-product-name-label">
          ${product[i].description}
        </div>
      </div>
      <div class="cart-container-middle-product-quantity">
        <input type="number" value="${x}" class="cart-container-middle-product-quantity-adjust" min="1">
      </div>
      <div class="cart-container-middle-product-price">
        <span class="cart-container-middle-product-priceNumber">${product[i].price}</span> 
        <span class="cart-container-middle-product-priceIcon">₫</span>
      </div>
      <div class="cart-container-middle-product-remove">
        <i class="fa-solid fa-xmark cart-remove-icon"></i>
      </div>
    </div>
    `;
    temp[i]=1; 
    savePrice = parseFloat(product[i].price);
    
    }
  }
  var cartQuantityAdjust = document.getElementsByClassName('cart-container-middle-product-quantity-adjust');
  // console.log(cartQuantityAdjust[0].value);
  updateTotal(x,savePrice);
  
  // đưa sản phẩm mới thêm lên đầu trong giỏ hàng
  cartContainerMiddle.innerHTML = cartContainItem + cartContainerMiddle.innerHTML;
  // chạy for để tìm nút xóa sản phẩm 

  btnRemoveProductInCarts = document.getElementsByClassName("cart-container-middle-product-remove");
  for (let index = 0; index < btnRemoveProductInCarts.length; index++) {
    var btnRemoveProductInCart = btnRemoveProductInCarts[index];
    btnRemoveProductInCart.addEventListener("click", function(e) {
      var parent =this.parentElement;
      numberTmp -= (parseInt(parent.children[2].children[0].value) * parseInt(parent.children[3].children[0].innerText));
      cartTotalAmountNumber.value = (numberTmp).toString() ;
      parent.remove();
    })
  }
  x=1;//sau khi xong thì trả x về trạng thái ban đầu(x là input value trong cart) 
}







