import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../styleModule/login.module.css";

export default function Login() {
  let navigate = useNavigate();

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
      if(response.userId === null || response.userId === ""){
        alert("로그인에 실패하였습니다.");
      } else {
        console.log(response);
        if(response.userId !== undefined && response.userId !== ""){
          localStorage.setItem("loginUserId", response.userId);
          navigate("/memoList");
        }
      }
    })
    .catch(error => {
      console.log(error);
    });
  }

  return (
    <>
      <div className={styles.loginPanel}>
        <h1>HR Memo</h1>
        <div className={styles.loginArea}>
          <div>
            <input type="text" id="userId" value={userId} onChange={userIdChange} placeholder="아이디를 입력해주세요."/>
            <input type="password" id="userPassword" value={userPassword} onChange={userPasswordChange} placeholder="비밀번호를 입력해주세요."/>
          </div>
          <button type="button" onClick={actionLogin}>로그인</button>
        </div>
        <div className={styles.link}>
          <Link to="/join">
            <button type="button">회원가입하러 가기</button>
          </Link>
        </div>
      </div>
    </>
  );
}