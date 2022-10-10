import {useState} from "react";
import { Link } from "react-router-dom";

export default function Join() {
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

  // 회원가입
  const actionJoin = () => {
    fetch(
      "api url",
      {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({userId: userId, userPassword: userPassword})
      }
    )
    .then(response => response.json())
    .then(response => {
      console.log("fetch 끝")
    });
  }


  return (
    <div>
      <div>
        <input type="text" id="userId" value={userId} onChange={userIdChange} placeholder="아이디를 입력해주세요."/>
        <button type="button">아이디 중복 검사</button>
        <br/>
        <input type="password" id="userPassword" value={userPassword} onChange={userPasswordChange} placeholder="비밀번호를 입력해주세요."/>
        <br/>
        <button type="button" onClick={actionJoin}>회원가입</button>
        <Link to="/login">
          <button type="button">로그인하러 가기</button>
        </Link>
      </div>
    </div>
  );
}