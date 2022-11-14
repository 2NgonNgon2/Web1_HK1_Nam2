const cardProduct = document.querySelector(".card-products-container");
const addProductContainer = document.querySelector(".add-product-container");



let lastPageIs = 0;     // check xem trang cuối của sản phẩm là trang bao nhiêu
let tmpProduct = [];    // mảng để chứa các sản phẩm sau khi đã lọc
let item = "";          // dùng để chứa các html product-items

isAdmin = true;

filterProductAdmin("keyboard");
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
    case "laptop": {
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
  let quantity = tmpProduct.length / 8;

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
        <div class="card-product-item" id="${product.id}" >
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

            <div class="card-product-content-bottom-buying-btn" onclick="stopPropagate(event);openEditProductTable(${product.id});">
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

async function addProductToProductArray(event)
{
  event.preventDefault();
  const productType = document.querySelector("#select-type").value;
  const productName = document.querySelector("#productName").value;
  const productDescription = document.querySelector("#productDescription").value;
  //const productImage = document.querySelector("#productImage").files[0].name  ;
  const productPrice = document.querySelector("#productPrice").value;
  const productQuantity = document.querySelector("#productQuantity").value; 
  console.log(productImage);

  let priceFormated = format1(productPrice);

  let productAdd = {};
  let length = product.length+1;
  let maxLength = length +  parseInt(productQuantity) ;
  for(let i = length; i < maxLength; i++)
  {
    // thao tác image
    /* let cmd = "copy "+ productImage+" "+ "../assets/img"
    console.log(cmd); */
    /* var a = document.createElement('img');
    img.href = productImage;
    img.download = "../img/";
    document.body.appendChild(img);
    img.click();
    document.body.removeChild(img); */

    console.log("add product");
    productAdd = {
      id: `${i}`,
      type: productType,
      name: productName,
      description: productDescription,
      //img: productImage,
      price: priceFormated,
    };

    product.push(productAdd);
    }
  
  localStorage.setItem("product",JSON.stringify(product));
  alert("Thêm sản phẩm thành công!");
  location.reload();
}

function openAddProductTable()
{
  console.log("mở bảng thêm sản phẩm!");
  addProductContainer.style.display = "flex";
}

function closeAddProductTable(event)
{
  console.log("đóng bảng thêm sản phẩm!");
  addProductContainer.style.display = "none";
}

function stopPropagate(e) {
  console.log("stopPropagate");
  e.stopPropagation();
}

const editProductTable = document.querySelector(".edit-product-container");
const productType = document.querySelector("#select-type-edit");
const productName = document.querySelector("#productNameEdit");
const productDescription = document.querySelector("#productDescriptionEdit");
const productImage = document.querySelector("#productImageEdit");
const productPrice = document.querySelector("#productPriceEdit");
const id = document.querySelector("#productId");

function openEditProductTable(productId)
{

  console.log(product[productId-1]);
  productType.value = product[productId-1].type
  productName.value = product[productId-1].name
  productDescription.value = product[productId-1].description
  productImage.value = product[productId-1].img;
  productPrice.value = product[productId-1].price;
  id.value = productId;
  editProductTable.style.display = "flex";
}

function editProductToProductArray(event)
{
  event.preventDefault();
  console.log(product[id.value - 1]);
  product[id.value - 1].type = productType.value ;
  product[id.value - 1].name = productName.value;
  product[id.value - 1].description = productDescription.value ;
  product[id.value - 1].img = format1(productImage.value)  ;
  product[id.value - 1].price =productPrice.value  ;

  localStorage.removeItem("product");
  localStorage.setItem("product",JSON.stringify(product));
  alert("Cập nhật sản phẩm thành công!");
  window.location.reload();
}

function closeEditProductTable(event)
{
  console.log("đóng bảng thêm sản phẩm!");
  editProductTable.style.display = "none";
}


const deleteProductTable = document.querySelector(".delete-product-container");
const deleteItemContainer = document.querySelector(".delete-item-container");

function deleteProductFromProductArray(event)
{
  event.preventDefault();
  const deleteItem = document.querySelectorAll(".deleteItem");
  let itemNeedToRemove = [];
  deleteItem.forEach((element,index) => {
    if(element.checked == true)
    {
      itemNeedToRemove.push(element.value);
    }
  });
  console.log(itemNeedToRemove);

  let k=0;
  let i=0;
  while(i < product.length && k < itemNeedToRemove.length)
  {
    if(product[i].id == itemNeedToRemove[k])
    {
      console.log("xoa: "+product[i].id+" i: "+i);
      product.splice(i,1);
      k++;
    }
    else
    {
      console.log("pass: "+product[i].id + "i: "+i);
      i++;
    }
    
    
  }

  /* for(let i=0; i<product.length;i++)
  {
    
    if((product[i].id == itemNeedToRemove[k]))
    {
      console.log("remove id: " + product[i].id);
      console.log("here go k: "+ k);
      product.splice(i,1);
      k+=1;
    }
    else
    {
      console.log("pass: "+product[i].id);
    }
  } */

  if(confirm("Bạn có chắc muốn xóa những sản phẩm này?") == true)
  {
    localStorage.removeItem("product");
    localStorage.setItem("product",JSON.stringify(product));
    alert("Xóa sản phẩm thành công!");
    location.reload();
  }
  
}

function openDeleteProductTable()
{
  console.log("mở bảng thêm sản phẩm!");
  deleteProductTable.style.display = "flex";
  let deleteItem="";

  for(let i = 0; i < tmpProduct.length; i++)
  {
    deleteItem += 
    `
    <div class="input-label">
            <input type="checkbox" name="deleteItem" class="deleteItem" value="${tmpProduct[i].id}">
            <label for="deleteItem" class="delete-item">
              <img class="delete-item-img" src="${tmpProduct[i].img}">
              <div class="delete-item-name">${tmpProduct[i].name}</div>  
              <div class="delete-item-price">${tmpProduct[i].price}</div>
            </label>
    </div>
    `
  }
  deleteItemContainer.innerHTML = deleteItem;
}

function closeDeleteProductTable(event)
{
  console.log("đóng bảng thêm sản phẩm!");
  deleteProductTable.style.display = "none";
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



function format1(currency)
{
  return currency.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
