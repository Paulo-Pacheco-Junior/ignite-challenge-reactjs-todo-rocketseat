import styles from './TaskStatusBar.module.css'

export function TaskStatusBar() {
  return (
    <div className={styles.taskStatusBar}>
      <div className={styles.statusTasks}>
        <span className={styles.createdText}>Tarefas criadas</span>
        <span className={styles.badgeTasks}>5</span>
      </div>
      <div className={styles.statusTasks}>
        <span className={styles.doneText}>Concluídas</span>
        <span className={styles.badgeTasks}>2 de 5</span>
      </div>
    </div>
  )
}