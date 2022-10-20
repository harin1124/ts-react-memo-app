import {useState} from "react";
import { Link } from "react-router-dom";

export default function Join() {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [useUserId, setUseUserId] = useState(false);

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

  // 아이디 중복 검사
  const actionUserIdDupCheck = async () => {
    const jsonResult = await(await fetch(`/user/use/${userId}`)).json();
    console.log(jsonResult);
    if(jsonResult.isUseUserId){
      setUseUserId(true);
      alert("해당 아이디는 사용 가능합니다.");
    } else {
      setUseUserId(false);
      setUserId("");
      alert("해당 아이디는 중복 됩니다. 다른 아이디로 다시 시도하세요.");
    }
  }

  // 회원가입
  const actionJoin = () => {
    if(!useUserId){
      alert("아이디 중복 검사를 해주세요.");
      return false;
    }
    fetch(
      "/user",
      {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({userId: userId, userPassword: userPassword})
      }
    )
    .then(response => response.json())
    .then(response => {
      console.log("fetch 끝")
      console.log(response);
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