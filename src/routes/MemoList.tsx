import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MemoPanel from "../component/MemoPanel";
import UserPanel from "../component/UserPanel";
import MemoAddButton from "../component/MemoAddButton";

export default function MemoList() {
  let navigate = useNavigate();

  // 유저 정보 없을 경우 로그인 화면으로 이동
  useEffect(() => {
    const userId = localStorage.userId;
    if(userId === null || userId === undefined || userId === ""){
      navigate("/login", {state: "인증 과정 중 에러 발생하였습니다.\n로그인 화면으로 이동합니다."});
    }
  });

  const [memos, setMemo] = useState<any[]>([]);
  const getMemos = async() => {
    const userId = localStorage.userId;
    const response = await fetch(`/memo/list/${userId}`, {method: "GET"})
      .catch(error => {
        console.log(error);
      }
    );
    let json = (response instanceof Response) ? await response.json() : [];
    setMemo({... json});
  }

  useEffect(() => {
    getMemos();
  }, []);

  return (
    <div>
      <UserPanel/>
      <div>
        {memos.map((memo) =>
          <MemoPanel
            key={memo}
            title={memo.title}
            reg_date={memo.regDate}
            edit_date={memo.editDate}
          />
        )}
      </div>
      <MemoAddButton/>
    </div>
  );
}