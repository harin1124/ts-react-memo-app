import styles from "../styleModule/memoAddButton.module.css";
import { Link } from "react-router-dom";

function MemoAddButton(){
  return (
    <>
      <Link to="/createMemo"><button type="button" className={styles.memoAddButton}>메모 작성</button></Link>
    </>
  );
}
export default MemoAddButton;