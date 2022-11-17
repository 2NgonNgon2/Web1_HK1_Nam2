// let orderForm = [];//mảng đơn hàng
// let orderFormItem ={};//thêm đơn hàng 
let lenghtOrderForm = 1;
let isProcessed = false; //check tình trạng xử lí

function getDate() {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;// month start at 0
    let yy = today.getFullYear();
    let hour = today.getHours();
    let minute = today.getMinutes();
    let ddMMyy = hour + ':' + minute + ' ' + dd + '/' + mm + '/' + yy;
    return ddMMyy;
}

// let orderForm = [ 
//     {
//         id: "1",
//         idUser: "3",
//         dateOrder: today,
//         status: isProcessed,
//         arrProductId: ["4","24","11","20"]
//     },
//     {
//         id: "2",
//         idUser: "3",
//         dateOrder: today,
//         status: isProcessed,
//         arrProductId: ["14","6","2","10"]
//     },
//     {
//         id: "3",
//         idUser: "4",
//         dateOrder: today,
//         status: isProcessed,
//         arrProductId: ["14","6"]
//     },
//     {
//         id: "4",
//         idUser: "4",
//         dateOrder: today,
//         status: isProcessed,
//         arrProductId: ["4","6","21"]
//     },
//     {
//         id: "5",
//         idUser: "4",
//         dateOrder: today,
//         status: isProcessed,
//         arrProductId: ["1","26","22","10","15"]
//     },

// ]
// localStorage.setItem('orderForms',JSON.stringify(orderForm));

// if(arrOrderForm) {
    

// } else {
//     return false;
// }

// function addOrderForm(id) {
//     for(let i = 0;i < lenghtOrderForm ; i++) {
//         orderFormItem = {
//             id: `${i+1}`,
//             idUser: id,
//             dateOrder: today,
//             status: isProcessed,
//         }
//         orderForm.push(orderFormItem);
//     }
// }





