let orderForm ;//mảng đơn hàng
// let orderFormItem ={};//thêm đơn hàng 
let lenghtOrderForm = 1;

if(localStorage.getItem("orderForm") == null) // orderForm chưa có trong localStoragge 
{
    console.log("yo wtf?");
    orderForm = [ 
        // {
        //     id: "1",
        //     idUser: "3",
        //     dateOrder: getDate(),
        //     status: true,
        //     arrProductId: ['5','24','11','20','2','2'],
        //     totalPrice: "1999999"
        // },
        // {
        //     id: "2",
        //     idUser: "3",
        //     dateOrder: getDate(),
        //     status: true,
        //     arrProductId: ['14','6','2','10'],
        //     totalPrice: "1999999"
        // },
        // {
        //     id: "3",
        //     idUser: "4",
        //     dateOrder: getDate(),
        //     status: false,
        //     arrProductId: ["14","6"],
        //     totalPrice: "1999999"
        // },
        // {
        //     id: "4",
        //     idUser: "4",
        //     dateOrder: getDate(),
        //     status: false,
        //     arrProductId: ["4","6","21"],
        //     totalPrice: "1999999"
        // },
        // {
        //     id: "5",
        //     idUser: "4",
        //     dateOrder: getDate(),
        //     status: false,
        //     arrProductId: ["1","26","22","10","15"],
        //     totalPrice: "1999999"
        // },
        // {
        //     id: "5",
        //     idUser: "4",
        //     dateOrder: getDate(),
        //     status: false,
        //     arrProductId: ["1","26","22","10","15"],
        //     totalPrice: "1999999"
        // },
        // {
        //     id: "5",
        //     idUser: "4",
        //     dateOrder: getDate(),
        //     status: false,
        //     arrProductId: ["1","26","22","10","15"],
        //     totalPrice: "1999999"
        // },
    
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
    let hour = today.getHours();
    let minute = today.getMinutes();
    let ddMMyy = hour + ':' + minute + ' ' + dd + '/' + mm + '/' + yy;
    return ddMMyy;
}







