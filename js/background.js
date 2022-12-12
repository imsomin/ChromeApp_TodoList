const images = [
    "sea1.jpg", "sea2.jpg", "sea3.jpg"
];

//이미지 랜덤으로 뽑아내기
const chosenImage = images[Math.floor(Math.random() * images.length)];


//Javascript에서 html element를 생성하기
const bgImg = document.createElement("img");
bgImg.src = `img/${chosenImage}`;  //src = source


//bgImg를 body 내부에 추가하기
document.body.appendChild(bgImg);

bgImg.id = "bgImg";