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
