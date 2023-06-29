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
      navigate("/login", {state: null});
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
   * @description 로그인 실행
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
        const loginFailReson:string = response.headers.get("Login-Fail") || "";
        throw new Error(loginFailReson);
      } else {
        localStorage.setItem("token", authToken);
        localStorage.setItem("userId", jwtTokenParse(authToken).username);
        navigate("/memoList"); // 메모 목록으로 이동
      }
    })
    .catch(error => {
      const msg:string = error.message;
      switch(msg){
        case "NOT_USER":
          alert("등록된 유저가 아닙니다.\n회원가입을 진행해주세요.");
          break;
      }
    });
  }

  return (
    <div className={styles.loginBox}>
      <div className={styles.loginPanel}>
        <h1>HR Memo</h1>
        <form>
          <div className={styles.loginArea}>
            <div>
              <input type="text" id="userId" value={userId}
                onChange={userIdChange}
                placeholder="아이디를 입력해주세요."
                autoComplete="off"/>
              <input type="password" id="userPassword" value={userPassword}
                onChange={userPasswordChange}
                placeholder="비밀번호를 입력해주세요."
                autoComplete="off"/>
            </div>
            <button type="button" onClick={actionLogin}>로그인</button>
          </div>
        </form>
        <div className={styles.link}>
          <Link to="/join">
            <button type="button">회원가입하러 가기</button>
          </Link>
        </div>
      </div>
    </div>
  );
}