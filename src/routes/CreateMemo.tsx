import EditorPanel from "../component/EditorPanel";
import UserPanel from "../component/UserPanel";

export default function CreateMemo(){
  return (
    <div>
      <UserPanel/>
      <h1 style={{display:"block", width:"90%", margin:"30px auto 0"}}>새 메모</h1>
      <EditorPanel/>
      <button type="button">이전으로</button>
      <button type="button">새 메모 등록</button>
    </div>
  );
}