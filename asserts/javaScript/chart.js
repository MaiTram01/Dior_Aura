
function openUser() {
    window.location.href = '../../pages/userAdmin.html';
}
function openConfirmation() {
    window.location.href = '../../pages/orderAdmin.html';
}
function openProduct() {
    window.location.href = '../../pages/homeAdmin.html';
}
function drawProductChart() {
    const ctx = document.getElementById('productChart').getContext('2d');
    const products = JSON.parse(localStorage.getItem("products")) || [];
    console.log(products)
    const perfume = products.filter(item => item.type === 'perfume').length;
    const makeup = products.filter(item => item.type === 'makeup').length;
    const skincare = products.filter(item => item.type === 'skincare').length;
    const clothing = products.filter(item => item.type === 'clothing').length;
    const accessories = products.filter(item => item.type === 'accessories').length;
    const footwear = products.filter(item => item.type === 'footwear').length;

    const productChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Perfume', 'Makeup', 'Skincare', 'Clothing', 'Accessories', 'Footwear'],
            datasets: [{
                label: 'Quantity',
                data: [perfume, makeup, skincare, clothing, accessories, footwear],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    return productChart;
}

// Gọi hàm để vẽ biểu đồ
drawProductChart();

// Lắng nghe sự kiện hoặc gọi hàm vẽ lại khi dữ liệu thay đổi
window.addEventListener('storage', function (event) {
    if (event.key === "products") {
        drawProductChart();
    }
});
