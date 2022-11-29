const cardProduct = document.querySelector(".card-products-container");
const addProductContainer = document.querySelector(".add-product-container");
const orderContainer = document.querySelector(".order-container");
const accountContainer = document.querySelector(".account-container");
const deleteProductTable = document.querySelector(".delete-product-container");
const deleteItemContainer = document.querySelector(".delete-item-container");
// const contantContainer = document.querySelector(".container-content");
let containerContentAdmin = document.getElementById("container-content")

document.querySelector("span.dropdown-select").innerHTML = localStorage.getItem("adminSignedin");

let lastPageIs = 0;     // check xem trang cuối của sản phẩm là trang bao nhiêu
let tmpProduct = [];    // mảng để chứa các sản phẩm sau khi đã lọc
let item = "";          // dùng để chứa các html product-items

isAdmin = true;


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
  renderProductManage();
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



function closeDeleteProductTable(event)
{
  console.log("đóng bảng thêm sản phẩm!");
  deleteProductTable.style.display = "none";
}


function openOrderManageTable()
{
  containerContentAdmin.innerHTML =
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
    if(orderForm[i].idOrderForm == orderId)
    {
      orderStatus = document.querySelectorAll(".order-status")
 
      console.log(orderForm[i].idOrderForm);
      if(orderForm[i].status == true)
      {
        orderForm[i].status = false;
        orderStatus[i].style.color = 'red';
        orderStatus[i].innerHTML = `
        Chưa xử lí
        <input type="checkbox" class="status" onclick="processOrder(${orderForm[i].idOrderForm})"> 

        `
        console.log("chưa xử lý");
      }
      else
      {
        orderForm[i].status = true;
        orderStatus[i].style.color = 'green';
        orderStatus[i].innerHTML = `
        Đã xử lí
        <input type="checkbox" checked class="status" disabled onclick="processOrder(${orderForm[i].idOrderForm})"> 
        `
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

function formatPrice(x) {
  return x.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
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
    <div class="total-price">${formatPrice(orderArray[i].totalPrice)} ₫</div>
    
    `
    
    if(orderArray[i].status == true)
    {
      orderItem += 
      `
      <label for="order-status" class="order-status" style="color:green">
      Đã xử lí
      <input type="checkbox" checked disabled class="status" onclick="processOrder(${orderArray[i].idOrderForm})"> 
      </label>
      </div>     
      `
    }
    else
    {
      orderItem += 
      `
      <label for="order-status" class="order-status" style="color:red">
      Chưa xử lí
      <input type="checkbox" class="status" onclick="processOrder(${orderArray[i].idOrderForm})"> 
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
  containerContentAdmin.innerHTML =
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
      accountStatus = document.querySelectorAll(".account-status");
      console.log(account[i].id);
      if(account[i].status == true)
      {
        
        account[i].status = false;
        console.log("bỏ khóa tài khoản!");
        accountStatus[i].style.color = "green";
        accountStatus[i].innerHTML = `
        Chưa khóa
        <input type="checkbox" class="status" onclick="lockAccount(${account[i].id})"> 
       `
      }
      else
      {
        account[i].status = true;
        console.log("khóa tài khoản!");
        accountStatus[i].style.color = "red";
        accountStatus[i].innerHTML = `
         Đã khóa
        <input type="checkbox" checked class="status" onclick="lockAccount(${account[i].id})"> 
       
        `

      }
      // cập nhật lại trạng thái trong mảng đơn hàng
      console.log(account);
      localStorage.removeItem("arr-account");
      localStorage.setItem("arr-account",JSON.stringify(account));
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
  <div class="account-edit">Chỉnh sửa</div>
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
      <label for="account-status" class="account-status" style="color:red;">
        Đã khóa
        <input type="checkbox" checked class="status" onclick="lockAccount(${accountArray[i].id})"> 
        </label>
        <div class="account-edit">
        <div class="add-delete-product-button">
            <div class="container-content-products-table-item-edit-icon" onclick="openEditProductTable(${product[i].id})">
              <i class="fa-solid fa-gear"></i>
            </div>
            <div class="container-content-products-table-item-edit-delete"  onclick="deleteProductFromProductArray(event,${product[i].id})">
              <i class="fa-solid fa-trash"></i>
            </div>
        </div>
        </div> 
        </div>
        `
      }
      else
      {
        accountItem +=
        `
        <label for="account-status" class="account-status" style="color:green;" >
        Chưa khóa
        <input type="checkbox" class="status" onclick="lockAccount(${accountArray[i].id})"> 
        </label>
        <div class="account-edit">
        <div class="add-delete-product-button">
            <div class="container-content-products-table-item-edit-icon" onclick="">
              <i class="fa-solid fa-gear"></i>
            </div>
            <div class="container-content-products-table-item-edit-delete"  onclick="">
              <i class="fa-solid fa-trash"></i>
            </div>
        </div>
        </div> 
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

function preventKeyPressNotNumber(e) {
  // kiểm tra xem charCode mà thỏa đk thì chặn keypress đó
  if(e.charCode < 48 || e.charCode > 57) {
    e.preventDefault();
    if( e.charCode < 96 || e.charCode > 105)
        e.preventDefault();
  }
}

// inner trong admin

let productsManage = document.getElementById("nav-header-left-list-products-management");
let productsTable;
renderProductManage();
function renderProductManage() {
  containerContentAdmin.innerHTML = `
      <div class="container-nav-header-right">
        <div>
          <div class="container-nav-header-right-filter-type">
            <label for="typeProducts">Chọn loại:</label>
            <select name="typeProducts" id="typeProducts">
              <option value="all">Tất cả</option>
              <option value="keyboard">Bàn phím</option>
              <option value="mouse">Chuột</option>
              <option value="headphone">Tai nghe</option>
              <option value="speaker">Loa</option>
              <option value="Laptop">Laptop</option>
            </select>
          </div>
          <div class="container-nav-header-right-filter-price">
            <span>Giá : </span>
            <span>Từ</span>
            <input type="number" value="0" placeholder="000.000" id="container-nav-header-right-filter-price-start" onkeypress="preventKeyPressNotNumber(event)">
            <span> ₫   đến  </span>
            <input type="number" value="99999999" placeholder="999.999" id="container-nav-header-right-filter-price-end" onkeypress="preventKeyPressNotNumber(event)">
            <span> ₫ </span>
          </div>
          <button class="btnFilterProduct" onclick="filterProductsInAdmin()">Lọc</button>
        </div>
      </div>
      <div class="container-content-header">
        DANH SÁCH CÁC SẢN PHẨM
        <button class="container-content-header-btn" onclick="openAddProductTable()">
          <i class="fa-regular fa-square-plus"></i>
          Thêm sản phẩm
        </button>
      </div>
      <div class="container-content-products" >
        <table class="container-content-products-table" id="container-content-products-table"  style="width: 100%; z-index: 1;" >
          <tr >
            <th class="container-content-products-table-item-id">ID</th>
            <th class="container-content-products-table-item-img">Ảnh</th>
            <th class="container-content-products-table-item-name">Tên</th>
            <th class="container-content-products-table-item-type">Loại</th>
            <th class="container-content-products-table-item-price">Giá</th>
            <th class="container-content-products-table-item-edit">Chỉnh sửa</th>
          </tr>
        </table>
      </div>
  ` 
  productsTable = document.getElementById("container-content-products-table");
  for (let i = 0; i < product.length; i++) {
    productsTable.innerHTML += `
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
        <div class="add-delete-product-button">
            <div class="container-content-products-table-item-edit-icon" onclick="openEditProductTable(${product[i].id})">
              <i class="fa-solid fa-gear"></i>
            </div>
            <div class="container-content-products-table-item-edit-delete"  onclick="deleteProductFromProductArray(event,${product[i].id})">
              <i class="fa-solid fa-trash"></i>
            </div>
        </div>
      </td>
    </tr>
    `
  }
}


function showProductTable(arrTmpProducts) {
  productsTable.innerHTML = `
  <tr >
  <th class="container-content-products-table-item-id">ID</th>
  <th class="container-content-products-table-item-img">Ảnh</th>
  <th class="container-content-products-table-item-name">Tên</th>
  <th class="container-content-products-table-item-type">Loại</th>
  <th class="container-content-products-table-item-price">Giá</th>
  <th class="container-content-products-table-item-edit">Chỉnh sửa</th>
  </tr>`;
  for (let i = 0; i < arrTmpProducts.length; i++) {
    productsTable.innerHTML += `
    <tr class="container-content-products-table-item">
    <td class="container-content-products-table-item-id">${arrTmpProducts[i].id}</td>
    <td class="container-content-products-table-item-img">
        <img src="${arrTmpProducts[i].img}" alt="">
    </td>
    <td class="container-content-products-table-item-name">${arrTmpProducts[i].name}</td>
    <td class="container-content-products-table-item-type">${arrTmpProducts[i].type}</td>
    <td class="container-content-products-table-item-price">
      ${formatCurrecy(arrTmpProducts[i].price)}
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

// hold color nav header left
function holdColorMenuInAdmin(e){
  document
    .querySelector(".nav-header-left-list-item.active-nav-header-left-list-item")
    .classList.remove("active-nav-header-left-list-item");
    
    let element = e.target.closest(".nav-header-left-list-item");
  element.classList.add("active-nav-header-left-list-item");
};

let search_inp = document.querySelector("#search_text");
let search_btn = document.querySelector("#search_button");

function searchEngineAdmin(event)
{
  tmpProduct = [];

  for(let i=0; i<product.length; i++)
  {
    if(product[i].name.toLowerCase().match(search_inp.value.toLowerCase()) != null)
    {
      tmpProduct.push(product[i]);
    }
  }
  showProductTable(tmpProduct);
  event.preventDefault();
}

function getEnterKey(event) {
  if(event.keyCode == 13)
  searchEngineAdmin(event);
}
search_inp.addEventListener('keypress',getEnterKey)


function filterProductsInAdmin() {
  let typeProducts = document.querySelector("#typeProducts");
  let priceStart = document.querySelector("#container-nav-header-right-filter-price-start");
  let priceEnd = document.querySelector("#container-nav-header-right-filter-price-end");
  let arrTmp1 = [];
  let arrTmp2 = [];
  // show ra sản phẩm với loại là tất cả
  if(typeProducts.value == 'all') {
    // kiểm tra xem có điều kiểu theo giá hay không
    if(priceStart.value == '' || priceEnd.value == '') {
      showProductTable(product);
      return;

    } else {
      
      for (let i = 0; i < product.length; i++) {
        if(parseInt(priceStart.value) <= parseInt(product[i].price) && parseInt(priceEnd.value) >= parseInt(product[i].price)) {
          arrTmp1.push(product[i]);
        }
      }
    }
    showProductTable(arrTmp1);
    return;
  }

  for (let i = 0; i < product.length; i++) {
    if (product[i].type == typeProducts.value) {
      arrTmp1.push(product[i]);
    } 
  }
  if(priceStart.value == '' || priceEnd.value == '') {
    showProductTable(arrTmp1);
    return;
  }

  for (let i = 0; i < arrTmp1.length; i++) {
    if(parseInt(priceStart.value) <= parseInt(arrTmp1[i].price) && parseInt(priceEnd.value) >= parseInt(arrTmp1[i].price)) {
      arrTmp2.push(arrTmp1[i]);
    }
  }
  showProductTable(arrTmp2);
  

}
let headerNavigationIconMenu = document.querySelector(".container-header-navigation-icon-menu");
let container = document.querySelector(".container");
let containerHeader = document.querySelector(".container-header");
let navHeaderLeft = document.querySelector(".nav-header-left");
let navHeaderLeftLogo = document.querySelector(".nav-header-left-logo");
let navHeaderLeftListItems = document.querySelectorAll(".nav-header-left-list-item");
let navHeaderLeftListItemSpans = document.querySelectorAll(".nav-header-left-list span");
let navHeaderLeftListItemIcons = document.querySelectorAll(".nav-header-left-list-item > i");
let headerNavigationIconMenuShrink = document.querySelector(".container-header-navigation-icon-menu-shrink");
let headerNavigationIconMenuZoomIn = document.querySelector(".container-header-navigation-icon-menu-zoomIn");




function shrinkMenuInAdmin() {
  container.classList.add("zoomInContainer");
  containerHeader.classList.add("zoomInContainerHeader");
  navHeaderLeft.classList.add("shrinkNavHeaderLeft");
  navHeaderLeftLogo.classList.add("hideNavHeaderLeftLogo");
  navHeaderLeftListItemSpans.forEach(navHeaderLeftListItemSpan => {
    navHeaderLeftListItemSpan.classList.add("hide");
  });
  navHeaderLeftListItemIcons.forEach(navHeaderLeftListItemIcon => {
    navHeaderLeftListItemIcon.classList.add("hide");
  });
  navHeaderLeftListItems.forEach(navHeaderLeftListItem => {
    navHeaderLeftListItem.classList.add("center");
  });
  headerNavigationIconMenuShrink.classList.add("hide");
  headerNavigationIconMenuZoomIn.classList.add("show");
}

function zoomInMenuInAdmin() {
  container.classList.remove("zoomInContainer");
  containerHeader.classList.remove("zoomInContainerHeader");
  navHeaderLeft.classList.remove("shrinkNavHeaderLeft");
  navHeaderLeftLogo.classList.remove("hideNavHeaderLeftLogo");
  navHeaderLeftListItemSpans.forEach(navHeaderLeftListItemSpan => {
    navHeaderLeftListItemSpan.classList.remove("hide");
  });
  navHeaderLeftListItemIcons.forEach(navHeaderLeftListItemIcon => {
    navHeaderLeftListItemIcon.classList.remove("hide");
  });
  navHeaderLeftListItems.forEach(navHeaderLeftListItem => {
    navHeaderLeftListItem.classList.remove("center");
  });
  headerNavigationIconMenuShrink.classList.remove("hide");
  headerNavigationIconMenuZoomIn.classList.remove("show");
}