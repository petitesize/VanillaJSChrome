const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function onLoginBtnClick() {
  const username = loginInput.value; //로그인 input창의 값
  console.log(username);
}

loginButton.addEventListener("click", onLoginBtnClick);
