let viewOrder = document.getElementById('view-order');
let viewOrderContainerBottom = document.querySelector('.view-order-container-bottom');


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
  let div = document.createElement('div');
  div.classList.add('view-order-container-bottom-product');
  div.innerHTML = `
    <div class="view-order-container-bottom-product-title">
      Đang chờ xử lí
      <div class="view-order-container-bottom-product-title-date">Ngày đặt hàng: ${day}</div>
    </div>
  `;

  for (let i = 0; i < arrCart.length; i++) {
    
    div.innerHTML += `
    <div class="view-order-container-bottom-product-item">
      <div class="view-order-container-bottom-product-img">
        <img src="${arrCart[i].img}" alt="">
      </div>
      <div class="view-order-container-bottom-product-name">
        <div class="view-order-container-bottom-product-name-title">
          ${arrCart[i].name}
        </div>
        <div class="view-order-container-bottom-product-name-label">
          Keyboard for gamer
        </div>
      </div>
      <div class="view-order-container-bottom-product-quantity">
      x<input type="number" value="${arrCart[i].quantity}" class="view-order-container-bottom-product-quantity-adjust" disabled>
      </div>
      <div class="view-order-container-bottom-product-price">
        <span class="view-order-container-bottom-product-priceNumber">${arrCart[i].price}</span> 
        <span class="view-order-container-bottom-product-priceIcon">₫</span>
      </div>
    </div>
    `;
  }

  div.innerHTML += `
  <div class="view-order-container-bottom-product-detail">
    <div class="view-order-container-bottom-product-detail-total">
      <div class="view-order-container-bottom-product-detail-total-title">Tổng tiền :</div>
      <div class="view-order-container-bottom-product-detail-total-money">${formatPrice(total)}</div>
      <div class="view-order-container-bottom-product-detail-total-priceIcon">₫</div>
    </div>
  </div>
  `;

  viewOrderContainerBottom.insertBefore(div, viewOrderContainerBottom.firstChild);
}
