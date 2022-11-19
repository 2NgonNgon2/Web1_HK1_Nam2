// mảng tài khoản

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