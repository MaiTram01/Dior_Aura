// HÀM RENDER SẢN PHẨM
function renderProducts(cardList, elementId) {
    let div = cardList.map(p =>
        `<div class='course-item'>
            <img src='${p.image}' alt='${p.name}' onclick="window.location.href='../../pages/detail.html?id=${p.id}'"/>
            <h3>${p.name}</h3>
            <p>${p.content}</p>
            <h5 class="price">From: <span class="price-value">${p.price}</span></h5>
            <a href="../../pages/detail.html?id=${p.id}" class="more-info">></a>
        </div>`
    ).join("");
    document.getElementById(elementId).innerHTML = div;
}
// Danh sách sản phẩm 1
let cardList1 = [
    { id: 1, image: "../asserts/Image/sp2.jpg", name: "MISS DIOR", content: "Eau de parfum - floral and fresh notes ", price: "$125.00" },
    { id: 2, image: "../asserts/Image/sp2.jpg", name: "MISS DIOR BLOOMING BOUQUET", content: "Eau de toilette", price: "$164.00" },
    { id: 3, image: "../asserts/Image/sp3.jpg", name: "MISS DIOR ABSOLUTELY BLOOMING", content: "Eau de parfum", price: "$125.00" }
];

// Danh sách sản phẩm 2
let cardList2 = [
    { id: 4, image: "../asserts/Image/sp4.jpg", name: "SAUVAGE", content: "Eau de Parfum", price: "$145.00" },
    { id: 5, image: "../asserts/Image/sp5.jpg", name: "SAUVAGE", content: "Elixir", price: "$230.00" },
    { id: 6, image: "../asserts/Image/sp6.jpg", name: "SAUVAGE", content: "Eau de toilette ", price: "$107.00" }
];

// Danh sách sản phẩm 3
let cardList3 = [
    { id: 7, image: "../asserts/Image/sp7.jpg", name: "ROUGE DIOR FOREVER LIPSTICK", content: "Transfer-proof lipstick pigmented matte-bare-lip feel comfort", price: "$66.00" },
    { id: 8, image: "../asserts/Image/sp8.jpg", name: "ROUGE DIOR FOREVER LIQUID", content: "Transfer-proof*liquid lipstick - ultra- pigmented matte- weightless", price: "$64.00" },
    { id: 9, image: "../asserts/Image/sp9.jpg", name: "DIOR FOREVER SKIN GLOW", content: "Clean Radiant Foundation - 24 Wear and Hydration", price: "$99.00" }
];

// Danh sách sản phẩm 4
let cardList4 = [
    { id: 10, image: "../asserts/Image/sp10.jpg", name: "DIOR PRESTIGE LE BAUME DE MINUIT", content: "Intensive Revitalizing Night Cream", price: "From $895.00" },
    { id: 11, image: "../asserts/Image/sp11.jpg", name: "DIOR PRESTIGE", content: "La Micro-Huile de Rose Advanced Serum", price: "From $238.00" },
    { id: 12, image: "../asserts/Image/sp12.jpg", name: "DIOR PRESTIGE LA CRÈME", content: "Anti-Aging Intensive Repairing Cream", price: "From $569.00" },
];

// Render sản phẩm
let cardList5 = [
    { id: 13, image: "../asserts/Image/sp13.jpg", name: "GRIS DIOR", content: "Unisex eau de parfum - chypre notes", price: "From $235.00" },
    { id: 14, image: "../asserts/Image/sp14.jpg", name: "DIORIVIER", content: "Eau de Parfum - Fig and Rose Notes", price: "From $235.00" },
    { id: 15, image: "../asserts/Image/sp15.jpg", name: "OUD ISPAHAN", content: "Oriental Fragrance", price: "From $235.00" },
];

// sản phẩm 6
let cardList6 = [
    { id: 16, image: "../asserts/Image/sp16.jpg", name: "MISS DIOR BLOOMING BOUQUET", content: "Collector's Bottle", price: "From $1,240.00" },
    { id: 17, image: "../asserts/Image/sp17.jpg", name: "LES ADORABLES SET", content: "Shimmering Scurb, Body Cream and Shimmering Gel", price: "From $437.00" },
    { id: 18, image: "../asserts/Image/sp18.jpg", name: "MISS DIOR ROSE N'ROSES", content: "Eau de toilette", price: "From $156.00" },
]
//sản phẩm 7
let cardList7 = [
    { id: 19, image: "../asserts/Image/sp19.jpg", name: "COMPLIMENTARY SHIPPING", content: "For orders over $90.00", price: "From $1,500.00" },
    { id: 20, image: "../asserts/Image/sp20.jpg", name: "PERSONALISED GIFT CARD", content: "MESSAGE", price: "From $1,120.000" },
    { id: 21, image: "../asserts/Image/sp21.jpg", name: "RECEIVE 2 COMPLIMENTARY SAMPLES", content: "On all orders", price: "From $240.00" },
];


// Gọi hàm render với các danh sách khác nhau
renderProducts(cardList1, 'product-Discover');
renderProducts(cardList2, 'product-DiscoverOne');
renderProducts(cardList3, 'product-DiscoverTwo');
renderProducts(cardList4, 'product-DiscoverThree');
renderProducts(cardList5, 'product-DiscoverFour');
renderProducts(cardList6, 'product-DiscoverFive');
renderProducts(cardList7, 'product-DiscoverSix');


// PHẦN CHATBOX
const chats = {
    "chat1": {
        name: "Mai Tram",
        image: "../asserts/Image/chat2.jpg",
        messages: [
            { sender: "friend", text: "How much perfume you sell?", time: "10:35" },
            { sender: "me", text: "Hi!", time: "10:36" },
            { sender: "friend", text: "I want to know more details.", time: "10:37" }
        ],
        unread: 0
    },
    "chat2": {
        name: "Cong Doan",
        image: "../asserts/Image/chat3.jpg",
        messages: [
            { sender: "friend", text: "Hello, excuse me!!!", time: "11:59" },
            { sender: "me", text: "Hello!", time: "12:00" },
            { sender: "friend", text: "Can you help me with something?", time: "12:01" },
            { sender: "friend", text: "I'm interested in your products.", time: "12:02" }
        ],
        unread: 2
    },
    "chat3": {
        name: "Mai Mai",
        image: "../asserts/Image/chat4.jpg",
        messages: [
            { sender: "friend", text: "Surprised", time: "00:00" },
            { sender: "me", text: "Is everything okay?", time: "00:01" },
            { sender: "friend", text: "Yes, just wanted to say hi!", time: "00:02" },
            { sender: "friend", text: "Hope you're doing well.", time: "00:03" },
            { sender: "friend", text: "Talk later!", time: "00:04" }
        ],
        unread: 3
    },
    "chat4": {
        name: "Cute",
        image: "../asserts/Image/chat5.jpg",
        messages: [
            { sender: "friend", text: "Hello", time: "00:00" },
            { sender: "me", text: "Are you okay?", time: "00:01" },
            { sender: "friend", text: "Yes, I'm fine", time: "00:02" },
            { sender: "friend", text: "Hehe", time: "00:03" },
            { sender: "friend", text: "Good luck", time: "00:04" }
        ],
        unread: 0
    },
    "chat5": {
        name: "Love",
        image: "../asserts/Image/chat6.jpg",
        messages: [
            { sender: "friend", text: "Hi", time: "00:00" },
            { sender: "me", text: "What are you doing?", time: "00:01" },
            { sender: "friend", text: "oh,...", time: "00:02" },
            { sender: "friend", text: "About you?", time: "00:03" },
            { sender: "friend", text: "Play game", time: "00:04" }
        ],
        unread: 0
    }
    // Thêm các cuộc trò chuyện khác nếu cần
};


// PHẦN CHATBOX
// Lấy các phần tử HTML bằng ID
const chatBubble = document.getElementById('chatBubble');
const container_chat = document.getElementById('container_chat');
const closeChat = document.getElementById('closeChat');
const sendMessageBtn = document.getElementById('sendMessage');
const messageInput = document.getElementById('messageInput');
const chatBox = document.getElementById('chatBox');
const chatHeaderName = document.getElementById('chatHeaderName');
const chatHeaderImage = document.getElementById('chatHeaderImage');
const chatList = document.getElementById('chatList');
let currentChatId = null; // Biến lưu ID cuộc trò chuyện hiện tại

// PHẦN CHATBOX
// Hàm lấy thời gian hiện tại ở định dạng HH:MM
function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    hours = hours < 10 ? '0' + hours : hours; // Đảm bảo giờ luôn có 2 chữ số
    minutes = minutes < 10 ? '0' + minutes : minutes; // Đảm bảo phút luôn có 2 chữ số
    return `${hours}:${minutes}`; // Trả về thời gian theo định dạng HH:MM
}

// PHẦN CHATBOX
// Hàm hiển thị các tin nhắn trong chatBox
function displayMessages(chatId) {
    const chat = chats[chatId]; // Lấy cuộc trò chuyện theo ID
    if (!chat) return; // Nếu không có cuộc trò chuyện, thoát hàm

    // Cập nhật tên và hình ảnh của người chat
    chatHeaderName.innerHTML = `${chat.name} <br><span>online</span>`;
    chatHeaderImage.src = chat.image;

    // Xóa nội dung chatBox trước khi hiển thị tin nhắn mới
    chatBox.innerHTML = '';
    chat.messages.forEach(msg => { // Duyệt qua từng tin nhắn trong cuộc trò chuyện
        const messageElement = document.createElement('div');
        messageElement.classList.add('message'); // Thêm lớp cho phần tử tin nhắn
        if (msg.sender === 'me') {
            messageElement.classList.add('my_message'); // Nếu tin nhắn của mình
        } else {
            messageElement.classList.add('frnd_message'); // Nếu tin nhắn của bạn
        }

        // Tạo phần tử chứa nội dung tin nhắn
        const messageParagraph = document.createElement('p');
        messageParagraph.innerHTML = `${msg.text}<br><span>${msg.time}</span>`; // Nội dung và thời gian

        messageElement.appendChild(messageParagraph); // Thêm nội dung vào phần tử tin nhắn
        chatBox.appendChild(messageElement); // Thêm tin nhắn vào chatBox
    });
    chatBox.scrollTop = chatBox.scrollHeight; // Cuộn xuống dưới cùng chatBox
}

// PHẦN CHATBOX
// Hàm xử lý sự kiện khi click vào khối chat
function handleChatBlockClick(event) {
    const block = event.currentTarget; // Lấy phần tử chat đã click
    const chatId = block.getAttribute('data-chat-id'); // Lấy ID của cuộc trò chuyện

    if (currentChatId === chatId) return; // Nếu cuộc trò chuyện đang mở, thoát hàm

    // Xóa lớp active khỏi tất cả các khối chat
    document.querySelectorAll('.chatlist .block').forEach(b => b.classList.remove('active'));

    block.classList.add('active'); // Thêm lớp active cho khối chat đã click
    currentChatId = chatId; // Cập nhật ID cuộc trò chuyện hiện tại

    displayMessages(chatId); // Hiển thị tin nhắn cho cuộc trò chuyện đã chọn

    // Xử lý việc đánh dấu đã đọc
    const unreadBadge = block.querySelector('b'); 
    if (unreadBadge) {
        chats[chatId].unread = 0; // Đặt số tin nhắn chưa đọc về 0
        unreadBadge.remove(); // Xóa huy hiệu số tin nhắn chưa đọc
    }
    const p = block.querySelector('.message_p p'); // Tìm phần tử hiển thị tin nhắn
    const p1 = block.querySelector('.time'); // Tìm phần tử hiển thị thời gian
    if (p) {
        p.style.fontWeight = 'normal'; // Đặt kiểu chữ bình thường
        p.style.color = 'rgb(170, 170, 170)'; // Đặt màu chữ
    }
    if (p1) {
        p1.style.fontWeight = 'normal'; 
        p1.style.color = 'rgb(17, 17, 17)';
    }
}

// PHẦN CHATBOX
// Gán sự kiện click cho tất cả các khối chat
document.querySelectorAll('.chatlist .block').forEach(block => {
    block.addEventListener('click', handleChatBlockClick);
});

// Xử lý chatbox
function handleChatbox() {
    if (userStatus) { // Kiểm tra trạng thái người dùng
        container_chat.style.display = 'flex'; // Hiển thị chat container
        chatBubble.style.display = 'none'; // Ẩn chat bubble
    } else {
        overlay2.style.display = 'block'; // Hiển thị overlay
        incluLsandsg.style.display = 'flex'; // Hiển thị form đăng nhập
        container_chat.style.display = 'none'; // Ẩn chat container
        chatBubble.style.display = 'flex'; // Hiển thị chat bubble
    }
}
chatBubble.addEventListener('click', handleChatbox); // Gán sự kiện click cho chat bubble

// PHẦN CHATBOX
const firstChatBlock = document.querySelector('.chatlist .block'); // Lấy khối chat đầu tiên
chatBubble.addEventListener('click', () => {
    container_chat.style.display = 'flex'; // Hiển thị chat container
    chatBubble.style.display = 'none'; // Ẩn chat bubble
    if (firstChatBlock) {
        firstChatBlock.style.display = 'flex'; // Hiển thị khối chat đầu tiên
        firstChatBlock.click(); // Mô phỏng click vào khối chat đầu tiên
    }
});

// Xử lý sự kiện click nút đóng chat
closeChat.addEventListener('click', () => {
    container_chat.style.display = 'none'; // Ẩn chat container
    chatBubble.style.display = 'flex'; // Hiển thị lại chat bubble
});

// Xử lý gửi tin nhắn
sendMessageBtn.addEventListener('click', () => {
    if (!currentChatId) {
        alert("Please select a chat first!"); // Nếu chưa chọn chat, hiển thị thông báo
        return;
    }

    const messageText = messageInput.value.trim(); // Lấy nội dung tin nhắn
    if (messageText !== '') { // Nếu nội dung không rỗng
        const currentTime = getCurrentTime(); // Lấy thời gian hiện tại
        const messageElement = document.createElement('div'); // Tạo phần tử chứa tin nhắn
        messageElement.classList.add('message', 'my_message'); // Thêm lớp cho tin nhắn của mình
        const messageParagraph = document.createElement('p'); // Tạo phần tử chứa nội dung tin nhắn
        messageParagraph.innerHTML = `${messageText}<br><span>${currentTime}</span>`; // Nội dung và thời gian
        messageElement.appendChild(messageParagraph); // Thêm nội dung vào phần tử tin nhắn
        chatBox.appendChild(messageElement); // Thêm tin nhắn vào chatBox
        chats[currentChatId].messages.push({ // Lưu tin nhắn vào đối tượng chats
            sender: 'me',
            text: messageText,
            time: currentTime
        });
        chatBox.scrollTop = chatBox.scrollHeight; // Cuộn xuống dưới cùng chatBox
        messageInput.value = ''; // Xóa nội dung input
    }
});

// Xử lý nhấn phím Enter để gửi tin nhắn
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessageBtn.click(); // Gọi sự kiện click của nút gửi
    }
});

// Tìm kiếm chat
const searchInput = document.getElementById('search-input');
const chatBlocks = document.querySelectorAll('.block'); // Lấy tất cả các khối chat

searchInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') { // Nếu nhấn Enter
        const searchTerm = searchInput.value.toLowerCase(); // Lấy từ khóa tìm kiếm
        chatBlocks.forEach(chatBlock => {
            chatBlock.style.display = 'flex'; // Hiển thị tất cả các khối chat
        });
        let found = false; // Biến kiểm tra có tìm thấy hay không
        chatBlocks.forEach(chatBlock => {
            const title = chatBlock.querySelector('h4').textContent.toLowerCase(); // Lấy tiêu đề chat
            if (title.includes(searchTerm)) {
                found = true; // Nếu tìm thấy, đánh dấu là tìm thấy
            } else {
                chatBlock.style.display = 'none'; // Nếu không tìm thấy, ẩn khối chat
            }
        });

        if (!found) {
            alert('Không tìm thấy chat nào phù hợp.'); // Thông báo nếu không tìm thấy chat nào
        }
        searchInput.value = ''; // Xóa nội dung input tìm kiếm
    }
});

// Xử lý gửi hình ảnh
const attachIcon = document.getElementById('attachIcon');
const fileInput = document.getElementById('fileInput');

// Hàm gửi hình ảnh
function sendImage(file) {
    const reader = new FileReader(); // Tạo đối tượng FileReader
    reader.onload = function (event) {
        const imageDataUrl = event.target.result; // Lấy dữ liệu hình ảnh
        const currentTime = getCurrentTime(); // Lấy thời gian hiện tại
        const message = {
            sender: 'me',
            type: 'image',
            content: imageDataUrl,
            time: currentTime
        };
        if (currentChatId) {
            chats[currentChatId].messages.push(message); // Lưu tin nhắn hình ảnh vào đối tượng chats
        }

        const messageElement = document.createElement('div'); // Tạo phần tử chứa tin nhắn hình ảnh
        messageElement.classList.add('message', 'my_message'); // Thêm lớp cho tin nhắn của mình

        const messageContent = document.createElement('p'); // Tạo phần tử chứa nội dung tin nhắn
        if (message.type === 'image') { // Nếu tin nhắn là hình ảnh
            const img = document.createElement('img'); // Tạo phần tử hình ảnh
            img.src = message.content; // Gán đường dẫn hình ảnh
            img.alt = 'Sent Image'; // Gán thuộc tính alt
            img.style.maxWidth = '200px'; // Đặt chiều rộng tối đa
            img.style.borderRadius = '10px'; // Đặt bo góc cho hình ảnh
            messageContent.appendChild(img); // Thêm hình ảnh vào nội dung tin nhắn
        } else {
            messageContent.innerHTML = `${message.text}<br><span>${message.time}</span>`; // Nội dung tin nhắn
        }
        if (message.type !== 'image') { // Nếu không phải hình ảnh
            const timeSpan = document.createElement('span'); // Tạo phần tử chứa thời gian
            timeSpan.textContent = message.time; // Gán thời gian
            messageContent.appendChild(timeSpan); // Thêm thời gian vào nội dung
        }

        messageElement.appendChild(messageContent); // Thêm nội dung vào phần tử tin nhắn
        chatBox.appendChild(messageElement); // Thêm tin nhắn vào chatBox
        chatBox.scrollTop = chatBox.scrollHeight; // Cuộn xuống dưới cùng chatBox
    };

    reader.readAsDataURL(file); // Đọc file hình ảnh
}

// Xử lý sự kiện click vào icon đính kèm
attachIcon.addEventListener('click', () => {
    fileInput.click(); // Mô phỏng click vào input file
});

// Xử lý sự kiện thay đổi file input
fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0]; // Lấy file đầu tiên từ input
    if (file && file.type.startsWith('image/')) { // Kiểm tra nếu là file hình ảnh
        sendImage(file); // Gọi hàm gửi hình ảnh
    } else {
        alert('Please select a valid image file.'); // Thông báo nếu không phải hình ảnh
    }
    fileInput.value = ''; // Xóa nội dung input file
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

// PHẦN HOT SEARCH
 function search() {
    const query = document.getElementById('header-input').value; 
    const searchUrl = `search-result.html?q=${encodeURIComponent(query)}`; 
    window.location.href = searchUrl; 
}
function showOverlay() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('search').style.display = 'block'; 
}
function hideOverlay() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('search').style.display = 'none'; 
}

const headerInput = document.getElementById('header-input');
headerInput.addEventListener('focus', showOverlay);
headerInput.addEventListener('click', showOverlay);

const overlay1 = document.getElementById('overlay');
overlay1.addEventListener('click', hideOverlay);

document.addEventListener('DOMContentLoaded', function() {
    hideOverlay();
});

// Tìm kiếm sản phẩm
const results = document.getElementById('results');
const products = JSON.parse(localStorage.getItem("cardList")) || [];
const inputSearch = document.getElementById('header-input');

document.addEventListener('click', function (event) {
    if (!results.contains(event.target) && event.target.id !== 'header-input') {
        results.style.display = 'none';
        document.getElementById('search').style.zIndex = "1001";
    }
});

inputSearch.addEventListener('keydown', function () {
    document.getElementById('search').style.zIndex = "999";
});

inputSearch.addEventListener('input', function () {
    const query = this.value.toLowerCase();
    results.innerHTML = ''; // Xóa kết quả trước đó
    results.style.display = 'block';
    const filteredData = products.filter(item => item.name.toLowerCase().includes(query));

    filteredData.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.name;
        li.addEventListener('click', function () {
            inputSearch.value = item.name; // Đặt giá trị ô input thành tên sản phẩm
            results.innerHTML = ''; // Xóa kết quả sau khi chọn
        });
        results.appendChild(li);
    });
});
// Hàm tìm kiếm sản phẩm
function searchProduct() {
    const dataInput = inputSearch.value;
    const result = products.find(item => item.name.toLowerCase() === dataInput.toLowerCase());

    if (!result) {
        alert("Not found");
        return;
    }

    const mainResult = products.filter(item => item.category === result.category);
    mainResult[0] = result;

    if (mainResult.length > 0) {
        localStorage.setItem('searchResults', JSON.stringify(mainResult));
        window.location.href = "../../pages/search.html";
    }
}
