function showOptions(option) {
    if (option === 'yes') {
        document.getElementById('question-container').style.display = 'none';
        document.getElementById('options-container').style.display = 'block';
    }
}

function hideButton() {
    var noButton = document.getElementById('noButton');
    var yesButton = document.querySelector('.option-button');
    noButton.style.display = 'none';
    yesButton.innerHTML = 'Phải có 😀';
}

function showImages() {
    document.getElementById('options-container').style.display = 'none';
    document.getElementById('image-container').style.display = 'block';
}

function flipCard(card) {
    card.style.transform = 'rotateX(180deg)';
}

// Thêm vào phần cuối của file script.js

function runCredit() {
    var endingContainer = document.getElementById('ending-container');
    var creditContainer = document.getElementById('credit-container');
    var creditContent = document.getElementById('credit-content');

    // Ẩn phần hình ảnh và hiển thị phần credit
    document.getElementById('image-container').style.display = 'none';
    endingContainer.style.display = 'none';
    creditContainer.style.display = 'block';

    // Lấy chiều cao của nội dung credit
    var creditContentHeight = creditContent.offsetHeight;

    // Chạy dòng credit từ dưới đáy lên
    creditContent.style.transform = 'translateY(100%)';
    creditContent.style.transition = 'transform 30s linear';
    // Đặt giá trị scroll amount sao cho credit chạy hết chiều cao của nội dung
    var scrollAmount = creditContentHeight / 10; // Có thể điều chỉnh theo ý muốn

    // Chạy dòng credit từ dưới lên
    creditContent.style.transform = 'translateY(' + (-creditContentHeight) + 'px)';
    creditContent.style.transition = 'transform 15s linear';

    // Khi credit chạy xong, thực hiện hành động tiếp theo
    setTimeout(function () {
        creditContent.style.transform = 'translateY(0)';
        creditContent.style.transition = 'none';

        // Thêm các dòng credit khác nếu cần

        // Ẩn phần credit và hiển thị phần tiếp theo sau credit
        creditContainer.style.display = 'none';
        // Hiển thị phần tiếp theo sau credit (nếu có)
        document.getElementById('game-container').style.display = 'block';
    }, 1000); // Đổi giá trị này tùy vào thời gian chạy của credit
}
function showCrushGuess() {
    document.getElementById('result').innerText = 'Số phu thê chứ gì mà phải đoán :))';
    setTimeout(function () {
        document.getElementById('result-after').innerText = 'Đợi 3s nha...';
    }, 2000);

    setTimeout(function () {
        window.location.href = 'https://www.youtube.com/watch?v=jV5j5iKIL8s';
    }, 6000);
}