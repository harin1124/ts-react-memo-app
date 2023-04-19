import styles from "../styleModule/editorPanel.module.css";

function EditorPanel(){
  return (
    <>
      <textarea className={styles.editor}/>
    </>
  );
}
export default EditorPanel;