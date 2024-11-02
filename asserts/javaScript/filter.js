
const priceSlider = document.getElementById('priceRange');
const selectedPrice = document.getElementById('selectedPrice');

let currentPrice = priceSlider.value;

priceSlider.addEventListener('input', function () {

    selectedPrice.textContent = priceSlider.value;
    currentPrice = priceSlider.value;
    chose();
});


function renderProducts(listchose = [], listchose2 = [], searchTerm = '') {
    let div = '';

    for (let i = 0; i < filteredProducts.length; i++) {
        let product = filteredProducts[i];
        let listproduct = product.gender;
        let listproduct2 = product.type;

        // Kiểm tra nếu danh sách lọc giới tính không trống
        if (listchose.length > 0 && !listchose.includes(listproduct)) continue;

        // Kiểm tra nếu danh sách lọc loại sản phẩm không trống
        if (listchose2.length > 0 && !listchose2.includes(listproduct2)) continue;

        // So sánh giá sản phẩm với giá trị thanh trượt
        if (product.price > currentPrice) continue;

        // Kiểm tra nếu có từ khóa tìm kiếm
        if (searchTerm && !product.name.toLowerCase().includes(searchTerm.toLowerCase())) continue;

        div += `
        <div class='course-item'>
            <a href="../pages/detail.html?id=${product.id}"> <!-- Thêm liên kết đến trang chi tiết sản phẩm -->
            <img src='${product.image}' alt='${product.name}'/>
            </a>
            <h3>${product.name}</h3>
            <p>${product.content}</p>
            <h5 class="price">From $:<span class="price-value">${product.price}</span></h5>
            <div class="button-container">
                <a href="../pages/detail.html?id=${product.id}" class="more-info">></a>
            </div>
        </div>
        `;
    }

    document.getElementById('product-Discover').innerHTML = div || '<p>No products found</p>';
}

// Hàm xem chi tiết sản phẩm
function viewDetails(productId) {
    window.location.href = `product-details.html?id=${encodeURIComponent(productId)}`;
}

// Hàm lọc sản phẩm
function chose() {
    let arr1 = document.querySelectorAll('#options input[type="checkbox"]');
    let listchose = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i].checked) listchose.push(arr1[i].value);
    }

    // Lọc sản phẩm theo giới tính (gender)
    let selectedGender = [];
    let genderOptions = document.querySelectorAll('.version');
    for (let i = 0; i < genderOptions.length; i++) {
        if (genderOptions[i].checked) selectedGender.push(genderOptions[i].value);
    }

    let arr2 = document.querySelectorAll('.item .version');
    let listchose2 = [];
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i].checked) listchose2.push(arr2[i].value);
    }

    const searchTerm = document.getElementById('header-input').value; // Lấy giá trị tìm kiếm
    renderProducts(listchose, listchose2, searchTerm); // Gọi hàm render với từ khóa tìm kiếm
};

// Hàm tìm kiếm sản phẩm
function search() {
    const searchTerm = document.getElementById('header-input').value; // Lấy giá trị tìm kiếm
    const arr1 = document.querySelectorAll('#options input[type="checkbox"]');
    let listchose = [];
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i].checked) listchose.push(arr1[i].value);
    }

    // Lọc sản phẩm theo giới tính (gender)
    let selectedGender = [];
    let genderOptions = document.querySelectorAll('.version');
    for (let i = 0; i < genderOptions.length; i++) {
        if (genderOptions[i].checked) selectedGender.push(genderOptions[i].value);
    }

    let arr2 = document.querySelectorAll('.item .version');
    let listchose2 = [];
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i].checked) listchose2.push(arr2[i].value);
    }

    renderProducts(listchose, listchose2, searchTerm); // Gọi hàm render với từ khóa tìm kiếm
};

// Gọi hàm render lần đầu tiên để hiển thị tất cả sản phẩm
renderProducts();

