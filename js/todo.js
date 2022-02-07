const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");
const TODOS_KEY = "todos";
let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event){
    const li = event.target.parentElement;
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    li.remove();
    saveToDos();
}

function paintToDo(newToDo){
    const li = document.createElement("li");
    li.id = newToDo.id;
    const button = document.createElement("button");
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    button.innerText = "✔";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value="";
    const newToDoObj = {
        text: newToDo, 
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    saveToDos();
    paintToDo(newToDoObj);
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const saveToDo = localStorage.getItem(TODOS_KEY);

if (saveToDo !== null){
    const parsedToDos = JSON.parse(saveToDo);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}


