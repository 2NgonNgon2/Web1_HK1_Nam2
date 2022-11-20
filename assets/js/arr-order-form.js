let orderForm ;//mảng đơn hàng
// let orderFormItem ={};//thêm đơn hàng 
let lenghtOrderForm = 1;

if(localStorage.getItem("orderForm") == null) // orderForm chưa có trong localStoragge 
{
    console.log("yo wtf?");
    orderForm = [ 
    ]
    localStorage.setItem("orderForm",JSON.stringify(orderForm));

}
if(localStorage.getItem("orderForm") != null)  // đã có trong ls(dùng trong trường hợp chỉnh sửa)
{
    orderForm = JSON.parse(localStorage.getItem("orderForm"));

}



function getDate() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;// month start at 0
    let yy = today.getFullYear();
    let hour = today.getHours()<10?'0':'' + today.getHours();
    let minute = today.getMinutes()<10?'0':'' + today.getMinutes();
    let ddMMyy = hour + ':' + minute + ' ' + dd + '/' + mm + '/' + yy;
    return ddMMyy;
}







