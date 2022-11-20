let orderForm = [];//mảng đơn hàng
let orderFormItem ={};//thêm đơn hàng 
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

orderForm = [ 
    {
        id: "1",
        idUser: "3",
        dateOrder: today,
        status: isProcessed,
        arrProductId: ["4","24","11","20"]
    },
    {
        id: "2",
        idUser: "3",
        dateOrder: today,
        status: isProcessed,
        arrProductId: ["14","6","2","10"]
    },
    {
        id: "3",
        idUser: "4",
        dateOrder: today,
        status: isProcessed,
        arrProductId: ["14","6"]
    },
    {
        id: "4",
        idUser: "4",
        dateOrder: today,
        status: isProcessed,
        arrProductId: ["4","6","21"]
    },
    {
        id: "5",
        idUser: "4",
        dateOrder: today,
        status: isProcessed,
        arrProductId: ["1","26","22","10","15"]
    },






