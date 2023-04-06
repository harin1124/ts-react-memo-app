import styles from "../styleModule/memoPanel.module.css";

type MemoPanel = {title: string; reg_date: string; edit_date: string};

function MemoPanel(prop:MemoPanel) {
  return (
    <div className={styles.memoPanel}>
			<p>제목{prop.title}</p>
      <p>등록일{prop.reg_date}</p>
		</div>
  );
}

export default MemoPanel;