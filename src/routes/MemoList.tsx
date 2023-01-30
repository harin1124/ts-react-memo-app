import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

export default function MemoList() {
  let navigate = useNavigate();

  // 유저 정보 없을 경우 로그인 화면으로 이동
  useEffect(() => {
    const userId = localStorage.loginUserId;
    if(userId === null || userId === undefined || userId === ""){
      navigate("/login");
    }
  });

  const [memos, setMemo] = useState([]);
  const getMemos = () => {
    const userId = localStorage.loginUserId;
    fetch(`/memo/list/${userId}`, {method: "GET"})
    //.then(response => response.json())
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  }

  useEffect(() => {
    getMemos();
  }, []);

  return (
    <div>
      메모 목록. 메모 컴포넌트 띄우기
    </div>
  );
}