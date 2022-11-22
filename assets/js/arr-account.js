// mảng tài khoản
let account = [];
if(localStorage.getItem("account") == null)
{
    let account = [
        {
            id:"1",
            username:"admin",
            password:"123",
            authority:"admin",
            email:"admin123@gmail.com",
            phone:"123456",
            status:false, // true là khóa, false là không khóa
        },
        {
            id:"2",
            username:"admin2",
            password:"123",
            authority:"admin",
            email:"admin123@gmail.com",
            phone:"123456",
            status:false,
        }
        ,
        {
            id:"3",
            username:"user",
            password:"123",
            authority:"user",
            email:"admin123@gmail.com",
            phone:"123456",
            status:false,
        }
        ,
        {
            id:"4",
            username:"user2",
            password:"123",
            authority:"user",
            email:"admin123@gmail.com",
            phone:"123456",
            status:false,
        }
      ];
    localStorage.setItem("account",JSON.stringify(account));
}
else
{
    account = JSON.parse(localStorage.getItem("account"));
}


var account;

fetch("./assets/js/arr-account.json").then(function (response) {
    if (response.status !== 200) {
        console.log('Lỗi, mã lỗi ' + response.status);
        return;
    }
    response.json().then(data => {
        account = data;
    })
})
// const myForm = document.getElementById('form');
// console.log(myForm);

// myForm.addEventListener('submit',function(e){
//     e.preventDefault();

//     const formData = new FormData(this);

//     fetch('text.json',{
//         method:'post',
//         body:formData
//     }).then(function(response){
//         return response.text();
//     }).then(function(text){
//         console.log(text);
//     }).catch(function(error){
//         console.log(error);
//     })
// });