let orderForm = [];//mảng đơn hàng
let orderFormItem ={};//thêm đơn hàng 
let lenghtOrderForm = 1;
let isProcessed = false; //check tình trạng xử lí
console.log(typeof today);
function addOrderForm(id) {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1;// month start at 0
    let yy = today.getFullYear();
    today = dd + '/' + mm + '/' + yy;
    for(let i = 0;i < lenghtOrderForm ; i++) {
        orderFormItem = {
            id: `${i+1}`,
            idUser: id,
            dateOrder: today,
            status: isProcessed,
        }
        orderForm.push(orderFormItem);
    }
}





