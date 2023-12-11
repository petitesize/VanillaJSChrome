const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];
//toDos는 계속 업데이트되어야 하기 때문에 let으로 선언

function saveToDos() {
  //localStorage에는 text만 저장되기 때문에 array를 String으로 바꿔준다.
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = newTodo;
  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  toDos.push(newTodo);
  paintToDo(newTodo);
  //Input에 입력한 값을 newTodo에 저장해서 paintToDo에 전달
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  //local에 저장된 Todo가 있을 때,
  const parsedToDos = JSON.parse(savedToDos);
  // local에 String으로 array가 저장되어 있기 때문에 다시 array로 변환
  toDos = parsedToDos;
  /*
  이미 저장되어 있는 todo를 toDos에 옮겨줌으로서
  새로고침 후 새로운 todo를 입력해도 toDos 배열이 초기화되어 덮어씌어지지 않는다!
  toDos 배열을 기준으로 local에 저장되기 때문에,
  이 코드가 없으면 새로고침을 할 때마다 toDos가 다시 선언([]) 되어 새로운 todo 입력 시, 빈 배열에 push하게 됨
  */
  parsedToDos.forEach(paintToDo);
  // 이렇게 local에 저장된 todo를 paint해줌
}
