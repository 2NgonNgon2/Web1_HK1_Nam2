//info product
let quantityProduct;
let btnIncreaseQuantity;
let btnDecreaseQuantity;
let btnSubmitQuantity;
let inputProductInfoBtn;
let quantity;
// click card product item to open info product
let cardProductItem = document.getElementsByClassName("card-product-item");
let productInfo = document.getElementById("products-info");
let closeInfoProduct ;
let productInfoContainer ;
let cardProductItemBuyingBtn = document.querySelector(
  ".card-product-content-bottom-buying-btn"
);
// hide info products
function hideInfoProduct() {
  productInfo.classList.remove("open");
  console.log(productInfo);
}
productInfo.addEventListener("click", hideInfoProduct);

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
                    <div id="product-info-item-content-bottom-buying-btn" onclick="addProductToCartByInforProduct(${product[i].id});checkEventInputValueCart();">
  
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

// Adjust quantity product
// click to increase quantity product
function increaseQuantity() {
  var valueQuantityProduct = parseInt(quantityProduct.value);
  quantity = valueQuantityProduct + 1;
  quantityProduct.value = quantity;
  if (quantityProduct.value > 1) {
    btnDecreaseQuantity.classList.remove("clockBtn");
  }
}

// click to decrease quantity product

function decreaseQuantity() {
  var valueQuantityProduct = parseInt(quantityProduct.value);
  quantity = valueQuantityProduct - 1;
  quantityProduct.value = quantity;
  if (quantityProduct.value == 1) {
    btnDecreaseQuantity.classList.add("clockBtn");
  }
}

// get value when user enter value to input
var x = 1;
var saveQuantity = 1;
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
  else if (isNaN(x) || isNaN(y)) {
    alert("Số lượng sản phẩm phải là số!");
  }
}
