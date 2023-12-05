const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

//string만 포함된 변수는 대문자로
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME); //loginForm에 hidden 클래스 추가
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  //유저 정보가 없으면, login form의 hidden class를 없애주어 form을 보여준다
  //유저 정보를 입력해야 하기 때문에
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // greetings를 보여준다
  paintGreetings(savedUsername);
}
