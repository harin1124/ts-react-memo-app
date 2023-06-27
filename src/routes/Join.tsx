import {useState} from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Join() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userIdDupCheck, setUserIdDupCheck] = useState(false);

  const userIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target != null){
      setUserId(event.target.value);
      setUserIdDupCheck(false);
    }
  }

  const userPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target != null){
      setUserPassword(event.target.value);
    }
  }

  /**
   * 아이디 중복 검사
   */
  const actionUserIdDupCheck = () => {
    fetch(`/use/${userId}`)
    .then(response => response.json())
    .then(response => {
      let isUseUserId = response;
      if(isUseUserId){
        setUserIdDupCheck(false);
        setUserId("");
        alert("해당 아이디는 중복 됩니다. 다른 아이디로 다시 시도하세요.");
      } else {
        setUserIdDupCheck(true);
        alert("해당 아이디는 사용 가능합니다.");
      }
    })
    .catch(error => {
      console.log(error);
    })
  }

  /**
   * 회원가입 수행
   */
  const actionJoin = ():boolean|undefined => {
    if(!userIdDupCheck){
      alert("아이디 중복 검사를 해주세요.");
      return false;
    }
    fetch(
      "/join",
      {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({userId: userId, password: userPassword})
      }
    )
    .then(response => response.json())
    .then(response => {
      if(response.stat === "success"){
        alert("정상적으로 회원가입이 되었습니다.");
        navigate("/login");
      } else {
        alert("회원가입에 실패하였습니다.");
        setUserId("");
        setUserPassword("");
      }
    });
  }

  return (
    <div>
      <div>
        <input type="text" id="userId" value={userId} onChange={userIdChange} placeholder="아이디를 입력해주세요."/>
        <button type="button" onClick={actionUserIdDupCheck}>아이디 중복 검사</button>
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