const cardProduct = document.querySelector(".card-products-container");


let product = [
  {
    "id": "1",
    "type": "keyboard",
    "name": "ban phim co 69",
    "price": "699.000",
    "description": "Keyboard for gamer",
    "img": "/picture/ban-phim-co-dareu-a98-rgb-04-400x400.jpg",
    
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
    "name": "ban phim vjp pro max 69",
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
    "name": "ban phim vjp pro max 69",
    "description": "Keyboard for gamer",
    "img": "/picture/keyboard.jpg",
    "price": "699.000",
  },
];

function filterProduct(typeProduct){
  let item = "";
  switch(typeProduct){
    case "keyboard":{
      let tmpProduct=[];
      for(let i=0; i<product.length; i++){
        if(product[i].type === typeProduct)
          {
            tmpProduct.push(product[i]);
          }
      };
      console.log(tmpProduct);
      console.log(tmpProduct.length);
      break;
    }
    case "headphone":{
      for(let i=0; i< product.length; i++){
        if(product[i].type === "headphone")
          renderProduct(product[i]);
      };break;
    }
    case "mouse":{
      for(let i=0; i<product.length; i++){
        if(product[i].type === "mouse")
          renderProduct(product[i]);
      };break;
    }
    case "speaker":{
      for(let i=0; i<product.length; i++){
        if(product[i].type === "speaker")
          renderProduct(product[i]);
      };break;
    }
    case "mousepad":{
      for(let i=0; i<product.length; i++){
        if(product[i].type === "mousepad")
          renderProduct(product[i]);
      };break;
    }

  }

function renderProduct(product)
{
  item += 
    `
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
      <div class="menu-card-products-page-number">
        <div class="pageNumber">1</div>
        <div class="pageNumber">2</div>
        <div class="pageNumber">3</div>
      </div>
    `
}

  console.log(item);
  cardProduct.innerHTML = item;
}


