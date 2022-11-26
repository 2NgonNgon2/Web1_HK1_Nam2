
var tmpOrderForm = JSON.parse(localStorage.getItem("orderForm")); // mảng hóa đơn
var tmp = []; // danh sách các sản phẩm và số lượng từng loại
var statisticalTable; // bang thong ke

function Statistical(){
    let i = get("11");
    let total = 0 ; 
    i.forEach(element => {
        total+=parseInt(element.price)*element.quantity;
    });
    statisticalTable = {
        name : "Bảng thống kê tháng " + "" ,
        total:total,
        list : i
    }
    console.log(statisticalTable);
}
function get(date) {
    let items = FitlerByMonth(date);// mảng hóa đơn sau khi lọc
    items.forEach(element => {
        let arr = element.arrProductId; // mang sản phẩm
        let item;
        arr.forEach(i => {
            item = {
                productName: i.name,
                quantity: i.quantity,
                price : i.price
            }
            if (tmp.length == 0) {
                tmp.push(item);
            }
            else {
                tmp.forEach(j => {
                    if (j.productName == i.name) {
                        j.quantity += i.quantity;
                    }
                    else {
                        tmp.push(item);
                    }
                });
            }
        });
    });
    return tmp;
}
function FitlerByMonth(date) {
    let tmpArr = [];
    tmpOrderForm.forEach(element => {
        if (Find(element.dateOrder) == date && !element.status) {
            tmpArr.push(element);
        }
    });
    return tmpArr;
}
function Find(str) {
    str = str.toString();
    let index = str.indexOf("/");
    let lastindex = str.lastIndexOf("/");
    return str.slice(index + 1, lastindex);
}
$(".btn").click(function () {
    console.log(tmpOrderForm);
    console.log(Find("12/11/2002"));
    console.log(FitlerByMonth("11"));
    console.log(get("11"));
    Statistical();
});