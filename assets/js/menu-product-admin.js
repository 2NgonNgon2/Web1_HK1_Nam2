const cardProduct = document.querySelector(".card-products-container");
const addProductContainer = document.querySelector(".add-product-container");
const orderContainer = document.querySelector(".order-container");
const accountContainer = document.querySelector(".account-container");
const deleteProductTable = document.querySelector(".delete-product-container");
const deleteItemContainer = document.querySelector(".delete-item-container");

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
  //const productImage = document.querySelector("#productImage").files[0].name  ;
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
  product[id.value - 1].img = formatCurrecy(productImage.value)  ;
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

/* THAO TÁC XÓA SẢN PHẨM */

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



function closeDeleteProductTable(event)
{
  console.log("đóng bảng thêm sản phẩm!");
  deleteProductTable.style.display = "none";
}


function openOrderManageTable()
{
  orderContainer.style.display = "flex";
  console.log(orderForm);
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
        if(orderProductTmp[k] == product[j].id)
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

    orderItem += `
    <div class="order-item">
        <div class="order-id">${orderArray[i].id}</div>
        <div class="order-userid">${orderArray[i].idUser}</div>
        <div class="order-product">
          ${productName}
        </div>
        <div class="order-date">${formatDate(date)}</div>
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
  accountContainer.style.display = "flex";
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
    {
      accountArrayTmp.push(acc); 
    }
    
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



// hàm định dạng ngày tháng năm
function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function formatDate(date) {
  return [
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
let containerContentAdmin = document.getElementById("container-content")
containerContentAdmin.innerHTML = `
  <div class="container-content-header">
  DANH SÁCH CÁC SẢN PHẨM
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

let productsTable = document.getElementById("container-content-products-table");
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
      
        <div class="container-content-products-table-item-edit-icon" >
          <i class="fa-solid fa-gear"></i>
        </div>

        <div class="container-content-products-table-item-edit-delete"  >
          <i class="fa-solid fa-trash"></i>
        </div>
    </div>
  </td>
  
</tr>
  `
}

function showProductTable(arrTmpProducts) {
  productsTable.children[0].innerHTML = `
  <tr >
  <th class="container-content-products-table-item-id">ID</th>
  <th class="container-content-products-table-item-img">Ảnh</th>
  <th class="container-content-products-table-item-name">Tên</th>
  <th class="container-content-products-table-item-type">Loại</th>
  <th class="container-content-products-table-item-price">Giá</th>
  <th class="container-content-products-table-item-edit">Chỉnh sửa</th>
  </tr>`;
  for (let i = 0; i < arrTmpProducts.length; i++) {
    productsTable.children[0].innerHTML += `
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
        
          <div class="container-content-products-table-item-edit-icon" >
            <i class="fa-solid fa-gear"></i>
          </div>

          <div class="container-content-products-table-item-edit-delete"  >
            <i class="fa-solid fa-trash"></i>
          </div>
      </div>
    </td>
    
  </tr>
    `
  }
}
// hold color nav header left
let navHeaderListItems = document.querySelectorAll(".nav-header-left-list-item");

navHeaderListItems.forEach((navHeaderListItem, i) => {
  navHeaderListItem.onclick = function() {
    document
      .querySelector(".nav-header-left-list-item.active-nav-header-left-list-item")
      .classList.remove("active-nav-header-left-list-item");
  
    this.classList.add("active-nav-header-left-list-item");
  };
}); 

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
  searchEngine(event);
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
  console.log(arrTmp1);
  if(priceStart.value == '' || priceEnd.value == '') {
    showProductTable(arrTmp1);
    return;
  }

  console.log(parseInt(priceStart.value));
  console.log(parseInt(priceEnd.value));
  for (let i = 0; i < arrTmp1.length; i++) {
    if(parseInt(priceStart.value) <= parseInt(arrTmp1[i].price) && parseInt(priceEnd.value) >= parseInt(arrTmp1[i].price)) {
      arrTmp2.push(arrTmp1[i]);
    }
  }
  showProductTable(arrTmp2);
  

}