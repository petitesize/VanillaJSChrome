const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

//string만 포함된 변수는 대문자로
const HIDDEN_CLASSNAME = "hidden";

const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME); //loginForm에 hidden 클래스 추가
  greeting.innerText = `Hello ${username}`;
  localStorage.setItem("username", username);
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
