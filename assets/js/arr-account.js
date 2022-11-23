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



var account = 
[
    {
        "id": "1",
        "username": "admin",
        "password": "123",
        "authority": "admin",
        "email": "admin123@gmail.com",
        "phone": "123456"
    },
    {
        "id": "2",
        "username": "admin2",
        "password": "123",
        "authority": "admin",
        "email": "admin123@gmail.com",
        "phone": "123456"
    },
    {
        "id": "3",
        "username": "user",
        "password": "123",
        "authority": "user",
        "email": "admin123@gmail.com",
        "phone": "123456"
    },
    {
        "id": "4",
        "username": "user2",
        "password": "123",
        "authority": "user",
        "email": "admin123@gmail.com",
        "phone": "123456"
    }
];

