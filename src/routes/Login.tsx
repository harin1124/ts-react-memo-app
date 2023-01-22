import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const userIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target != null){
      setUserId(event.target.value);
    }
  }

  const userPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target != null){
      setUserPassword(event.target.value);
    }
  }

  // 로그인
  const actionLogin = () => {
    fetch("/user/login", {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({userId, userPassword})
      }
    )
    .then(response => response.json())
    .then(response => {
      console.log(response);
      if(response.userId === null || response.userId === ""){
        // 로그인 실패
        alert("로그인에 실패하였습니다.");
      } else {
        // 로그인 성공
        localStorage.setItem("loginUserId", response.userId);
      }
    })
    .catch(error => {
      console.log(error);
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
        <Link to="/join">
          <button type="button">회원가입하러 가기</button>
        </Link>
      </div>
    </div>
  );
}