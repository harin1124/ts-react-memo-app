import styles from "../styleModule/userPanel.module.css";
import { useNavigate } from "react-router-dom";

type UserInfo = {userName: string|null};

function UserPanel(){
  let navigate = useNavigate();
  let userInfo:UserInfo = {userName: ""};
  userInfo.userName = localStorage.getItem("loginUserId") || null;

  const actionUserLogout = () => {
    localStorage.clear();
    navigate("/login");
  }

  if(userInfo.userName !== ""){
    return (
      <div className={styles.userPanel}>
        <p className={styles.userPanelName}>{userInfo.userName}</p>
        <p className={styles.userPanelLogout} onClick={actionUserLogout}>로그아웃</p>
      </div>
    );
  } else {
    return <div></div>;
  }
}
export default UserPanel;