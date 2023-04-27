import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import styles from "../styleModule/login.module.css";
import { jwtTokenParse } from "../common/CommonJwt";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");

  /**
   * 이전 화면에서 오류 발생한 경우, 메시지 표시
   */
  useEffect(() => {
    // TODO 에러 메시지 표현의 더 나은 방식 검토
    if(location.state !== null){
      alert(location.state);
      location.state = null;
    }
  });

  /**
   * 유저 아이디 변경 이벤트
   * @param event 입력 이벤트
   */
  const userIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target != null){
      setUserId(event.target.value);
    }
  }

  /**
   * 유저 비밀번호 변경 이벤트
   * @param event 입력 이벤트
   */
  const userPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target != null){
      setUserPassword(event.target.value);
    }
  }

  /**
   * 로그인 실행
   */
  const actionLogin = () => {
    fetch("/login", {
        method: "POST",
        body: JSON.stringify({userId: userId, password: userPassword})
      }
    )
    .then(response => {
      const authToken = response.headers.get("authorization");
      if(authToken == null){
        alert("로그인에 실패하였습니다.");
      } else {
        localStorage.setItem("token", authToken.replace("Bearer ", ""));
        localStorage.setItem("userId", jwtTokenParse(authToken).username);
        navigate("/memoList"); // 메모 목록으로 이동
      }
    })
    .catch(error => {
      console.log(error);
    });
  }

  return (
    <div className={styles.loginBox}>
      <div className={styles.loginPanel}>
        <h1>HR Memo</h1>
        <div className={styles.loginArea}>
          <div>
            <input type="text" id="userId" value={userId}
              onChange={userIdChange}
              placeholder="아이디를 입력해주세요."/>
            <input type="password" id="userPassword" value={userPassword}
              onChange={userPasswordChange}
              placeholder="비밀번호를 입력해주세요."/>
          </div>
          <button type="button" onClick={actionLogin}>로그인</button>
        </div>
        <div className={styles.link}>
          <Link to="/join">
            <button type="button">회원가입하러 가기</button>
          </Link>
        </div>
      </div>
    </div>
  );
}