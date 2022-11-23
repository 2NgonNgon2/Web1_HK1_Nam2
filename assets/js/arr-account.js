// mảng tài khoản

var account = [];
if (localStorage.getItem("arr-account") != null) {
    account = JSON.parse(localStorage.getItem("arr-account"));
}
else if(localStorage.getItem("arr-account" ) === null) {
    account =
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
    localStorage.setItem("arr-account", JSON.stringify(account));
}