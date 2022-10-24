const cardProduct = document.querySelector(".card-products-container");
const pageNumber = document.querySelector(".menu-card-products-page-number");

let isLastPage = 0;
let tmpProduct = [];
let item = "";

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
    "id": "17",
    "type": "keyboard",
    "name": "ban phim vjp pro max 69",
    "description": "Keyboard for gamer",
    "img": "/picture/keyboard.jpg",
    "price": "699.000",
  },
  {
    "id": "2",
    "type": "mouse",
    "name": "chuot gaming 69",
    "description": "Mouse for magaming",
    "img": "/picture/mouse.png",
    "price": "369.000",
  },
  {
    "id": "3",
    "type": "keyboard",
    "name": "ban phim vjp pro max 69",
    "description": "Keyboard for gamer",
    "img": "/picture/keyboard.jpg",
    "price": "699.000",
  },
  {
    "id": "4",
    "type": "mousepad",
    "name": "lót chuột pro max",
    "description": "Mouse pad for wibu ",
    "img": "/picture/mousepads.png",
    "price": "169.000",
  },
  {
    "id": "5",
    "type": "speaker",
    "name": "loa xập xình",
    "description": " loa cho dan choi",
    "img": "/picture/speaker.png",
    "price": "569.000",
  },
  {
    "id": "6",
    "type": "mousepad",
    "name": "lót chuột siêu vjp pro",
    "description": "lot chuot cho dan vjp",
    "img": "/picture/mousepads.png",
    "price": "569.000",
  },
  {
    "id": "7",
    "type": "headphone",
    "name": "tai nghe vjp pro cho dân quẩy",
    "description": "tai nghe hiphop",
    "img": "/picture/headphone.png",
    "price": "569.000",
  },
  {
    "id": "8",
    "type": "headphone",
    "name": "tai nghe cho người điếc",
    "description": "tai nghe magaming",
    "img": "/picture/headphone.png",
    "price": "569.000",
  },
  {
    "id": "9",
    "type": "keyboard",
    "name": "ban phim co 69",
    "price": "699.000",
    "description": "Keyboard for gamer",
    "img": "/picture/keyboard.jpg",
    
  },
  {
    "id": "10",
    "type": "mouse",
    "name": "chuot gaming 69",
    "description": "Mouse for magaming",
    "img": "/picture/mouse.png",
    "price": "369.000",
  },
  {
    "id": "11",
    "type": "keyboard",
    "name": "ban phim nhu con cac",
    "description": "Keyboard for gamer",
    "img": "/picture/keyboard.jpg",
    "price": "699.000",
  },
  {
    "id": "12",
    "type": "mousepad",
    "name": "lót chuột pro max",
    "description": "Mouse pad for wibu ",
    "img": "/picture/mousepads.png",
    "price": "169.000",
  },
  {
    "id": "13",
    "type": "speaker",
    "name": "loa xập xình",
    "description": " loa cho dan choi",
    "img": "/picture/speaker.png",
    "price": "569.000",
  },
  {
    "id": "14",
    "type": "mousepad",
    "name": "lót chuột siêu vjp pro",
    "description": "lot chuot cho dan vjp",
    "img": "/picture/mousepads.png",
    "price": "569.000",
  },
  {
    "id": "15",
    "type": "headphone",
    "name": "tai nghe vjp pro cho dân quẩy",
    "description": "tai nghe hiphop",
    "img": "/picture/headphone.png",
    "price": "569.000",
  },
  {
    "id": "16",
    "type": "headphone",
    "name": "tai nghe cho người điếc",
    "description": "tai nghe magaming",
    "img": "/picture/headphone.png",
    "price": "569.000",
  },
  {
    "id": "17",
    "type": "keyboard",
    "name": "ban phim du ma js nhu l",
    "description": "Keyboard for gamer",
    "img": "/picture/keyboard.jpg",
    "price": "699.000",
  },
];


// mặc định khi khởi động web sẽ load trang 1 keyboard
filterProduct("keyboard");

function filterProduct(typeProduct){
  item="";
  tmpProduct=[];
  switch(typeProduct){
    case "keyboard":{
      for(let i=0; i < product.length; i++){
        if(product[i].type == typeProduct)
        {
            tmpProduct.push(product[i]);
        }
      }
      // kiểm tra xem có phải trang cuối chưa, tránh trường hợp load vượt quá số lượng mảng
      createPageNum(tmpProduct);
      pageOneHandle();
      break;
    }
    case "headphone":{
      for(let i=0; i < product.length; i++){
        if(product[i].type == typeProduct)
        {
            tmpProduct.push(product[i]);
        }
      }
      // kiểm tra xem có phải trang cuối chưa, tránh trường hợp load vượt quá số lượng mảng
      createPageNum(tmpProduct);
      pageOneHandle();
      break;
    }
    case "mouse":{
      for(let i=0; i < product.length; i++){
        if(product[i].type == typeProduct)
        {
            tmpProduct.push(product[i]);
        }
      }
      // kiểm tra xem có phải trang cuối chưa, tránh trường hợp load vượt quá số lượng mảng
      createPageNum(tmpProduct);
      pageOneHandle();
      break;
    }
    case "speaker":{
      for(let i=0; i < product.length; i++){
        if(product[i].type == typeProduct)
        {
            tmpProduct.push(product[i]);
        }
      }
      // kiểm tra xem có phải trang cuối chưa, tránh trường hợp load vượt quá số lượng mảng
      createPageNum(tmpProduct);
      pageOneHandle();
      break;
    }
    case "mousepad":{
      for(let i=0; i < product.length; i++){
        if(product[i].type == typeProduct)
        {
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



function createPageNum(tmpProduct)
{
  let quantity = tmpProduct.length/8;
  

  if(quantity % 1 != 0)
  {
    console.log("decimal");
    quantity++;
  }

  if(quantity == 0)
  {
    quantity = 1;
  }
  quantity = Math.floor(quantity);
  console.log(quantity);
  let pageNum = `<div class="menu-card-products-page-number">`;
  let count=0;
  isLastPage = 0;
  do{
    count++;
    if(count === quantity)
    {
      isLastPage = count;
      pageNum +=
      `
      <div class="pageNumber" onclick="pageRender(${count},true)">${count}</div>
      `
    }
    else
    {
      pageNum +=
      `
      <div class="pageNumber" onclick="pageRender(${count},false)">${count}</div>
      `
    }
  }
  while(count < quantity);
  pageNum += `</div>`;

  return pageNum;
}

function pageRender(pageNumberClicked,lastPage)
{
  item = "";
  //tmpProduct.push(product[product.length-1]);
  let positionLoad = (pageNumberClicked-1)*8;
  if(positionLoad < 0){ positionLoad = 0}
  if(lastPage == true)
  {
    for(let k=positionLoad; k < tmpProduct.length; k++)
    {
      renderProduct(tmpProduct[k]);
    }

    item += createPageNum(tmpProduct);  // thêm vào lại 3 cục div pageNumber
    cardProduct.innerHTML = item ;
  }
  else
  {

    for(let k=positionLoad; k < (positionLoad + 8); k++)
    {
      renderProduct(tmpProduct[k]);
    }

    item += createPageNum(tmpProduct);
    cardProduct.innerHTML = item ;
  }
}

function pageOneHandle()
{
  if(isLastPage == 1)
      {
        pageRender(1,true);
      }
      else
      {
        pageRender(1,false);
      }
      pageRender(1);
}

  function renderProduct(product) {
    item += `
      <div class="card-product-item">
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
            <div class="card-product-content-bottom-buying">
              <div class="card-product-content-bottom-buying-price">
                <span class="card-product-priceNumber">${product.price}</span> 
                <span class="card-product-priceIcon">₫</span>
              </div>
              <div class="card-product-content-bottom-buying-btn">
                <i class="fa-solid fa-cart-shopping icon-btn-shop"></i>
                Thêm giỏ hàng
              </div>
            </div>
            <div class="card-product-status">
              <i class="fa-solid fa-check icon-check-status"></i>
              Còn hàng
            </div>
          </div>
        </div>
      </div>
    `
  }



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
let cardProductItem = document.getElementsByClassName("card-product-item");
let productInfo = document.getElementById("products-info");
let closeInfoProduct = document.querySelector(".prodcts-info-container-close");
let productInfoContainer = document.querySelector(".prodcts-info-container");
let cardProductItemBuyingBtn = document.querySelectorAll(
  ".card-product-content-bottom-buying-btn"
);
let inputProductInfoBtn = document.getElementById("product-info-item-content-bottom-buying-btn-input");

let quantity;

// click card product item to open info product

for (let index = 0; index < cardProductItem.length; index++) {
  cardProductItem[index].addEventListener("click", function () {
    productInfo.classList.add("openInfoProduct");
    
  });
  cardProductItemBuyingBtn[index].addEventListener("click", function (e) {
    e.stopPropagation();
  });
}

function hideInfoProduct() {
  productInfo.classList.remove("openInfoProduct");
}

closeInfoProduct.addEventListener("click", hideInfoProduct);
productInfo.addEventListener("click", hideInfoProduct);
productInfoContainer.addEventListener("click", function (e) {
  e.stopPropagation();
});



// click to increase quantity product
btnIncreaseQuantity.addEventListener("click", function () {
  valueQuantityProduct = parseInt(quantityProduct.value);
  quantity = valueQuantityProduct + 1;
  quantityProduct.value = quantity;
  if (quantityProduct.value > 1) {
    btnDecreaseQuantity.classList.remove("clockBtn");
  }
});

// click to decrease quantity product
btnDecreaseQuantity.addEventListener("click", function () {
  valueQuantityProduct = parseInt(quantityProduct.value);
  quantity = valueQuantityProduct - 1;
  quantityProduct.value = quantity;
  if (quantityProduct.value == 1) {
    btnDecreaseQuantity.classList.add("clockBtn");
  }
});

// check if quantity input <= 1 ,clock decrease button .
if (quantityProduct.value <= 1) {
  btnDecreaseQuantity.classList.add("clockBtn");
  
} 
// get value when user enter value to input
quantityProduct.addEventListener("keypress",function(e) {
  if (parseInt(quantityProduct.value + e.key) > 1) {
    btnDecreaseQuantity.classList.remove("clockBtn");
  } else {
    alert("Số lượng sản phẩm không nhỏ hơn 1!")
    btnDecreaseQuantity.classList.add("clockBtn");

  }
})


    console.log(parseInt(quantityProduct.value));
 
inputProductInfoBtn.onclick = function() {
  let x = parseInt(quantityProduct.value)
if( x < 0)
   x =  Math.abs(x);  
   console.log(x);
}