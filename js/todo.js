const toDoForm = document.getElementById("todo-form");

const toDoInput = toDoForm.querySelector("input");

const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = []; 
//paintToDo가 그려질 때마다 그 값을 toDos array에 push 하고 싶음

/*toDos array의 내용을 localStorage에 넣기*/
function saveToDos(){  
    localStorage.setItem("todos", JSON.stringify(toDos));
}

/*할일 목록 작성하기*/
function paintToDo(newTodo){
 
    const li = document.createElement("li");
    li.id = newTodo.id;  
    const span = document.createElement("span");
    span.innerText = newTodo.text; 

    //저장하고 삭제하는 작업 추가하기
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo);
    
    li.appendChild(span); 
    li.appendChild(button);
    
    //할일 목록 화면에 출력되도록 하기
    toDoList.appendChild(li);
}



/*할일 목록 삭제하기*/
function deleteTodo(event){

    const li = event.target.parentElement;
    li.remove();
    
    //우리가 클릭한 li.id와 다른 toDos는 남겨둘 것
    toDos = toDos.filter((toDo) => toDo.id != parseInt(li.id));

    //다시 저장하기
    saveToDos(); 
}


/*할일 목록 전달하기*/
function handleToDoSubmit(event){
   event.preventDefault();
   
   const newTodo = toDoInput.value;
   toDoInput.value = "";
   //toDoInput의 값을 비웠다고 해서 newTodo의 값이 비워지는 것은 아니다
  
   //입력된 할일목록에 대해서 랜덤의 id값을 정해서 넣어주기
   const newTodoObj = {
        text: newTodo,
        id: Date.now(),  
   };


   toDos.push(newTodoObj);
 

   paintToDo(newTodoObj); //newTodo를 paintTodo에 넣어서 호출한다
   saveToDos(); //입력된 newTodo를 저장한다
}

toDoForm.addEventListener("submit", handleToDoSubmit);


//localStorage에서 toDos를 가져오기
const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);



function sayHello(item){
    console.log("this is the turn of ", item);
}


if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    //Javascript는 array에 있는 각각의 item에 대해서 function을 실행하도록 해준다
    
    toDos = parsedToDos; 


    parsedToDos.forEach(paintToDo);
    //paintToDo 는 텍스트(newTodo)를 받고
    //Javascript는 그 텍스트를 paintToDo에게 전달해준다
}