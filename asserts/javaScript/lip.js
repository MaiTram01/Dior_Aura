
// Mảng để lưu trữ thông tin sản phẩm đã mua
let purchasedProducts = [];

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
document.querySelector('#layout-pc').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Cuộn mượt mà
    });
});
