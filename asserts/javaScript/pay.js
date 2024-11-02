document.addEventListener("DOMContentLoaded", function () {
    // Lấy ID của các sản phẩm trong giỏ hàng từ localStorage
    const cartProductIds = JSON.parse(localStorage.getItem('listID')) || [];
    const cartProducts = JSON.parse(localStorage.getItem('cardList')) || [];  

    // Lọc các sản phẩm trong giỏ hàng dựa trên ID đã lưu trong listID
    const selectedProducts = cartProducts.filter(product => cartProductIds.includes(product.id));

    // Log để kiểm tra xem selectedProducts có chứa đúng sản phẩm không
    console.log("Selected Products:", selectedProducts);

    // Tham chiếu tới container để hiển thị các sản phẩm
    const orderContainer = document.querySelector('.g-grid-col1');

    selectedProducts.forEach(product => {
        const productHTML = `
            <div class="order-item">
                <img src="${product.image}" alt="${product.name}">
                <div class="order-details">
                    <p class="pname">${product.name}</p>
                    <p class="describe">${product.description}</p>
                    <p class="qty">Quantity: ${product.quantity}</p>
                    <p class="price">Total: $${(product.price * product.quantity).toFixed(2)}</p>
                </div>
            </div>
        `;
        orderContainer.insertAdjacentHTML('beforeend', productHTML);
    });

    // Tính toán và hiển thị tổng chi phí
    const totalCost = selectedProducts.reduce((sum, product) => sum + product.price * product.quantity, 0);
    document.querySelector('.total-payment').textContent = `$${totalCost.toFixed(2)}`;
});

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
function Order(){
    alert("You have placed your order successfully")
}
