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



function runCredit() {
    var backgroundMusic = new Audio('mr.mp3');
    backgroundMusic.volume = 0.5;
    backgroundMusic.loop = true;
    backgroundMusic.play();
    var endingContainer = document.getElementById('ending-container');
    var creditContainer = document.getElementById('credit-container');
    var creditContent = document.getElementById('credit-content');


    document.getElementById('image-container').style.display = 'none';
    endingContainer.style.display = 'none';
    creditContainer.style.display = 'block';

    var creditContentHeight = creditContent.offsetHeight;


    creditContent.style.transform = 'translateY(100%)';
    creditContent.style.transition = 'transform 30s linear';

    var scrollAmount = creditContentHeight / 10;


    creditContent.style.transform = 'translateY(' + (-creditContentHeight) + 'px)';
    creditContent.style.transition = 'transform 19s linear';


    setTimeout(function () {
        creditContent.style.transform = 'translateY(0)';
        creditContent.style.transition = 'none';


        creditContainer.style.display = 'none';

        document.getElementById('game-container').style.display = 'block';
    }, 19000);
}
function showCrushGuess() {


    document.getElementById('result').innerText = 'Em đoán đúng rồi';
    document.getElementById('showbtn').style.display = 'none';
    document.getElementById('userGuess').style.display = 'none';
    setTimeout(function () {
        document.getElementById('result-after').innerText = '🎵 ~';
        createSnowflake();
        setTimeout(hideElementsAndShowRose, 5000);
    }, 1000);



    document.getElementById('answer').innerHTML = 'Đáp án: Số phu thê';
    document.getElementById('answer').style.color = 'green';

    return false;
}


function createSnowflake() {
    const snowfallContainer = document.getElementById('snowfall-container');

    for (let i = 0; i < 100; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.style.left = `${Math.random() * 100}vw`; // Random vị trí trái
        snowflake.style.animationDuration = `${Math.random() * 2 + 1}s`; // Random thời gian rơi
        snowfallContainer.appendChild(snowflake);
    }
}

function hideElementsAndShowRose() {
    // Ẩn các phần tử khác
    document.getElementById('result').style.display = 'none';
    document.getElementById('result-after').style.display = 'none';
    document.getElementById('userGuess').style.display = 'none';
    document.getElementById('showbtn').style.display = 'none';
    document.getElementById('doanso').style.display = 'none';
    document.getElementById('answer').style.display = 'none';
    document.body.style.backgroundImage = 'url(cloud.jpg)';    // Hiển thị bông hoa hồng và âm nhạc nền
    document.getElementById('rose').style.display = 'block';
    document.getElementById('fu').style.display = 'block';
}
