import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Index() {
  let navigate = useNavigate();

  useEffect(() => {
    // TODO : 정상적인 토큰 여부 값 확인
    const token = localStorage.loginUserId;
    if(token !== null && token !== ""){
      navigate("/memoList");
    } else {
      navigate("/login");
    }
  });

  return (
    <></>
  );
}

export default Index;