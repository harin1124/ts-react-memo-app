import styles from "../styleModule/userPanel.module.css";

type UserInfo = {userName: string|null};

function UserPanel(){
  let userInfo:UserInfo = {userName: ""};
  userInfo.userName = localStorage.getItem("loginUserId") || null;

  if(userInfo.userName !== ""){
    return (
      <div className={styles.userPanel}>
        <p className={styles.userPanelName}>{userInfo.userName}</p>
        <p className={styles.userPanelLogout}>로그아웃</p>
      </div>
    );
  } else {
    return <div></div>;
  }
}
export default UserPanel;