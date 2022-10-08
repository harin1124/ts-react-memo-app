import {useState} from "react";

export default function Login() {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const userIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target != null){
      console.log(event.target.value);
      setUserId(event.target.value);
      // 밸리데이션도 해보자
    }
  }

  const userPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target != null){
      console.log(event.target.value);
      setUserPassword(event.target.value);
      // 밸리데이션 추가 에정
    }
  }

  // 로그인
  const actionLogin = () => {
    // 로그인 검증을 여기서 할지?
    // 비동기 통신이 이루어질 곳
    fetch(
      "api url",
      {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({userId: userId, userPassword: userPassword})
      }
    )
    .then(response => response.json()) // 샘플데이터로 테스트 해보자
    .then(response => {
      console.log("fetch 끝")
    });
    
    
  }

  return (
    <div>
      <div>
        <input type="text" id="userId" value={userId} onChange={userIdChange} placeholder="아이디를 입력해주세요."/>
        <br/>
        <input type="password" id="userPassword" value={userPassword} onChange={userPasswordChange} placeholder="비밀번호를 입력해주세요."/>
        <br/>
        <button type="button" onClick={actionLogin}>로그인</button>
      </div>
    </div>
  );
}