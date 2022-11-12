let viewOrder = document.getElementById('view-order');

function showViewOrder() {
    viewOrder.classList.add("open");
    hideCart();
    hideInfoProduct();
}

function hideViewOrder() {
    viewOrder.classList.remove("open");
  }
viewOrder.addEventListener("click", hideViewOrder);