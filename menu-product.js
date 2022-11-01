const cardProduct = document.querySelector(".card-products-container");

let isSignedin = false  // check xem đã đăng nhập chưa 
let isLastPage = 0;     // check xem trang cuối của sản phẩm là trang bao nhiêu
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

// TODO: thêm hàm kiểm tra xem đăng nhập thành công không, nếu thành công thì bật cờ isSignedin


function checkSignin()
{
  if(isSignedin === false)
  {
    alert("đăng nhập đi thằng đầu buồi!");
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
      // kiểm tra xem có phải trang cuối chưa, tránh trường hợp load vượt quá số lượng mảng
      createPageNum(tmpProduct);
      pageOneHandle();
      break;
    }
    case "headphone": {
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
    case "mouse": {
      for (let i = 0; i < product.length; i++) {
        if (product[i].type == typeProduct) {
          tmpProduct.push(product[i]);
        }
      }
      // kiểm tra xem có phải trang cuối chưa, tránh trường hợp load vượt quá số lượng mảng
      console.log(tmpProduct);
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
      // kiểm tra xem có phải trang cuối chưa, tránh trường hợp load vượt quá số lượng mảng
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
      // kiểm tra xem có phải trang cuối chưa, tránh trường hợp load vượt quá số lượng mảng
      createPageNum(tmpProduct);
      pageOneHandle();
      break;
    }
  }
}

function createPageNum(tmpProduct) {
  let quantity = tmpProduct.length / 8;

  if (quantity % 1 != 0) {
    quantity++;
  }
  
  quantity = Math.floor(quantity);
  console.log("quantity = " + quantity);
  
  let pageNum = `<div class="menu-card-products-page-number">`;
  let count = 0;

  isLastPage = 0;

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
  if (lastPageIs === 1) {
    pageRender(1, true);
  } else {
    pageRender(1, false);
  }
}

function pageRender(pageNumberClicked, lastPage) {
  item = "";
  const positionLoad = (pageNumberClicked - 1) * 8;
  
  // vị trí sản phẩm load không âm 
  if (positionLoad < 0) {
    positionLoad = 0;
  }
  // kiểm tra nếu là trang cuối thì duyệt tới hết mảng 
  if (lastPage == true) {
    console.log(pageNumberClicked + " yo im trang cuoi !");
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
      <div class="card-product-item" id="${product.id}" onclick="productInfomation(${product.id})">
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

function productInfomation(id) {
  for (let i = 0; i < product.length; i++) {
    if (product[i].id == id) {
      productInfo.innerHTML = `
        <div class="prodcts-info-container" onclick="stopPropagate(event)">
          
          <div class="product-info-item" >
            <img src="${product[i].img}" class="product-info-img" alt="">
            <div class="product-info-item-content">
              <div class="prodcts-info-container-close" onclick="hideInfoProduct()">
                <i class="fa-solid fa-xmark"></i>
              </div>
              <div class="product-info-item-content-top">
                <div class="product-info-item-content-top-title card-title">
                  ${product[i].name}</div>
                <div class="product-info-item-content-top-label-card-title card-title">${product[i].description}</div>
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
                  <div id="product-info-item-content-bottom-buying-btn" onclick="themSanPhamBtn()">

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
  closeInfoProduct = document.querySelector(".prodcts-info-container-close");
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

  productInfo.classList.add("openInfoProduct");
 
  // check if quantity input <= 1 ,clock decrease button .
  if (quantityProduct.value <= 1) {
    btnDecreaseQuantity.classList.add("clockBtn");
  }

}

/* for (let index = 0; index < cardProductItem.length; index++) {
    cardProductItemBuyingBtn[index].addEventListener("click", function (e) {
      e.stopPropagation();
  });
} 
 */
function hideInfoProduct() {
  productInfo.classList.remove("openInfoProduct");
}

productInfo.addEventListener("click", hideInfoProduct);

function stopPropagate(e) {
  e.stopPropagation();
}

// click to increase quantity product
function increaseQuantity() {
  valueQuantityProduct = parseInt(quantityProduct.value);
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
  valueQuantityProduct = parseInt(quantityProduct.value);
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
function getValueUserEntered(e) {
  if (parseInt(quantityProduct.value + e.key) > 1) {
    btnDecreaseQuantity.classList.remove("clockBtn");
  } else if(parseInt(quantityProduct.value + e.key) < 1) {
    alert("Số lượng sản phẩm không nhỏ hơn 1!");
    btnDecreaseQuantity.classList.add("clockBtn");
  }
}

/* quantityProduct.addEventListener("keypress",function(e) {
  if (parseInt(quantityProduct.value + e.key) > 1) {
    btnDecreaseQuantity.classList.remove("clockBtn");
  } else {
    alert("Số lượng sản phẩm không nhỏ hơn 1!")
    btnDecreaseQuantity.classList.add("clockBtn");

  }
}) */

function themSanPhamBtn() {
  // check nếu chưa đăng nhập
  checkSignin();
  let x = parseInt(quantityProduct.value);
  if (x < 0) x = Math.abs(x);
  console.log(x);
}

