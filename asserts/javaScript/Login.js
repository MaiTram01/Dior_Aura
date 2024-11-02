// PHẦN ĐĂNG KÝ ĐĂNG NHẬP
// Tạo một mảng chứa thông tin của admin
const admin = [
    {
        email: 'admin@gmail.com',
        password: '12345678'
    }
];

// Lưu thông tin admin vào localStorage
localStorage.setItem('admin', JSON.stringify(admin));

// Lấy các phần tử cần thiết từ DOM
const registerButton = document.getElementById('register'); // Nút đăng ký
const loginButton = document.getElementById('login'); // Nút đăng nhập
const container = document.getElementById('dior-lg'); // Container chứa form đăng nhập/đăng ký
const dangnhapBtns = document.querySelectorAll('.Dangnhap'); // Tất cả các nút đăng nhập
const overlay2 = document.getElementById('overlay'); // Overlay để hiển thị form
const incluLsandsg = document.querySelector('.inclu-lsandsg'); // Phần hiển thị form đăng nhập
const nameInput = document.getElementById('nameInput'); // Lấy input tên người dùng
const dangNhapLi = document.querySelectorAll('.Dangnhap'); // Tất cả các li có class Dangnhap
const logoutBtn = document.querySelector('.Dangxuat'); // Nút đăng xuất
const loginForm = document.querySelector('.login-container form'); // Form đăng nhập
const loginEmailInput = document.querySelector('.login-container input[type="email"]'); // Input email trong form đăng nhập
const loginPasswordInput = document.querySelector('.login-container input[type="password"]'); // Input password trong form đăng nhập

// Biến này dùng để nhận biết user đã login hay chưa. Nếu chưa là false
var userStatus = false;

// Khi DOM đã được tải xong
document.addEventListener('DOMContentLoaded', function () {
    const savedName = localStorage.getItem('userName'); // Lấy tên người dùng từ localStorage
    const registered = localStorage.getItem('isRegistered'); // Lấy trạng thái đăng ký từ localStorage

    // Kiểm tra nếu tên người dùng đã được lưu và đã đăng ký
    if (savedName && registered === 'true') {
        // Cập nhật tên người dùng trong phần hiển thị
        dangNhapLi.forEach((li, index) => {
            if (index === 0) {
                li.innerHTML = `<i class="fa-solid fa-user-large"></i> ${savedName}`; // Hiển thị tên người dùng
            } else {
                li.style.display = 'none'; // Ẩn các phần tử khác
            }
        });

        logoutBtn.style.display = 'block'; // Hiển thị nút đăng xuất
        userStatus = true; // Đánh dấu người dùng đã đăng nhập
    } else {
        logoutBtn.style.display = 'none'; // Ẩn nút đăng xuất nếu chưa đăng nhập
    }

    // Kiểm tra và điền thông tin email và password đã lưu vào form đăng nhập
    const savedEmail = localStorage.getItem('userEmail');
    const savedPassword = localStorage.getItem('userPassword');
    if (savedEmail && savedPassword) {
        loginEmailInput.value = savedEmail; // Điền email vào input
        loginPasswordInput.value = savedPassword; // Điền password vào input
    }
});

// Xử lý sự kiện khi nhấn nút đăng ký
registerButton.addEventListener("click", () => {
    container.classList.add("right-panel-active"); // Hiển thị form đăng ký
});

// Xử lý sự kiện khi nhấn nút đăng nhập
loginButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active"); // Hiển thị form đăng nhập
});

// Xử lý sự kiện cho tất cả các nút đăng nhập
dangnhapBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        overlay2.style.display = 'block'; // Hiển thị overlay
        incluLsandsg.style.display = 'flex'; // Hiển thị form đăng nhập
    });
});

// Xử lý sự kiện khi nhấn vào overlay
overlay2.addEventListener('click', function () {
    overlay2.style.display = 'none'; // Ẩn overlay
    incluLsandsg.style.display = 'none'; // Ẩn form đăng nhập
    container.classList.remove("right-panel-active"); // Quay lại trạng thái ban đầu
});

// Xử lý sự kiện khi form đăng ký được gửi
const registerForm = document.querySelector('.register-container form');
registerForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Ngăn chặn hành vi gửi mặc định

    const name = nameInput.value; // Lấy tên từ input
    const email = registerForm.querySelector('input[type="email"]').value; // Lấy email từ input
    const password = registerForm.querySelector('input[type="password"]').value; // Lấy password từ input

    // Kiểm tra nếu có trường nào bị bỏ trống
    if (!name || !email || !password) {
        alert('Please fill in all fields to sign in.'); // Hiển thị thông báo yêu cầu điền đầy đủ
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || []; // Lấy danh sách người dùng từ localStorage

    const existingUser = users.find(user => user.email === email); // Kiểm tra nếu email đã tồn tại

    // Nếu email đã tồn tại
    if (existingUser) {
        alert('This email is already registered. Please use a different email.'); // Hiển thị thông báo lỗi
        return;
    }

    // Tạo ID mới cho người dùng
    const newId = users.length ? users[users.length - 1].id + 1 : 1;

    // Thêm người dùng mới vào danh sách
    users.push({
        id: newId,
        name: name,
        email: email,
        password: password
    });

    // Lưu danh sách người dùng vào localStorage
    localStorage.setItem('users', JSON.stringify(users));

    alert('Registration Successful!'); // Hiển thị thông báo thành công

    // Cập nhật thông tin người dùng đã đăng nhập
    dangNhapLi.forEach((li, index) => {
        if (index === 0) {
            li.innerHTML = `<i class="fa-solid fa-user-large"></i> ${name}`; // Hiển thị tên người dùng
        } else {
            li.style.display = 'none'; // Ẩn các phần tử khác
        }
    });

    logoutBtn.style.display = 'block'; // Hiển thị nút đăng xuất
    userStatus = true; // Đánh dấu người dùng đã đăng nhập

    overlay2.style.display = 'none'; // Ẩn overlay
    incluLsandsg.style.display = 'none'; // Ẩn form đăng nhập

    registerForm.reset(); // Đặt lại form đăng ký
});

// Xử lý sự kiện khi form đăng nhập được gửi
loginForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Ngăn chặn hành vi gửi mặc định
    const email = loginEmailInput.value; // Lấy email từ input
    const password = loginPasswordInput.value; // Lấy password từ input
    const savedAdmin = JSON.parse(localStorage.getItem('admin')); // Lấy thông tin admin từ localStorage

    // Kiểm tra thông tin đăng nhập admin
    if (email === savedAdmin[0].email && password === savedAdmin[0].password) {
        alert('Admin Login Successful!'); // Hiển thị thông báo thành công
        window.location.href = '../../pages/homeAdmin.html'; // Chuyển hướng đến trang admin
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || []; // Lấy danh sách người dùng từ localStorage
    // Kiểm tra thông tin đăng nhập của người dùng
    const user = users.find(user => user.email === email && user.password === password);

    // Nếu tìm thấy người dùng
    if (user) {
        alert('User Login Successful!'); // Hiển thị thông báo thành công
        logoutBtn.style.display = 'block'; // Hiển thị nút đăng xuất
        userStatus = true; // Đánh dấu người dùng đã đăng nhập

        const savedName = user.name; // Lấy tên người dùng
        // Cập nhật thông tin người dùng đã đăng nhập
        dangNhapLi.forEach((li, index) => {
            if (index === 0) {
                li.innerHTML = `<i class="fa-solid fa-user-large"></i> ${savedName}`; // Hiển thị tên người dùng
            } else {
                li.style.display = 'none'; // Ẩn các phần tử khác
            }
        });

        overlay2.style.display = 'none'; // Ẩn overlay
        incluLsandsg.style.display = 'none'; // Ẩn form đăng nhập
    } else {
        alert('Incorrect email or password. Please try again.'); // Hiển thị thông báo lỗi
    }
});


// Xử lý sự kiện đăng xuất
logoutBtn.addEventListener('click', function () {
    userStatus = false;

    dangNhapLi.forEach(li => {
        li.style.display = 'block';
        if (li.innerHTML.includes('fa-user-large')) {
            li.innerHTML = `<i class="fa-solid fa-user-large"></i> Log in`;
        }
    });

    logoutBtn.style.display = 'none';
});

function handleCart() {
    if (userStatus) {
        openCart();
    } else {
        overlay2.style.display = 'block';
        incluLsandsg.style.display = 'flex';
        cartContainer.style.display = 'none';
    }
}
function handleChatbox() {
    if (userStatus) {
        container_chat.style.display = 'flex';
        chatBubble.style.display = 'none';
    } else {

        overlay2.style.display = 'block';
        incluLsandsg.style.display = 'flex';
        container_chat.style.display = 'none';
        chatBubble.style.display = 'flex';
    }
}
chatBubble.addEventListener('click', handleChatbox);