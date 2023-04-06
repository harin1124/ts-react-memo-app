import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MemoPanel from "../component/MemoPanel";

export default function MemoList() {
  let navigate = useNavigate();

  // 유저 정보 없을 경우 로그인 화면으로 이동
  useEffect(() => {
    const userId = localStorage.loginUserId;
    if(userId === null || userId === undefined || userId === ""){
      navigate("/login");
    }
  });

  const [memos, setMemo] = useState<any[]>([]);
  const getMemos = async() => {
    const userId = localStorage.loginUserId;
    const response = await fetch(`/memo/list/${userId}`, {method: "GET"})
      .catch(error => {
        console.log(error);
      }
    );
    let json = (response instanceof Response) ? await response.json() : [];
    setMemo(json);
    
  }

  useEffect(() => {
    getMemos();
  }, []);

  return (
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
  );
}