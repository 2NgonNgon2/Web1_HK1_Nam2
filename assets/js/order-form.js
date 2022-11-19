let viewOrder = document.getElementById('view-order');
let viewOrderContainerBottom = document.getElementById('view-order-container-bottom');
let div ;
let tmpArrProductId;
let orderFormItem;
function showViewOrder() {
  viewOrder.classList.add("open");
  hideCart();
  hideInfoProduct();
}

function hideViewOrder() {
  viewOrder.classList.remove("open");
}
viewOrder.addEventListener("click", hideViewOrder);

function pushProductToOrderForm(day,total) {
  let arrCart = JSON.parse(localStorage.getItem('cart'));
  orderFormItem = {};
  tmpArrProductId = [];
  // let div = document.createElement('div');
  // div.classList.add('view-order-container-bottom-product');
  // div.innerHTML = `
  //   <div class="view-order-container-bottom-product-title">
  //     Đang chờ xử lí
  //     <div class="view-order-container-bottom-product-title-date">Ngày đặt hàng: ${day}</div>
  //   </div>
  // `;

  for (let i = 0; i < arrCart.length; i++) {
    
    // div.innerHTML += `
    // <div class="view-order-container-bottom-product-item">
    //   <div class="view-order-container-bottom-product-img">
    //     <img src="${arrCart[i].img}" alt="">
    //   </div>
    //   <div class="view-order-container-bottom-product-name">
    //     <div class="view-order-container-bottom-product-name-title">
    //       ${arrCart[i].name}
    //     </div>
    //     <div class="view-order-container-bottom-product-name-label">
    //       Keyboard for gamer
    //     </div>
    //   </div>
    //   <div class="view-order-container-bottom-product-quantity">
    //   x<input type="number" value="${arrCart[i].quantity}" class="view-order-container-bottom-product-quantity-adjust" disabled>
    //   </div>
    //   <div class="view-order-container-bottom-product-price">
    //     <span class="view-order-container-bottom-product-priceNumber">${formatPrice(arrCart[i].price)}</span> 
    //     <span class="view-order-container-bottom-product-priceIcon">₫</span>
    //   </div>
    // </div>
    // `;
    tmpArrProductId.push(arrCart[i]);

  }

  // div.innerHTML += `
  // <div class="view-order-container-bottom-product-detail">
  //   <div class="view-order-container-bottom-product-detail-total">
  //     <div class="view-order-container-bottom-product-detail-total-title">Tổng tiền :</div>
  //     <div class="view-order-container-bottom-product-detail-total-money">${formatPrice(total)}</div>
  //     <div class="view-order-container-bottom-product-detail-total-priceIcon">₫</div>
  //   </div>
  // </div>
  // `;
  
  
  orderForm = JSON.parse(localStorage.getItem('orderForm'));
  
  orderFormItem = {
    idOrderForm: orderForm.length + 1,
    idUser: JSON.parse(localStorage.getItem('idCurrentUser')),
    dateOrder: day,
    status: false,
    arrProductId: tmpArrProductId,
    totalPrice: parseInt(total)
  };

  orderForm.push(orderFormItem);
  localStorage.setItem('orderForm',JSON.stringify(orderForm));
  showViewOrderFormWithIdUser();
  
}
showViewOrderFormWithIdUser();

function showViewOrderFormWithIdUser() {
  viewOrderContainerBottom.innerHTML = '';
  orderForm = JSON.parse(localStorage.getItem('orderForm'));
  for (let i = 0; i < orderForm.length; i++) {
    if(orderForm[i].idUser == JSON.parse(localStorage.getItem('idCurrentUser'))) {
      div = document.createElement('div'); 
      div.classList.add('view-order-container-bottom-product');
      div.innerHTML = `
        <div class="view-order-container-bottom-product-title">
          Đang chờ xử lí
          <div class="view-order-container-bottom-product-title-date">Ngày đặt hàng: ${orderForm[i].dateOrder}</div>
        </div>
      `;

      for (let j = 0; j < orderForm[i].arrProductId.length; j++) {
        
        
        div.innerHTML += `
        <div class="view-order-container-bottom-product-item">
          <div class="view-order-container-bottom-product-img">
            <img src="${orderForm[i].arrProductId[j].img}" alt="">
          </div>
          <div class="view-order-container-bottom-product-name">
            <div class="view-order-container-bottom-product-name-title">
              ${orderForm[i].arrProductId[j].name}
            </div>
            <div class="view-order-container-bottom-product-name-label">
              Keyboard for gamer
            </div>
          </div>
          <div class="view-order-container-bottom-product-quantity">
          x<input type="number" value="${orderForm[i].arrProductId[j].quantity}" class="view-order-container-bottom-product-quantity-adjust" disabled>
          </div>
          <div class="view-order-container-bottom-product-price">
            <span class="view-order-container-bottom-product-priceNumber">${formatPrice(orderForm[i].arrProductId[j].price)}</span> 
            <span class="view-order-container-bottom-product-priceIcon">₫</span>
          </div>
        </div>
        `;
      }

          div.innerHTML += `
      <div class="view-order-container-bottom-product-detail">
        <div class="view-order-container-bottom-product-detail-total">
          <div class="view-order-container-bottom-product-detail-total-title">Tổng tiền :</div>
          <div class="view-order-container-bottom-product-detail-total-money">${formatPrice((orderForm[i].totalPrice))}</div>
          <div class="view-order-container-bottom-product-detail-total-priceIcon">₫</div>
        </div>
      </div>
      `;
      viewOrderContainerBottom.insertBefore(div, viewOrderContainerBottom.firstChild);
   
    }
  }
}