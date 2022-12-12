const clock = document.querySelector("h2#clock");


function sayHello() {
    console.log("hello");
}

/*시간 출력하기*/
function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}


getClock(); 
//없을경우 00:00:00 이 먼저 나왔다가 시계 출력
//결국 우리가 해야하는 것은 매 초 getClock()을 실행하는 것


setInterval(getClock, 1000);
//function을 계속해서 호출하는 건 setInterval()이 할 일
//이는 곧 마치 이 시계가 실시간인 것처럼 한다
//매 초마다 새로운 Date object를 만드는 작업
//new Date object는 현재 날짜, 시간, 분, 초에 대한 정보를 가지고 있다

//padStart()
//해당 문자열의 길이가 부족하다면
//주어진 문자로 채워서 길이를 충족시켜라