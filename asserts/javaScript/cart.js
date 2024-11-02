// Đăng Vai
// Đóng giỏ hàng
function closeCart() {
    const cartContainer = document.getElementById('cartContainer');
    cartContainer.style.display = 'none'; // Ẩn giỏ hàng
    overlay.style.display = 'none'; // Ẩn overlay
}

// Mở giỏ hàng
function openCart() {
    const cartContainer = document.getElementById('cartContainer');
    cartContainer.style.display = 'block'; // Hiển thị giỏ hàng
}

// Lấy dữ liệu giỏ hàng từ localStorage
let cart = JSON.parse(localStorage.getItem('cardList')) || [];

// Hàm hiển thị giỏ hàng
function renderCart() {
    const cartContainer = document.getElementById('cart-products');
    cartContainer.innerHTML = '';

    const listID = JSON.parse(localStorage.getItem('listID')) || [];

    // Tạo một đối tượng đếm số lần xuất hiện của mỗi ID trong listID
    const idCount = {};
    listID.forEach(id => {
        idCount[id] = (idCount[id] || 0) + 1;
    });

    // Lặp qua từng sản phẩm trong giỏ hàng
    cart.forEach(item => {
        const count = idCount[item.id]; // Kiểm tra số lần xuất hiện của ID sản phẩm trong listID

        if (count) { // Nếu ID sản phẩm xuất hiện trong listID
            // Lặp để thêm sản phẩm vào giỏ hàng theo số lần xuất hiện
            for (let i = 0; i < count; i++) {
                const productHTML = `
                <div class="cart-product" data-id="${item.id}"> <!-- Phần tử sản phẩm -->
                    <input type="checkbox" class="select-product" data-id="${item.id}" ${item.selected ? 'checked' : ''}> <!-- Checkbox để chọn sản phẩm -->
                    <img src="${item.image}" alt="${item.name}"> <!-- Hình ảnh sản phẩm -->
                    <div class="cart-product-info"> <!-- Thông tin sản phẩm -->
                        <div class="cart-product-info-left">
                            <h3>${item.name}</h3> <!-- Tên sản phẩm -->
                            <p>${item.description}</p> <!-- Mô tả sản phẩm -->
                        </div>
                        <div class="cart-price-actions"> <!-- Thao tác giá và số lượng -->
                            <div class="price-basket">$${item.price.toFixed(2)}</div> <!-- Giá sản phẩm -->
                            <div class="cart-actions"> <!-- Các nút thao tác -->
                                <button class="quantity-decrease">-</button> <!-- Giảm số lượng -->
                                <span class="quantity">${item.quantity}</span> <!-- Hiển thị số lượng -->
                                <button class="quantity-increase">+</button> <!-- Tăng số lượng -->
                                <span class="edit-btn">&#9998;</span> <!-- Nút chỉnh sửa -->
                                <span class="delete-btn">&#128465;</span> <!-- Nút xóa -->
                            </div>
                        </div>
                    </div>
                </div>`;

                cartContainer.insertAdjacentHTML('beforeend', productHTML); // Thêm sản phẩm vào giỏ hàng
            }
        }
    });

    updateTotal(); // Cập nhật tổng số lượng và giá tiền
}

// Cập nhật giỏ hàng vào localStorage và hiển thị lại
function updateCart() {
    localStorage.setItem('cardList', JSON.stringify(cart));
    renderCart();
}

// Sự kiện cho nút "Order"
document.querySelector('.order-btn').addEventListener('click', function () {
    // Lọc ID của tất cả sản phẩm có trong giỏ hàng
    const cartProductIds = cart.map(item => item.id);
    // Lưu danh sách ID vào localStorage
    localStorage.setItem('cartProductIds', JSON.stringify(cartProductIds));
    // Chuyển hướng tới trang thanh toán
    window.location.href = '../../pages/pay.html';
});


// Hàm cập nhật tổng số lượng và giá tiền trong giỏ hàng
function updateTotal() {
    const totalItems = document.getElementById('total-items');
    const totalProducts = document.getElementById('total-products');
    const totalPrice = document.getElementById('total-price');

    let totalQuantity = 0;
    let totalCost = 0;

    // Lấy listID từ localStorage
    const listID = JSON.parse(localStorage.getItem('listID')) || [];

    // Đếm số lần xuất hiện của mỗi ID trong listID
    const idCount = {};
    listID.forEach(id => {
        idCount[id] = (idCount[id] || 0) + 1;
    });

    // Lặp qua từng sản phẩm trong giỏ hàng dựa vào idCount
    cart.forEach(item => {
        const count = idCount[item.id];

        if (count && item.selected) { // Chỉ tính những sản phẩm được chọn
            totalQuantity += item.quantity;
            totalCost += item.price * item.quantity;
        }
    });

    // Cập nhật số lượng và giá tiền trong giao diện
    totalItems.textContent = totalQuantity;
    totalProducts.textContent = totalQuantity;
    totalPrice.textContent = `$${totalCost.toFixed(2)}`;
}

// Lắng nghe sự kiện change trên checkbox "Select all"
document.getElementById('select-all').addEventListener('change', function (e) {
    const isChecked = e.target.checked;

    // Cập nhật trạng thái selected của tất cả sản phẩm trong giỏ hàng
    cart.forEach(item => {
        item.selected = isChecked; // Gán trạng thái selected cho tất cả sản phẩm theo checkbox "Select all"
    });

    // Cập nhật lại cart và hiển thị lại giỏ hàng
    updateCart();
    updateTotal(); // Gọi hàm cập nhật tổng số lượng và giá tiền
});

// Hiển thị giỏ hàng ban đầu
renderCart();

// Hàm xóa một sản phẩm khỏi giỏ hàng tạm thời
function deleteProduct(productId) {
    // Lấy danh sách ID sản phẩm trong listID từ localStorage
    let listID = JSON.parse(localStorage.getItem('listID')) || [];

    // Xóa một lần xuất hiện của sản phẩm trong listID
    const productIndex = listID.indexOf(productId);
    if (productIndex !== -1) {
        listID.splice(productIndex, 1); // Xóa một sản phẩm khỏi listID
    }

    // Lưu lại listID mới vào localStorage
    localStorage.setItem('listID', JSON.stringify(listID));

    // Hiển thị lại giỏ hàng sau khi xóa sản phẩm
    renderCart();
}
function changeQuantity(productId, quantityChange) {
    // Tìm sản phẩm trong giỏ hàng dựa trên ID
    const product = cart.find(item => item.id === productId);
    if (product) {
        // Cập nhật số lượng sản phẩm
        product.quantity += quantityChange;
        
        // Đảm bảo số lượng không âm
        if (product.quantity < 1) {
            product.quantity = 1;
        }

        // Lưu lại giỏ hàng vào localStorage sau khi cập nhật
        localStorage.setItem('cardList', JSON.stringify(cart));

        // Cập nhật giao diện hiển thị giỏ hàng
        renderCart();
        updateTotal(); // Cập nhật tổng giá và tổng số lượng
    }
}
document.addEventListener('click', function (e) {
    const target = e.target;
    const cartProductElement = target.closest('.cart-product');

    if (cartProductElement) {
        const productId = parseInt(cartProductElement.dataset.id);

        if (target.classList.contains('delete-btn')) {
            deleteProduct(productId);
        }

        if (target.classList.contains('quantity-decrease')) {
            changeQuantity(productId, -1);
        }

        if (target.classList.contains('quantity-increase')) {
            changeQuantity(productId, 1);
        }

        if (target.classList.contains('select-product')) {
            const product = cart.find(item => item.id === productId);
            if (product) {
                product.selected = target.checked;
                updateTotal();
            }
        }
    }
});


// Lắng nghe sự kiện thay đổi của checkbox "Chọn tất cả"
document.getElementById('select-all').addEventListener('change', function (e) {
    const isChecked = e.target.checked;
    cart.forEach(item => {
        item.selected = isChecked;
    });
    localStorage.setItem('cardList', JSON.stringify(cart));
    renderCart();
});

// Giao diện giỏ hàng và overlay
const cartIcon = document.querySelector('.fa-cart-shopping');
const cartContainer = document.querySelector('.cart-container');
const overlay = document.querySelector('.overlay');

// Sự kiện click mở giỏ hàng
cartIcon.addEventListener('click', function () {
    cartContainer.style.display = 'block';
    overlay.style.display = 'block';
});

// Sự kiện click đóng giỏ hàng khi click overlay
overlay.addEventListener('click', function () {
    cartContainer.style.display = 'none';
    overlay.style.display = 'none';
});
// Xử lý giỏ hàng
function handleCart() {
    if (userStatus) {
        openCart();
    } else {
        overlay2.style.display = 'block';
        incluLsandsg.style.display = 'flex';
        cartContainer.style.display = 'none';
    }
}
