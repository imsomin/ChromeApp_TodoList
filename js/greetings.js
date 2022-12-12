const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

/*로그인 버튼 클릭 함수*/
function onLoginBtnClick() {
    const userName = loginInput.value;

   console.log(userName);
}

const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

const USERNAME_KEY = "userName";


/*로그인 정보 전달 함수*/
function onLoginSubmit(event){
    event.preventDefault();  //기본 동작 막기
   
    loginForm.classList.add(HIDDEN_CLASSNAME);  
    //form은 사라지지만 입력값은 console에 기록됨

    const userName = loginInput.value;

    //다른 HTML 요소(h1) 추가하기
    //기본 동작은 실행되지 않도록 막아주고
    //hidden 이라는 class name을 더해줘서 form을 숨기고
    //유저의 이름은 변수로 저장해주고 그 이름은 h1 안에 넣는다

    //h1 안에다 greeting에 있는 텍스트를 추가하기 
    paintGreetings(userName);   

    localStorage.setItem(USERNAME_KEY, userName);

}


/*로그인 시 작동 함수*/
//argument로 userName(사용자가 입력한 값)을 가져옴
function paintGreetings(userName){   
    greeting.innerText = `Hello😀 ${userName}! 
    What are your plans for today? `;
    
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


const saveUserName = localStorage.getItem(USERNAME_KEY);

//local storage가 비어있으면 form부터 보여주면서 진행하기
//local storage에 유저 정보가 있으면 form을 보여주면 안됨, h1(greeting)을 보여줘야 함
if(saveUserName === null){
  
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);

}else {

    paintGreetings(saveUserName);  
}


const link = document.querySelector("a");

function handleLinkClick(event){
    event.preventDefault();
    console.dir(event); 
    
    alert("clicked");
}
