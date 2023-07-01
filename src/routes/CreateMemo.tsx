import { useNavigate } from "react-router-dom";
import EditorPanel from "../component/EditorPanel";
import UserPanel from "../component/UserPanel";

export default function CreateMemo(){
  const navigate = useNavigate();

  /**
   * 메모 등록
   */
  const actionMemoCreate = async() => {
    if(!window.confirm("메모를 등록하시겠습니까?")){
      return false;
    }

    const userId = localStorage.userId;
    const token = localStorage.getItem("token") || "";
    fetch(`/memo/${userId}`,
      {
        method: "POST",
        headers: new Headers({Authorization: token})
      })
      //.then(response => respo)
      .then(response => {

        console.log("응답결과 : ", response.body);
      // })
      })
      .catch(error => {
        console.log(error);
      }
    );
  }

  return (
    <div>
      <UserPanel/>
      <h1 style={{display:"block", width:"90%", margin:"30px auto 0"}}>새 메모</h1>
      <EditorPanel/>
      <button type="button" onClick={() => navigate(-1)}>이전으로</button>
      <button type="button" onClick={actionMemoCreate}>새 메모 등록</button>
    </div>
  );
}