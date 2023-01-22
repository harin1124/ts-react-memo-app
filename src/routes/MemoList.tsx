import {useEffect, useState} from "react";

export default function MemoList() {
  const [memos, setMemo] = useState([]);
  const getMemos = () => {
    const userId = localStorage.loginUserId;
    fetch(`/memo/list/${userId}`, {method: "GET"})
    .then(response => response.json())
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