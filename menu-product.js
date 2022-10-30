const cardProduct = document.querySelector(".card-products-container");

let isLastPage = 0;
let tmpProduct = [];
let item = "";

// mảng sản phẩm

let product = [
  {
    id: "1",
    type: "keyboard",
    name: "ban phim co 69",
    price: "699.000",
    description: "Keyboard for gamer",
    img: "/picture/ban-phim-co-dareu-a98-rgb-04-400x400.jpg",
  },
  {
    id: "2",
    type: "mouse",
    name: "chuot gaming 69",
    description: "Mouse for magaming",
    img: "/picture/mouse.png",
    price: "369.000",
  },
  {
    id: "3",
    type: "keyboard",
    name: "ban phim vjp pro max 69",
    description: "Keyboard for gamer",
    img: "/picture/keyboard.jpg",
    price: "699.000",
  },
  {
    id: "4",
    type: "mousepad",
    name: "lót chuột pro max",
    description: "Mouse pad for wibu ",
    img: "/picture/mousepads.png",
    price: "169.000",
  },
  {
    id: "5",
    type: "speaker",
    name: "loa xập xình",
    description: " loa cho dan choi",
    img: "/picture/speaker.png",
    price: "569.000",
  },
  {
    id: "6",
    type: "mousepad",
    name: "lót chuột siêu vjp pro",
    description: "lot chuot cho dan vjp",
    img: "/picture/mousepads.png",
    price: "569.000",
  },
  {
    id: "7",
    type: "headphone",
    name: "tai nghe vjp pro cho dân quẩy",
    description: "tai nghe hiphop",
    img: "/picture/headphone.png",
    price: "569.000",
  },
  {
    id: "8",
    type: "headphone",
    name: "tai nghe cho người điếc",
    description: "tai nghe magaming",
    img: "/picture/headphone.png",
    price: "569.000",
  },
  {
    id: "9",
    type: "keyboard",
    name: "ban phim co 69",
    price: "699.000",
    description: "Keyboard for gamer",
    img: "/picture/keyboard.jpg",
  },
  {
    id: "10",
    type: "mouse",
    name: "chuot gaming 69",
    description: "Mouse for magaming",
    img: "/picture/mouse.png",
    price: "369.000",
  },
  {
    id: "11",
    type: "keyboard",
    name: "ban phim vjp pro max 69",
    description: "Keyboard for gamer",
    img: "/picture/keyboard.jpg",
    price: "699.000",
  },
  {
    id: "12",
    type: "mousepad",
    name: "lót chuột pro max",
    description: "Mouse pad for wibu ",
    img: "/picture/mousepads.png",
    price: "169.000",
  },
  {
    id: "13",
    type: "speaker",
    name: "loa xập xình",
    description: " loa cho dan choi",
    img: "/picture/speaker.png",
    price: "569.000",
  },
  {
    id: "14",
    type: "mousepad",
    name: "lót chuột siêu vjp pro",
    description: "lot chuot cho dan vjp",
    img: "/picture/mousepads.png",
    price: "569.000",
  },
  {
    id: "15",
    type: "headphone",
    name: "tai nghe vjp pro cho dân quẩy",
    description: "tai nghe hiphop",
    img: "/picture/headphone.png",
    price: "569.000",
  },
  {
    id: "16",
    type: "headphone",
    name: "tai nghe cho người điếc",
    description: "tai nghe magaming",
    img: "/picture/headphone.png",
    price: "569.000",
  },
  {
    id: "17",
    type: "keyboard",
    name: "ban phim vjp pro max 69",
    description: "Keyboard for gamer",
    img: "/picture/keyboard.jpg",
    price: "699.000",
  },
  {
    id: "18",
    type: "mouse",
    name: "chuot gaming 69",
    description: "Mouse for magaming",
    img: "/picture/mouse.png",
    price: "369.000",
  },
  {
    id: "19",
    type: "keyboard",
    name: "ban phim vjp pro max 69",
    description: "Keyboard for gamer",
    img: "/picture/keyboard.jpg",
    price: "699.000",
  },
  {
    id: "20",
    type: "mousepad",
    name: "lót chuột pro max",
    description: "Mouse pad for wibu ",
    img: "/picture/mousepads.png",
    price: "169.000",
  },
  {
    id: "21",
    type: "speaker",
    name: "loa xập xình",
    description: " loa cho dan choi",
    img: "/picture/speaker.png",
    price: "569.000",
  },
  {
    id: "22",
    type: "mousepad",
    name: "lót chuột siêu vjp pro",
    description: "lot chuot cho dan vjp",
    img: "/picture/mousepads.png",
    price: "569.000",
  },
  {
    id: "23",
    type: "headphone",
    name: "tai nghe vjp pro cho dân quẩy",
    description: "tai nghe hiphop",
    img: "/picture/headphone.png",
    price: "569.000",
  },
  {
    id: "24",
    type: "headphone",
    name: "tai nghe cho người điếc",
    description: "tai nghe magaming",
    img: "/picture/headphone.png",
    price: "569.000",
  },
  {
    id: "25",
    type: "keyboard",
    name: "ban phim co 69",
    price: "699.000",
    description: "Keyboard for gamer",
    img: "/picture/keyboard.jpg",
  },
  {
    id: "26",
    type: "mouse",
    name: "chuot gaming 69",
    description: "Mouse for magaming",
    img: "/picture/mouse.png",
    price: "369.000",
  },
  {
    id: "27",
    type: "keyboard",
    name: "ban phim nhu con cac",
    description: "Keyboard for gamer",
    img: "/picture/keyboard.jpg",
    price: "699.000",
  },
  {
    id: "28",
    type: "mousepad",
    name: "lót chuột pro max",
    description: "Mouse pad for wibu ",
    img: "/picture/mousepads.png",
    price: "169.000",
  },
  {
    id: "29",
    type: "speaker",
    name: "loa xập xình",
    description: " loa cho dan choi",
    img: "/picture/speaker.png",
    price: "569.000",
  },
  {
    id: "30",
    type: "mousepad",
    name: "lót chuột siêu vjp pro",
    description: "lot chuot cho dan vjp",
    img: "/picture/mousepads.png",
    price: "569.000",
  },
  {
    id: "31",
    type: "headphone",
    name: "tai nghe vjp pro cho dân quẩy",
    description: "tai nghe hiphop",
    img: "/picture/headphone.png",
    price: "569.000",
  },
  {
    id: "32",
    type: "headphone",
    name: "tai nghe cho người điếc",
    description: "tai nghe magaming",
    img: "/picture/headphone.png",
    price: "569.000",
  },
  {
    id: "33",
    type: "keyboard",
    name: "ban phim du ma js nhu l",
    description: "Keyboard for gamer",
    img: "/picture/keyboard.jpg",
    price: "699.000",
  },
];

// mặc định khi khởi động web sẽ load trang 1 keyboard
filterProduct("keyboard");

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
    } else {
      pageNum += `
        <div class="pageNumber" onclick="pageRender(${count},false)">${count}</div>
        `;
    }
  } while (count < quantity);

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

function activePageNumber(pageNumberClicked) {
  const pageNumBers = document.querySelectorAll(".pageNumber");

  pageNumBers.forEach((pageNumber, index) => {
    if (index + 1 != pageNumberClicked) {
      pageNumber.classList.remove("activePageNumber");
    } else {
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

          <div class="card-product-content-bottom-buying-btn" onclick="stopPropagate(event)">
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

// Adjust quantity product

let quantityProduct = document.getElementById("adjustProductQuantity-number");
let btnIncreaseQuantity = document.getElementById(
  "adjustProductQuantity-increase"
);
let btnDecreaseQuantity = document.getElementById(
  "adjustProductQuantity-decrease"
);
let btnSubmitQuantity = document.getElementById(
  "product-info-item-content-bottom-buying-btn"
);
let inputProductInfoBtn = document.getElementById(
  "product-info-item-content-bottom-buying-btn-input"
);
let quantity;

// click card product item to open info product
let cardProductItem = document.getElementsByClassName("card-product-item");
let productInfo = document.getElementById("products-info");
let closeInfoProduct = document.querySelector(".prodcts-info-container-close");
let productInfoContainer = document.querySelector(".prodcts-info-container");
let cardProductItemBuyingBtn = document.querySelector(
  ".card-product-content-bottom-buying-btn"
);

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
// hide info products
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

// click to decrease quantity product

function decreaseQuantity() {
  valueQuantityProduct = parseInt(quantityProduct.value);
  quantity = valueQuantityProduct - 1;
  quantityProduct.value = quantity;
  if (quantityProduct.value == 1) {
    btnDecreaseQuantity.classList.add("clockBtn");
  }
}

// get value when user enter value to input
function getValueUserEntered(e) {
  const x =parseInt(quantityProduct.value + e.key) ;
  if ( x > 1) {
    btnDecreaseQuantity.classList.remove("clockBtn");
  } else if (x < 1) {
    alert("Số lượng sản phẩm không nhỏ hơn 1!");
    btnDecreaseQuantity.classList.add("clockBtn");
  } 
}

// nút thêm sản phẩm và chuyển số âm thành dương nếu user cố tình nhập số âm
function themSanPhamBtn() {
  let x = parseInt(quantityProduct.value);
  if(isNaN(x)) {
    alert("Số lượng sản phârm phải là số!");
  }
  if (x < 0) {
    alert("Số lượng sản phẩm không nhỏ hơn 1!");
    x = Math.abs(x);
  }
  console.log(x);
}
