
if(localStorage.getItem("orderForm") == null) // orderForm chưa có trong localStoragge 
{
   
  let orderForm ;//mảng đơn hàng
  let lenghtOrderForm = 1;
  //localStorage.removeItem("orderForm");
    console.log("insert orderForm to ls");
    orderForm = [];
    console.log("setItem");
    localStorage.setItem("orderForm",JSON.stringify(orderForm));
} else
{
    orderForm = localStorage.getItem("orderForm");
}

function getDate() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;// month start at 0
    let yy = today.getFullYear();
    let hour = today.getHours()<10?'0' + today.getHours():'' + today.getHours();
    let minute = today.getMinutes()<10?'0' + today.getHours():'' + today.getMinutes();
    let ddMMyy = hour + ':' + minute + ' ' + dd + '/' + mm + '/' + yy;
    return ddMMyy;
}







