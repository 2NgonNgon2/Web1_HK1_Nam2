const cardProduct = document.querySelector(".card-products-container");
const addProductContainer = document.querySelector(".add-product-container");
const orderContainer = document.querySelector(".order-container");
const accountContainer = document.querySelector(".account-container");
const deleteProductTable = document.querySelector(".delete-product-container");
const deleteItemContainer = document.querySelector(".delete-item-container");
const productsTable = document.getElementById("container-content-products-table");
const contantContainer = document.querySelector(".container-content");

document.querySelector("span.dropdown-select").innerHTML = localStorage.getItem("adminSignedin");

let lastPageIs = 0;     // check xem trang cuối của sản phẩm là trang bao nhiêu
let tmpProduct = [];    // mảng để chứa các sản phẩm sau khi đã lọc
let item = "";          // dùng để chứa các html product-items

isAdmin = true;

/* filterProductAdmin("keyboard");
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
    case "Laptop": {
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
    item += 
    `
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
                <span class="card-product-priceNumber">${formatCurrecy(product.price)}</span> 
                <span class="card-product-priceIcon">₫</span>
              </div>
            </div>
            
          </div>
          </div>
        </div>
      </div>
    `;

}
 */
function addProductToProductArray(event)
{
  event.preventDefault();
  const productType = document.querySelector("#select-type").value;
  const productName = document.querySelector("#productName").value;
  const productDescription = document.querySelector("#productDescription").value;
  const productImage = document.querySelector("#productImage").files[0].name;
  const productPrice = document.querySelector("#productPrice").value;
  const productQuantity = document.querySelector("#productQuantity").value; 
  console.log(productImage);

  let priceFormated = formatCurrecy(productPrice);

  let productAdd = {};
  let length = product.length+1;
  let maxLength = length +  parseInt(productQuantity) ;
  for(let i = length; i < maxLength; i++)
  {
    // thao tác image

    productAdd = {
      id: `${i}`,
      type: productType,
      name: productName,
      description: productDescription,
      img: `/assets/img/${productImage}`,
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

/* THAO TÁC CHỈNH SỬA SẢN PHẨM */

const editProductTable = document.querySelector(".edit-product-container");
const productType = document.querySelector("#select-type-edit");
const productName = document.querySelector("#productNameEdit");
const productDescription = document.querySelector("#productDescriptionEdit");
const productImage = document.querySelector("#productImageEdit");
const productPrice = document.querySelector("#productPriceEdit");
const id = document.querySelector("#productId");

function openEditProductTable(productId)
{
  let productNeedEdit;
  for(let pd of product)
  {
    if(pd.id == productId)
    {
      productNeedEdit = pd;
      break;
    }
  }
  console.log(productNeedEdit);
  productType.value = productNeedEdit.type;
  productName.value = productNeedEdit.name;
  productDescription.value = productNeedEdit.description;
  productPrice.value = productNeedEdit.price;
  id.value = productId;
  editProductTable.style.display = "flex";
}

function editProductToProductArray(event)
{
  event.preventDefault();
  for(let pd of product)
  {
    if(pd.id == id.value)
    {
      pd.type = productType.value ;
      pd.name = productName.value;
      pd.description = productDescription.value ;
      pd.img = `/assets/img/${productImage.files[0].name}`;
      pd.price = formatCurrecy(productPrice.value) ;
      break;
    }
  }
  

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

/* THAO TÁC XÓA SẢN PHẨM */

function deleteProductFromProductArray(event,productId)
{
  event.preventDefault();
  for(let i = 0 ; i < product.length; i++)
  {
    if(product[i].id== productId)
    {
      console.log(product[i]);
      product.splice(i,1);
      break;
    }
  }
  if(confirm("Bạn có chắc muốn xóa sản phẩm này?") == true)
  {
    localStorage.removeItem("product");
    localStorage.setItem("product",JSON.stringify(product));
    alert("Xóa sản phẩm thành công!");
    location.reload();
  }
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

function openOrderManageTable()
{
  contantContainer.innerHTML =
  `
      <div class="title">DANH SÁCH ĐƠN HÀNG</div>

      <form class="date-filter" onsubmit="filterOrder(event)">
        <label for="date" class="date-start">TỪ NGÀY</label>
        <input type="date" class="date-start-input" value="2022-01-01">
        <label for="date" class="date-end">ĐẾN NGÀY</label>
        <input type="date" class="date-end-input" value="2022-12-31">
        <button type="submit" class="filter">LỌC</button>
      </form>

      <div class="order">
      
      </div>
  `
  renderOrder(orderForm);

}

function processOrder(orderId)
{
  
  for(let i = 0; i < orderForm.length; i++)
  {
    
    if(orderForm[i].id == orderId)
    {
      console.log(orderForm[i].id);
      if(orderForm[i].status == true)
      {
        orderForm[i].status = false;
        console.log("chưa xử lý");
      }
      else
      {
        orderForm[i].status = true;
        console.log("đã xử lý");
      }
      // cập nhật lại trạng thái trong mảng đơn hàng
      console.log(orderForm);
      localStorage.removeItem("orderForm");
      localStorage.setItem("orderForm",JSON.stringify(orderForm));
      break;
    }
    
    
  }
}



function filterOrder(event)
{
  event.preventDefault();
  
  const dateStart = document.querySelector(".date-start-input");
  const dateEnd = document.querySelector(".date-end-input");
  
  let start= new Date(dateStart.value);
  let end = new Date(dateEnd.value);
  let dateArray = [];
  for(let order of orderForm)
  {
    let orderDate = new Date(order.dateOrder);
    if((start <= orderDate) && (end >=  orderDate) )
    {
      dateArray.push(order);
    }
  }
  renderOrder(dateArray);
}

function renderOrder(orderArray)
{
  const order = document.querySelector(".order");
  let orderItem = "";
  orderItem = `
              <div class="header">
                  <div class="order-id">ID</div>
                  <div class="order-userid">USER ID</div>
                  <div class="order-product">
                    SẢN PHẨM
                  </div>
                  <div class="order-date">NGÀY</div>
                  <div class="total-price">TỔNG GIÁ</div>
                  <div class="status">TÌNH TRẠNG</div>
                </div>
  `
  
  let productName='';
  let orderProductTmp=[];
  let soluong=0;
  let nameTmp;
  let k=0;
  for(let i = 0; i < orderArray.length; i++)
  {
    productName = " ";
    // copy mảng arrProductId
    console.log(orderArray);
    for(let id of orderArray[i].arrProductId)
    {
      orderProductTmp.push(id);
    }
    for(let j = 0; j < product.length; j++)
    {
      if(orderProductTmp.length == 0) {break;}
      k=0;
      while(k < orderProductTmp.length)
      {
        if(orderProductTmp[k].id == product[j].id)
        {
          soluong ++;
          nameTmp = product[j].name;
          if(soluong < 2)
          {
            //console.log(nameTmp);
            productName += nameTmp;
          }
          /* nameTmp = product[j].id ;
          console.log(nameTmp); */
          orderProductTmp.splice(k,1);
        }
        else
        {
          k++;
        }
      }
      if(soluong != 0)
      {
        productName += (" x" + soluong + "; ");
        soluong = 0;
      }
    }
    // định dạng lại ngày dd/mm/yyyy
    let date = new Date(orderArray[i].dateOrder);
    console.log(date);
    orderItem += `
    <div class="order-item">
        <div class="order-id">${orderArray[i].idOrderForm}</div>
        <div class="order-userid">${orderArray[i].idUser}</div>
        <div class="order-product">
          ${productName}
        </div>
        <div class="order-date">${getDate()}</div>
        <div class="total-price">${orderArray[i].totalPrice}</div>
        
    `

    if(orderArray[i].status == true)
    {
      orderItem += 
      `
      <label for="order-status" class="order-status">
      <input type="checkbox" checked class="status" onclick="processOrder(${orderArray[i].id})"> 
      </label>
      </div>     
      `
    }
    else
    {
      orderItem += 
      `
      <label for="order-status" class="order-status">
      <input type="checkbox" class="status" onclick="processOrder(${orderArray[i].id})"> 
      </label>
      </div>      
      `
    }
  }
  order.innerHTML = orderItem;
}

function closeOrderProductTable()
{
  console.log("đóng bảng danh sách đơn hàng!");
  orderContainer.style.display = "none";
}

/* CÁC HÀM QUẢN LÝ NGƯỜI DÙNG */

function openAccountManageTable()
{
  contantContainer.innerHTML =
  `
      <div class="title">DANH SÁCH TÀI KHOẢN</div>

      <div class="account">
      
      </div>
  `
  renderAccount(account);
}

function filterAccount(event)
{
  event.preventDefault();
  const username = document.querySelector("#user-name").value;
  let accountArrayTmp = [];
  
  for(let acc of account)
  {
    if(acc.username.match(username) != null) 
      accountArrayTmp.push(acc); 
  }
  console.log(accountArrayTmp); 
  renderAccount(accountArrayTmp);
  accountArrayTmp =[];
}

function lockAccount(accountId)
{
  
  for(let i = 0; i < account.length; i++)
  {
    
    if(account[i].id == accountId)
    {
      console.log(account[i].id);
      if(account[i].status == true)
      {
        account[i].status = false;
        console.log("bỏ khóa tài khoản!");
      }
      else
      {
        account[i].status = true;
        console.log("khóa tài khoản!");
      }
      // cập nhật lại trạng thái trong mảng đơn hàng
      console.log(account);
      localStorage.removeItem("account");
      localStorage.setItem("account",JSON.stringify(account));
      break;
    }
    
    
  }
}

function renderAccount(accountArray)
{
  
  const accountDisplay = document.querySelector(".account");
  let accountItem = "";
  accountItem = 
  `
  <div class="header">
    <div class="account-id">ID</div>
    <div class="account-name">TÊN TÀI KHOẢN</div>
    <div class="account-password">MẬT KHẨU</div>
    <div class="account-phone">SĐT</div>
    <div class="account-mail">EMAIL</div>
    <div class="status">TÌNH TRẠNG</div>
  </div>
  `

  for(let i = 0; i < accountArray.length; i++)
  {
    accountItem +=
    `
    <div class="account-item">
      <div class="account-id">${accountArray[i].id}</div>
      <div class="account-name">${accountArray[i].username}</div>
      <div class="account-password">${accountArray[i].password}</div>
      <div class="account-phone">${accountArray[i].phone}</div>
      <div class="account-mail">${accountArray[i].email}</div>
      
    `
    // kiểm tra trạng thái tài khoản
    if(accountArray[i].status == true) // tài khoản bị khóa
    {
      accountItem +=
      `
      <label for="account-status" class="account-status">
        <input type="checkbox" checked class="status" onclick="lockAccount(${accountArray[i].id})"> 
      </label>
      </div>
      `
    }
    else
    {
      accountItem +=
      `
      <label for="account-status" class="account-status" >
        <input type="checkbox" class="status" onclick="lockAccount(${accountArray[i].id})"> 
      </label>
      </div>
      `
    }
    
  }
  
  accountDisplay.innerHTML = accountItem;
}


function closeAccountProductTable()
{
  console.log("đóng bảng danh sách người dùng!");
  accountContainer.style.display = "none";
}


function dangXuatAdmin()
{
  localStorage.setItem("isSignedin","false");
  localStorage.removeItem("adminSignedin");
  window.location.href = "/index.html";
}

// hàm định dạng ngày tháng năm
function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function formatDate(date) {
  return [
    padTo2Digits(date.getHours()),
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join('/');
}


function dangXuatAdmin()
{
  localStorage.setItem("isSignedin","false");
  localStorage.removeItem("adminSignedin");
  window.location.href = "/index.html";
}


function formatCurrecy(currency)
{
  return currency.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

// inner trong admin

let productsManage = document.getElementById("nav-header-left-list-products-management");

function showProductTable() {
  for (let i = 0; i < product.length; i++) {
    productsTable.children[0].innerHTML += `
    <tr class="container-content-products-table-item">
    <td class="container-content-products-table-item-id">${product[i].id}</td>
    <td class="container-content-products-table-item-img">
        <img src="${product[i].img}" alt="">
    </td>
    <td class="container-content-products-table-item-name">${product[i].name}</td>
    <td class="container-content-products-table-item-type">${product[i].type}</td>
    <td class="container-content-products-table-item-price">
      ${formatCurrecy(product[i].price)}
      ₫
    </td>
    <td class="container-content-products-table-item-edit">
      <div class="add-delete-product-button ">
        
          <div class="container-content-products-table-item-edit-icon" onclick="openEditProductTable(${product[i].id})">
            <i class="fa-solid fa-gear"></i>
          </div>

          <div class="container-content-products-table-item-edit-delete" onclick="deleteProductFromProductArray(event,${product[i].id})" >
            <i class="fa-solid fa-trash"></i>
          </div>
      </div>
    </td>
    
  </tr>
    `
  }
}
