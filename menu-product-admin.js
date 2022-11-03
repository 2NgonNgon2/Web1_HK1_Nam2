const cardProduct = document.querySelector(".card-products-container");
  
let lastPageIs = 0;     // check xem trang cuối của sản phẩm là trang bao nhiêu
let tmpProduct = [];    // mảng để chứa các sản phẩm sau khi đã lọc
let item = "";          // dùng để chứa các html product-items
let isSignedin = true;
let isAdmin = true;

filterProductAdmin("keyboard")

function filterProductAdmin(typeProduct) {
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
      createPageNumAdmin(tmpProduct);
      // xử lý nếu 1 là trang cuối
      pageOneHandleAdmin();
      break;
    }
    case "headphone": {
      for (let i = 0; i < product.length; i++) {
        if (product[i].type == typeProduct) {
          tmpProduct.push(product[i]);
        }
      }
      // kiểm tra xem 1 có phải là trang cuối không
      createPageNumAdmin(tmpProduct);
      // xử lý nếu 1 là trang cuối
      pageOneHandleAdmin();
      break;
    }
    case "mouse": {
      for (let i = 0; i < product.length; i++) {
        if (product[i].type == typeProduct) {
          tmpProduct.push(product[i]);
        }
      }
      createPageNumAdmin(tmpProduct);
      pageOneHandleAdmin();
      break;
    }
    case "speaker": {
      for (let i = 0; i < product.length; i++) {
        if (product[i].type == typeProduct) {
          tmpProduct.push(product[i]);
        }
      }
      createPageNumAdmin(tmpProduct);
      pageOneHandleAdmin();
      break;
    }
    case "mousepad": {
      for (let i = 0; i < product.length; i++) {
        if (product[i].type == typeProduct) {
          tmpProduct.push(product[i]);
        }
      }
      createPageNumAdmin(tmpProduct);
      pageOneHandleAdmin();
      break;
    }
  }
}

function createPageNumAdmin(tmpProduct) {
  
  console.log(isAdmin);
  let length = tmpProduct.length + 1;
  let quantity = length / 8;

  if (quantity % 1 != 0) {
    quantity++;
  }

  quantity = Math.floor(quantity);
  console.log("quantity = " + quantity);
  
  let pageNum = `<div class="menu-card-products-page-number">`;
  let count = 0;

  lastPageIs = 0;

  do {
    count++;
    if (count === quantity) {
        lastPageIs = count;
        pageNum += `
        <div class="pageNumber" onclick="pageRenderAdmin(${count},true)">${count}</div>
        `;
      }
    else {
        pageNum += `
        <div class="pageNumber" onclick="pageRenderAdmin(${count},false)">${count}</div>
        `;
      }
    }
  while (count < quantity);

  pageNum += `</div>`;

  activePageNumber(1);
  return pageNum;
}

function pageOneHandleAdmin() {
  if (lastPageIs == 1) {
    pageRenderAdmin(1, true);
  } else {
    pageRenderAdmin(1, false);
  }
}

function pageRenderAdmin(pageNumberClicked, lastPage) {
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
      renderProductAdmin(tmpProduct[k]);
    }
    item += 
    `
    <div class="card-product-item card-plus-product" onclick="addProduct()">
          <i class="fa-solid fa-plus"></i>
          <span>ADD PRODUCT</span>
      </div>
    `
    item += createPageNumAdmin(tmpProduct); // thêm vào lại 3 cục div pageNumber
    cardProduct.innerHTML = item;
  }
  
  // nếu không thì duyệt đến 8 vị trí cách từ positionLoad 
  else {
    for (let k = positionLoad; k < positionLoad + 8; k++) {
      renderProductAdmin(tmpProduct[k]);
    }
    item += createPageNumAdmin(tmpProduct);
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

function renderProductAdmin(product) {
  if(product == null)
  {
    console.log("why?");
    
  }
  else
  {
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

            <div class="card-product-content-bottom-buying-btn" onclick="stopPropagate(event);editProduct();">
              <i class="fa-solid fa-gear"></i>
              CHỈNH SỬA
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
}