let  cardProduct = document.querySelector(".card-products-container");
console.log(cardProduct);

let product =[
  {
    "id": "1",
    "type": "keyboard",
    "name": "ban phim co 69",
    "price": "699.000",
    "img": "/picture/ban-phim-co-dareu-a98-rgb-04-400x400.jpg"
  },
  {
    "id": "2",
    "type": "mouse",
    "name": "chuot gaming 69",
    "price": "369.000",
  },
  {
    "id": "3",
    "type": "speaker",
    "name": "tai nghe kin tai 69",
    "price": "699.000",
  },
    
]

function renderProduct(){
  console.log("click!");
  
  let item = "";
  item = 
  `
        <div class="card-product-item">
          <img
            class="card-img"
            src="picture/Gaming keyboard.webp"
          />

          <div class="card-product-content">
            <div class="card-product-content-top">
              <div class="card-product-content-title card-title">
                ${product[1].name}
              </div>
              <div class="label-card-title card-title">Keyboard for gamer</div>
            </div>

            <div class="card-product-content-bottom">
              <div class="card-product-content-bottom-buying">
                <div class="card-product-content-bottom-buying-price">
                  <span class="card-product-priceNumber">${product[1].price}</span> 
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

  `
  console.log();
  cardProduct.innerHTML = item;
}


