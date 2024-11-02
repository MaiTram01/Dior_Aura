const statusProduct = [
    {
        product_id: 1,
        name_product: "Nuoc Hoa",
        name_user:"Cong Doan",
        price: 390,
        quantity: 2,
        price_total: 200,
        status: "Not confirmed"
    },
    {
        product_id: 2,
        name_product: "Son",
        name_user:"Thanh Phong",
        price: 390,
        quantity: 2,
        price_total: 200,
        status: "Not confirmed"
    }
]

if (!localStorage.getItem("statusProduct")) {
    localStorage.setItem("statusProduct", JSON.stringify(statusProduct));
}

var tableContent = '';
function allItems(array) {
    var tableContent = '';
    

    for (var i in array) {
        var row = "<tr style='border-bottom: 1px solid black; height: 40px; background-color: #faeef0;'>";
        row += "<td style='padding-left: 80px;font-family: Kaisei Tokumin;'>" + array[i].product_id + "</td>";
        row += "<td style='padding-left: 70px;font-family: Kaisei Tokumin;'>" + array[i].name_product + "</td>";
        row += "<td style='padding-left: 70px;font-family: Kaisei Tokumin;'>" + array[i].name_user + "</td>";
        row += "<td style='padding-left: 80px;font-family: Kaisei Tokumin;'>" + array[i].price + "</td>";
        row += "<td style='padding-left: 104px;font-family: Kaisei Tokumin;'>" + array[i].quantity + "</td>";
        row += "<td style='padding-left: 83px;font-family: Kaisei Tokumin;'>" + array[i].price_total + "</td>";
        
        // Thay thế dòng trạng thái bằng dropdown
        row += "<td style='padding-left: 52px; padding-right:20px ;'>" +
            "<div class='status'>" +
            "<div class='dropdown'>" +
            "<button class='dropdown_button' id='dropdownButton-" + i + "'>" + array[i].status + "</button>" +
            "<div class='dropdown-menu' id='dropdownMenu-" + i + "' style='display: none;'>" +
            // "<div class='dropdown-item' data-value='Not confirmed'>Not confirmed</div>" +
            "<div class='dropdown-item' data-value='Confirmed'>Confirmed</div>" +
            "</div>" +
            "</div>" +
            "</td>";
        
        row += "</tr>";
        tableContent += row;
    }
    document.getElementById('content_table').innerHTML = tableContent;

    // Thêm mã JavaScript cho dropdown
    array.forEach((product, index) => {
        const button = document.getElementById(`dropdownButton-${index}`);
        const menu = document.getElementById(`dropdownMenu-${index}`);

        button.onclick = () => {
            menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        };

        document.querySelectorAll(`#dropdownMenu-${index} .dropdown-item`).forEach(item => {
            item.onclick = () => {
                const newValue = item.getAttribute('data-value');
                button.textContent = newValue;

                // Gọi hàm updateProductStatus để cập nhật trạng thái
                updateProductStatus(index, newValue);

                menu.style.display = 'none'; // Ẩn menu sau khi chọn
                location.reload();
            };
        });
    });

    // Đóng dropdown khi nhấn ra ngoài
    window.onclick = (event) => {
        if (!event.target.matches('.dropdown_button')) {
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                menu.style.display = 'none';
            });
        }
    };
}
const statusProducts = JSON.parse(localStorage.getItem('statusProduct'));
console.log(statusProducts[0].status)
function updateProductStatus(index, newStatus) {
    // Lấy dữ liệu từ localStorage
    const statusProduct = JSON.parse(localStorage.getItem('statusProduct'));

    // Cập nhật trạng thái cho sản phẩm
    if (statusProduct && statusProduct[index]) {
        statusProduct[index].status = newStatus;

        // Lưu lại vào localStorage
        localStorage.setItem('statusProduct', JSON.stringify(statusProduct));
    }
}

allItems(statusProducts)

function openAll(){
    allItems(statusProducts)

}
function openUser(){
    window.location.href = '../pages/userAdmin.html';
}
function openProduct(){
    window.location.href = '../pages/homeAdmin.html';
}

function openWaitingConfirm(){

   
    const items = statusProducts.filter(function(item){
        return item.status == "Not confirmed";
    })
 
    
    allItems(items);
}

function openConfirmed(){
    const items = statusProducts.filter(function(item){
        return item.status == "Confirmed";
    })
    allItems(items);
}
function openChart(){
    window.location.href = '../pages/chart.html';
}
