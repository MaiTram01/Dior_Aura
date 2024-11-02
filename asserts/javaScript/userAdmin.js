const users = [
    {
        id: 1,
        name: 'Tran Cong Doan',
        email: 'congdoan0806@gmail.com',
        password: '12345678'
    },
    {
        id: 2,
        name: 'Le Gia Toan',
        email: 'toanle112@gmail.com',
        password: '987654321'
    }
];

// Nếu localStorage chưa có 'users', lưu danh sách người dùng mặc định
if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(users));
}

// Hiển thị số lượng người dùng hiện tại
function quantityUser(){
    var users = JSON.parse(localStorage.getItem("users"));
    var quantity = users.length;
    document.getElementById('diplayNumber').innerHTML = "The current number of users is: "+ quantity;
}
quantityUser();
var user = JSON.parse(localStorage.getItem("users")) || [];  // Lấy danh sách người dùng
// Hiển thị danh sách người dùng trong bảng
function showUsers(arr) { /* Thêm tham số truyền vào để có thể tận dụng code */
    if (arr.length > 0) {
        var tableContent = '';  
        arr.forEach(user => {
            var row = "<tr style='border-bottom: 1px solid black;height:50px; background-color: #faeef0;'>";
            row += "<td style='padding-left: 122px;'>" + user.id + "</td>";
            row += "<td style='padding-left: 95px;'>" + user.name + "</td>";
            row += "<td style='padding-left: 62px;'>" + user.email + "</td>";
            row += "<td style='padding-left: 118px;'>" + user.password + "</td>";
            row += "<td style='padding-left: 120px;'>" +
                "<button class='btn btn-danger' id='btn-delete' onclick='openFormRemove(\"" + user.id + "\")'>Delete</button></td>";
            row += "</tr>";
            tableContent += row; 
        });

        document.getElementById('content_table_user').innerHTML = tableContent; // Cập nhật bảng hiển thị
    } else {
        console.log("No users found in localStorage.");
    }
}
showUsers(user); /* Hiển thị tất cả user ra màn hình  */

// Hàm để xử lý đăng ký (từ trang Sign in)
function registerNewUser(name, email, password) {
    let users = JSON.parse(localStorage.getItem('users')) || [];

    // Tạo ID mới cho người dùng, dựa vào ID cuối cùng trong danh sách
    const newId = users.length ? users[users.length - 1].id + 1 : 1;

    // Thêm người dùng mới vào danh sách
    users.push({ id: newId, name: name, email: email, password: password });

    // Lưu danh sách người dùng mới vào localStorage
    localStorage.setItem('users', JSON.stringify(users));

    // Cập nhật lại bảng Users Management sau khi thêm người dùng mới
    showUsers(users);
    quantityUser();  // Cập nhật lại số lượng người dùng
}

// Hàm xử lý xóa người dùng
var id_item;
function openFormRemove(id){
    document.getElementById('formRemove').style.display = 'block';
    id_item = id;
}

function removeUser(){
    var users = JSON.parse(localStorage.getItem("users"));
    
    const newUsers = users.filter(function(user){
        return String(user.id) !== String(id_item);
    });
    localStorage.setItem("users", JSON.stringify(newUsers));   
    location.reload();
}

function closeFormRemove(){
    document.getElementById('formRemove').style.display = 'none';
}

// Các hàm điều hướng trang
function openProduct(){
    window.location.href = '../../pages/homeAdmin.html';
}
function openConfirmation(){
    window.location.href = '../../pages/orderAdmin.html';
}
function openChart(){
    window.location.href = '../../pages/chart.html';
}
// Phan tim kiem

const searchInput = document.getElementById('header-input');
const results = document.getElementById('results');
    
document.addEventListener('click', function(event) {

    if (!results.contains(event.target) && event.target.id !== 'header-input') {
        results.style.display = 'none';
    }
});
searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();
    results.innerHTML = ''; // Xóa kết quả trước đó
    results.style.display = 'block';
    const emails = user.filter(item => item.email.toLowerCase().includes(query));
    console.log(emails)
    emails.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.name;
        li.textContent = item.email;
        li.addEventListener('click', function() {
            searchInput.value = item.email; 
            results.innerHTML = ''; // Xóa kết quả sau khi chọn
        });
        results.appendChild(li);
    });
});
function searchUser(){
    var dataInput  = document.getElementById('header-input').value;
    var result = user.filter(function(item){
        return item.name == dataInput || item.email == dataInput;
    });
    if(!result){
        alert("Not found");
    }else{
        showUsers(result);;
    }
}
