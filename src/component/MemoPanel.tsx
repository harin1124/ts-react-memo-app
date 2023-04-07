import styles from "../styleModule/memoPanel.module.css";

type MemoPanel = {title: string; reg_date: string; edit_date: string};

function MemoPanel(prop:MemoPanel) {
  return (
    <div className={styles.memoPanel}>
      <div className={styles.title}>
        <p>{prop.title}</p>
      </div>
      <div className={styles.date}>
        <p><span>{prop.reg_date}</span></p>
      </div>
		</div>
  );
}
export default MemoPanel;