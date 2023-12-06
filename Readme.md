### 1. css를 html에 연결

head에 다음을 작성

```
<link rel="stylesheet" href="파일이름.css" />
```

### 2. 로그인

input의 유효성 검사를 작동시키기 위해서 input은 form 안에 있어야한다.
input의 유효성 검사

- required
- maxlength=""

### 3. form의 submit

input 안의 button을 클릭하거나, type이 submit인 input을 클릭하면 작성한 form이 submit

- 따라서 click에 집중할 필요가 없다!
- 대신 submit할 때 웹사이트가 새로고침 된다. : 내가 바라는게 아님!
- arg.preventDefault : 브라우저의 기본 동작을 막아줌 (여기에선 submit)

```
loginForm.addEventListener("submit", onLoginSubmit);
```

- submit event 발생
- onLoginSubmit 호출
- event object(해당 이벤트에서 일어난 정보를 담은 객체)를 argument로 준다
- preventDefault에서 기본 동작인 submit 후 새로고침을 막아줌

### 4. classList.add / classList.remove

```
function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME); //loginForm에 hidden 클래스 추가
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
```

- submit 할 때 classList.add로 hidden 클래스를 주어 loginForm을 hidden
- 그 후, classList.remove로 h1#grerting가 가지고 있는 hidden 클래스를 삭제하여 h1이 나타나게 한다.

### 5. "hidden"의 반복 사용

```
function onLoginSubmit(event) {
   ...
 loginForm.classList.add("hidden");

 greeting.classList.remove("hidden");
```

- 반복 사용되는 "hidden"을 변수 선언
- string만 가지고 있는 변수를 선언할 때에는 변수명을 대문자로 선언해보자.(snake)

```
const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
    ...
  loginForm.classList.add(HIDDEN_CLASSNAME);

  greeting.classList.remove(HIDDEN_CLASSNAME);

```

### 6. 입력한 username 저장

```
localStorage.setItem("username", username);
```

- key: "username", value: 입력한 username을 localStorage에 저장
- localStorage는 개발자 도구 - Application에서 볼 수 있다

### 7. setInvterval(func,time)

- func을 time마다 호출한다.

### 8. padStart(number,string);

```
"1".padStart(2,"0");
```

- -> "01"
- "1" 문자열의 길이가 2가 되도록 "0"을 문자열 앞에 넣는다
- 끝에 넣기 위해서는 padEnd() 사용
