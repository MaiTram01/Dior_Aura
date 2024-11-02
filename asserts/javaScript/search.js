// Mảng để lưu trữ thông tin sản phẩm đã mua
let purchasedProducts = [];

// Tạo cái cardList nếu chưa có
if (!localStorage.getItem("cardList")) {
    localStorage.setItem("cardList", JSON.stringify(cardList))
}

// Hàm hiển thị hoặc ẩn thông báo
function toggleNotification() {
    var notificationBox = document.getElementById("notificationBox");
    if (notificationBox.style.display === "none" || notificationBox.style.display === "") {
        notificationBox.style.display = "block"; // Hiển thị thông báo
    } else {
        notificationBox.style.display = "none"; // Ẩn thông báo
    }
}

function addToCart(productName, productPrice) {
    purchasedProducts.push({ name: productName, price: productPrice });
    updateNotificationContent();
}

// Hàm cập nhật nội dung thông báo
function updateNotificationContent() {
    var notificationContent = document.getElementById("success-alert");

    if (purchasedProducts.length > 0) {
        // Tạo danh sách sản phẩm đã mua
        let productsList = purchasedProducts.map(product => `${product.name} ($${product.price})`).join('<br><br>');
        // Cập nhật nội dung thông báo
        notificationContent.innerHTML = `
            <div class="alert alert-success">
                <button type="button" class="close" onclick="closeAlert(this)">x</button>
                <strong>Success!</strong> The following product(s) have been added to your wishlist:<br>
                ${productsList}
            </div>`;
        // Hiển thị thông báo
        notificationContent.style.display = "block";
        setTimeout(function () {
            notificationContent.style.display = "none";
        }, 3000);
        purchasedProducts = [];
    }
}


// Hàm đóng thông báo khi nhấn nút "x"
function closeAlert(element) {
    let alertElement = element.parentElement;
    alertElement.classList.add("fade-out");
    setTimeout(function () {
        alertElement.style.display = "none"; // Ẩn phần tử sau khi hoàn thành hiệu ứng
    }, 600);
}



// JS cho phần lọc sản phẩm
function showOptions() {
    var options = document.getElementById('options');
    options.style.display = (options.style.display === 'block') ? 'none' : 'block';
}

// Hiển thị các tùy chọn sản phẩm theo từng danh mục
function showOptions1() { toggleProducts('product1'); }
function showOptions2() { toggleProducts('product2'); }
function showOptions3() { toggleProducts('product3'); }
function showOptions4() { toggleProducts('product4'); }
function showOptions5() { toggleProducts('product5'); }
function showOptions6() { toggleProducts('product6'); }
function showOptions7() { toggleProducts('product7'); }
function showOptions8() { toggleProducts('product8'); }

function toggleProducts(productId) {
    const product = document.getElementById(productId);
    product.style.display = (product.style.display === 'block') ? 'none' : 'block';
}



// Lấy phần tử thanh trượt và phần tử để hiển thị giá trị
const priceSlider = document.getElementById('priceRange');
const selectedPrice = document.getElementById('selectedPrice');

// Khai báo biến để lưu giá trị giá hiện tại
let currentPrice = priceSlider.value;

// Hàm để cập nhật giá trị hiển thị và biến khi người dùng thay đổi thanh trượt
priceSlider.addEventListener('input', function () {

    selectedPrice.textContent = priceSlider.value;
    currentPrice = priceSlider.value;

    // Gọi hàm chọn lại để lọc sản phẩm mỗi khi thay đổi giá
    chose();
});


let dataJson = JSON.parse(localStorage.getItem("cardList")) || [];


function renderProducts(listchose = [], listchose2 = [], listchose3 = [], listchose4 = []) {
    let div = '';

    for (let i = 0; i < dataJson.length; i++) {
        let product = dataJson[i];
        let listproduct = product.category;
        let listproduct2 = product.type;
        let listproduct3 = product.Capacity; // Giá trị dung tích của sản phẩm
        let listproduct4 = product.color;

        if (listchose.length > 0 && !listchose.includes(listproduct)) continue;
        if (listchose2.length > 0 && !listchose2.includes(listproduct2)) continue;
        if (listchose3.length > 0 && !listchose3.includes(listproduct3)) continue;
        if (listchose4.length > 0 && !listchose4.includes(listproduct4)) continue;

        // So sánh giá sản phẩm với giá trị thanh trượt
        if (product.price > currentPrice) continue;

        div += `
        <div class='course-item'>
            <img src='${product.image}' alt='${product.name}'/>
            <h3>${product.name}</h3>
            <p>${product.content}</p>
            <h5 class="price">From $:<span class="price-value">${product.price}</span></h5>
           <a class="more-info">></a>
        </div>
        `;
    }

    document.getElementById('product-Discover').innerHTML = div;
}

function chose() {
    // Lấy các lựa chọn từ phần Category (sản phẩm)
    let arr1 = document.querySelectorAll('#options input[type="checkbox"]');
    let listchose = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i].checked) listchose.push(arr1[i].value);
    }

    // Lấy các lựa chọn từ phần Version
    let arr2 = document.querySelectorAll('.item .version');
    let listchose2 = [];
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i].checked) listchose2.push(arr2[i].value);
    }

    // Lấy các lựa chọn từ phần Capacity
    let arr3 = document.querySelectorAll('.capacity-options input[type="checkbox"]');
    let listchose3 = [];
    for (let i = 0; i < arr3.length; i++) {
        if (arr3[i].checked) {
            listchose3.push(arr3[i].value);
        }
    }

    // Lấy các lựa chọn từ phần Color
    let arr4 = document.querySelectorAll('.color-options input[type="checkbox"]');
    let listchose4 = [];
    for (let i = 0; i < arr4.length; i++) {
        if (arr4[i].checked) {
            listchose4.push(arr4[i].value);
        }
    }

    // Gọi hàm renderProducts với các danh sách đã chọn
    renderProducts(listchose, listchose2, listchose3, listchose4);
}

// Gọi hàm render lần đầu tiên để hiển thị tất cả sản phẩm
// renderProducts();

document.querySelectorAll('.capacity-options input[type="checkbox"]').forEach(input => {
    input.addEventListener('change', chose);
});

document.querySelectorAll('.color-options input[type="checkbox"]').forEach(input => {
    input.addEventListener('change', chose);
});



// Hiển thị nút Back to Top khi cuộn xuống
window.addEventListener('scroll', function () {
    const backTopButton = document.querySelector('.back-top');
    if (window.scrollY > 400) {
        backTopButton.classList.add('active');
    } else {
        backTopButton.classList.remove('active');
    }
});

// Xử lý khi click vào nút Back to Top
document.querySelector('.back-top a').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Cuộn mượt mà
    });
});

// Lấy data được luưu bên file homepage để hiển thị
const resultsSearch = JSON.parse(localStorage.getItem('searchResults'));
function displayResults(){
    let div = '';
    resultsSearch.forEach(function(item){
        div += `
        <div class='course-item'>
            <img src='${item.image}' alt='${item.name}'/>
            <h3>${item.name}</h3>
            <p>${item.content}</p>
            <h5 class="price">From $:<span class="price-value">${item.price}</span></h5>
           <a class="more-info">></a>
        </div>
        `;
    });
    document.getElementById('product-Discover').innerHTML = div;
};
// show kết quả
displayResults();

// PHẦN ĐĂNG KÝ ĐĂNG NHẬP
const admin = [
    {
        email: 'admin@gmail.com',
        password: '12345678'
    }
];
localStorage.setItem('admin', JSON.stringify(admin));

// Lấy phần tử cần thiết
const registerButton = document.getElementById('register');
const loginButton = document.getElementById('login');
const container = document.getElementById('dior-lg');
const dangnhapBtns = document.querySelectorAll('.Dangnhap');
const overlay2 = document.getElementById('overlay');
const incluLsandsg = document.querySelector('.inclu-lsandsg');
const nameInput = document.getElementById('nameInput'); // Lấy input Name
const dangNhapLi = document.querySelectorAll('.Dangnhap'); // Lấy tất cả các li có class Dangnhap
const logoutBtn = document.querySelector('.Dangxuat'); // Lấy nút Logout
const loginForm = document.querySelector('.login-container form'); // Lấy form login
const loginEmailInput = document.querySelector('.login-container input[type="email"]'); // Lấy input email login
const loginPasswordInput = document.querySelector('.login-container input[type="password"]'); // Lấy input password login

// Biến này dùng để nhận biết user đã login hay chưa. Nếu chưa là false
var userStatus = false;


document.addEventListener('DOMContentLoaded', function () {
    const savedName = localStorage.getItem('userName');
    const registered = localStorage.getItem('isRegistered'); 

    if (savedName && registered === 'true') {
        dangNhapLi.forEach((li, index) => {
            if (index === 0) {
                li.innerHTML = `<i class="fa-solid fa-user-large"></i> ${savedName}`;
            } else {
                li.style.display = 'none';
            }
        });
      
        logoutBtn.style.display = 'block';
        userStatus = true;
    } else {
      
        logoutBtn.style.display = 'none';
    }

   
    const savedEmail = localStorage.getItem('userEmail');
    const savedPassword = localStorage.getItem('userPassword');
    if (savedEmail && savedPassword) {
        loginEmailInput.value = savedEmail;
        loginPasswordInput.value = savedPassword;
    }
});


registerButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
});
dangnhapBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        overlay2.style.display = 'block';
        incluLsandsg.style.display = 'flex';
    });
});
overlay2.addEventListener('click', function () {
    overlay2.style.display = 'none';
    incluLsandsg.style.display = 'none';
    container.classList.remove("right-panel-active");
});
const registerForm = document.querySelector('.register-container form');
registerForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = nameInput.value;
    const email = registerForm.querySelector('input[type="email"]').value;
    const password = registerForm.querySelector('input[type="password"]').value;

    if (!name || !email || !password) {
        alert('Please fill in all fields to sign in.');
        return;
    }

    let users = JSON.parse(localStorage.getItem('users')) || [];
    
    const existingUser = users.find(user => user.email === email);

    if (existingUser) {
       
        alert('This email is already registered. Please use a different email.');
        return;
    }
    const newId = users.length ? users[users.length - 1].id + 1 : 1;

    users.push({
        id: newId,
        name: name,
        email: email,
        password: password
    });

    localStorage.setItem('users', JSON.stringify(users));

    alert('Registration Successful!');

    dangNhapLi.forEach((li, index) => {
        if (index === 0) {  
            li.innerHTML = `<i class="fa-solid fa-user-large"></i> ${name}`;
        } else {
            li.style.display = 'none'; 
        }
    });

    logoutBtn.style.display = 'block';
    userStatus = true; 

    overlay2.style.display = 'none';
    incluLsandsg.style.display = 'none';

    registerForm.reset();
});

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = loginEmailInput.value;
    const password = loginPasswordInput.value;
    const savedAdmin = JSON.parse(localStorage.getItem('admin'));

    if (email === savedAdmin[0].email && password === savedAdmin[0].password) {
        alert('Admin Login Successful!');
        window.location.href = '../pages/homeAdmin.html'; 
        return; 
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert('User Login Successful!');
        logoutBtn.style.display = 'block';
        userStatus = true; 

        const savedName = user.name;
        dangNhapLi.forEach((li, index) => {
            if (index === 0) {
                li.innerHTML = `<i class="fa-solid fa-user-large"></i> ${savedName}`;
            } else {
                li.style.display = 'none';
            }
        });

        overlay2.style.display = 'none';
        incluLsandsg.style.display = 'none';
    } else {
        alert('Incorrect email or password. Please try again.');
    }
});

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


//PHẦN ICON THÔNG BÁO
function toggleNotification() {
    var notificationBox = document.getElementById("notificationBox");
    if (notificationBox.style.display === "none" || notificationBox.style.display === "") {
        notificationBox.style.display = "block";
    } else {
        notificationBox.style.display = "none";
    }
}
function hideNotification() {
    var notificationContent = document.getElementById("ok");
    notificationContent.textContent = "Bạn đã đặt hàng thành công!";
    var notificationBox = document.getElementById("notificationBox");
    notificationBox.style.display = "none";
}
