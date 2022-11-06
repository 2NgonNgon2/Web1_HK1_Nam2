// cart
let cart = document.getElementById("cart");
let shoppingIcon = document.querySelector(".shopping-icon");
let cartContainerMiddle = document.querySelector(".cart-container-middle");
let cartTotalAmountNumber = document.getElementById(
  "cart-container-bottom-total-amount-number"
);
let numberTmp = 0;
let cartContainItem = "";
let btnRemoveProductInCarts;
let temp = []; // mảng đánh dấu sản phẩm đã có trong
let k = 0;

// show cart
function showCart() {
  cart.classList.add("open");
}
// hide cart
function hideCart() {
  cart.classList.remove("open");
}
cart.addEventListener("click", hideCart);

function stopPropagate(e) {
  e.stopPropagation();
}
// tính tổng tiền khi thêm và xóa sản phẩm
function updateAddTotal(quantity, price) {
  numberTmp += quantity * price * 1000;
}

function updateSubtractTotal(quantity, price) {
  numberTmp -= quantity * price * 1000;
}

function updateTotal() {
  cartTotalAmountNumber.value = numberTmp
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}

// nút thêm sản phẩm vào giỏ hàng
function addProductToCartByInforProduct(id) {
  if (!checkSignin()) return;
  x = parseInt(quantityProduct.value);
  // kiểm tra quantity khi nhấn nút thêm sản phẩm trong product info
  if (isNaN(x)) {
    alert("Số lượng sản phẩm phải là số!");
    return; // thoát khỏi sự kiện click
  }
  if (x < 0) {
    alert("Số lượng sản phẩm không nhỏ hơn 1!");
    return; // thoát khỏi sự kiện click
  }
  var savePrice;
  // chạy for để thêm đúng sản phẩm vào giỏ hàng
  for (let i = 0; i < product.length; i++) {
    if (product[i].id == id) {
      for (let i = temp.length - 1; i >= 0; i--) {
        if (temp[i] == id) {
          temp.reverse();
          for (let i = temp.length - 1; i >= 0; i--) {
            if (temp[i] == id) {
              let tmpSaveValue =
                parseInt(
                  cartContainerMiddle.children[i].children[2].children[0].value
                ) + x;
              updateAddTotal(
                x,
                parseInt(
                  cartContainerMiddle.children[i].children[3].children[0]
                    .innerText
                )
              );
              cartContainerMiddle.children[i].children[2].innerHTML = "";
              cartContainerMiddle.children[i].children[2].innerHTML = `
                  <input type="number" value="${tmpSaveValue}" class="cart-container-middle-product-quantity-adjust" min="1">
                `;
              updateTotal();
            }
          }
          temp.reverse();
          return;
        }
      }

      cartContainItem = `
    <div class="cart-container-middle-product">
      <div class="cart-container-middle-product-img">
       <img src="${product[i].img}" alt="">
      </div>
      <div class="cart-container-middle-product-name">
        <div class="cart-container-middle-product-name-title">
          ${product[i].name}
        </div>
        <div class="cart-container-middle-product-name-label">
          ${product[i].description}
        </div>
      </div>
      <div class="cart-container-middle-product-quantity">
        <input type="number" value="${x}" class="cart-container-middle-product-quantity-adjust" min="1">
      </div>
      <div class="cart-container-middle-product-price">
        <span class="cart-container-middle-product-priceNumber">${product[i].price}</span> 
        <span class="cart-container-middle-product-priceIcon">₫</span>
      </div>
      <div class="cart-container-middle-product-remove">
        <i class="fa-solid fa-xmark cart-remove-icon"></i>
      </div>
    </div>
    `;
      savePrice = parseFloat(product[i].price);
      temp[k] = id;
      k++;
    }
  }
  updateAddTotal(x, savePrice);
  updateTotal();
  // đưa sản phẩm mới thêm lên đầu trong giỏ hàng
  cartContainerMiddle.innerHTML =
    cartContainItem + cartContainerMiddle.innerHTML;
  // chạy for để tìm nút xóa sản phẩm
  btnRemoveProductInCarts = document.getElementsByClassName(
    "cart-container-middle-product-remove"
  );
  for (let index = 0; index < btnRemoveProductInCarts.length; index++) {
    var btnRemoveProductInCart = btnRemoveProductInCarts[index];
    btnRemoveProductInCart.addEventListener("click", function (e) {
      // parent : thẻ cha của  btnRemoveProductInCarts
      var parent = this.parentElement;
      // sau đó từ parent suy ngược vào các thẻ con (children) để lấy giá trị
      // parseInt thứ 1 trỏ tới  input value số lượng của product
      // parseInt thứ 2 trỏ tới price của product
      updateSubtractTotal(
        parseInt(parent.children[2].children[0].value),
        parseInt(parent.children[3].children[0].innerText)
      );
      // thay đổi tổng số tiền
      updateTotal();
      temp.splice(index, 1);

      k--;
      parent.remove();
    });
  }
  x = 1; //sau khi xong thì trả x về trạng thái ban đầu(x là input value trong cart)
}

function addProductToCartByCardProduct(id) {
  if (!checkSignin()) return;

  var savePrice;
  // chạy for để thêm đúng sản phẩm vào giỏ hàng
  for (let i = 0; i < product.length; i++) {
    if (product[i].id == id) {
      for (let i = temp.length - 1; i >= 0; i--) {
        if (temp[i] == id) {
          temp.reverse();
          for (let i = temp.length - 1; i >= 0; i--) {
            if (temp[i] == id) {
              let tmpSaveValue =
                parseInt(
                  cartContainerMiddle.children[i].children[2].children[0].value
                ) + 1;
              updateAddTotal(
                1,
                parseInt(
                  cartContainerMiddle.children[i].children[3].children[0]
                    .innerText
                )
              );
              cartContainerMiddle.children[i].children[2].innerHTML = "";
              cartContainerMiddle.children[i].children[2].innerHTML = `
                  <input type="number" value="${tmpSaveValue}" class="cart-container-middle-product-quantity-adjust" min="1">
                `;
              updateTotal();
            }
          }
          temp.reverse();
          return;
        }
      }
      cartContainItem = `
    <div class="cart-container-middle-product">
      <div class="cart-container-middle-product-img">
       <img src="${product[i].img}" alt="">
      </div>
      <div class="cart-container-middle-product-name">
        <div class="cart-container-middle-product-name-title">
          ${product[i].name}
        </div>
        <div class="cart-container-middle-product-name-label">
          ${product[i].description}
        </div>
      </div>
      <div class="cart-container-middle-product-quantity">
        <input type="number" value="1" class="cart-container-middle-product-quantity-adjust" min="1">
      </div>
      <div class="cart-container-middle-product-price">
        <span class="cart-container-middle-product-priceNumber">${product[i].price}</span> 
        <span class="cart-container-middle-product-priceIcon">₫</span>
      </div>
      <div class="cart-container-middle-product-remove">
        <i class="fa-solid fa-xmark cart-remove-icon"></i>
      </div>
    </div>
    `;
      savePrice = parseFloat(product[i].price);
      temp[k] = id;
      k++;
    }
  }
  updateAddTotal(1, savePrice);
  updateTotal();
  // đưa sản phẩm mới thêm lên đầu trong giỏ hàng
  cartContainerMiddle.innerHTML =
    cartContainItem + cartContainerMiddle.innerHTML;
  // chạy for để tìm nút xóa sản phẩm
  btnRemoveProductInCarts = document.getElementsByClassName(
    "cart-container-middle-product-remove"
  );
  for (let index = 0; index < btnRemoveProductInCarts.length; index++) {
    var btnRemoveProductInCart = btnRemoveProductInCarts[index];
    btnRemoveProductInCart.addEventListener("click", function (e) {
      // parent : thẻ cha của  btnRemoveProductInCarts
      var parent = this.parentElement;
      // sau đó từ parent suy ngược vào các thẻ con (children) để lấy giá trị
      // parseInt thứ 1 trỏ tới  input value số lượng của product
      // parseInt thứ 2 trỏ tới price của product
      updateSubtractTotal(
        parseInt(parent.children[2].children[0].value),
        parseInt(parent.children[3].children[0].innerText)
      );
      // thay đổi tổng số tiền
      updateTotal();
      temp.splice(index, 1);

      k--;
      parent.remove();
    });
  }
}

function checkEventInputValueCart() {
  for (let index = 0; index < cartContainerMiddle.children.length; index++) {
    var inputValueQuantityCart =
      cartContainerMiddle.children[index].children[2].children[0];
    var tmpInputValue = inputValueQuantityCart.value;
    inputValueQuantityCart.addEventListener("change", function () {
      // this.value là số lượng sản phẩm khi onchange
      if (this.value > tmpInputValue)
        updateAddTotal(
          1,
          parseInt(
            cartContainerMiddle.children[index].children[3].children[0]
              .innerText
          )
        );
      if (this.value < tmpInputValue)
        updateSubtractTotal(
          1,
          parseInt(
            cartContainerMiddle.children[index].children[3].children[0]
              .innerText
          )
        );
      updateTotal();
      tmpInputValue = this.value; // lưu this.value vào tmpInputValue trước khi onchange
    });

    inputValueQuantityCart.addEventListener("keypress", function (event) {
      event.preventDefault();
    });
  }
}
