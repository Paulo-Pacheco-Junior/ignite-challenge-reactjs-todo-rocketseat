import styles from './TaskStatusBar.module.css'

interface TaskProps {
  id: string;
  text: string;
  checked: boolean;
}

interface TaskStatusBarProps {
  tasks: TaskProps[];
}

export function TaskStatusBar({tasks}: TaskStatusBarProps) {
  
  const tasksDone = tasks.filter(task => task.checked === true);

  return (
    <div className={styles.taskStatusBar}>
      <div className={styles.statusTasks}>
        <span className={styles.createdText}>Tarefas criadas</span>
        <span className={styles.badgeTasks}>{tasks.length}</span>
      </div>
      <div className={styles.statusTasks}>
        <span className={styles.doneText}>Concluídas</span>
        <span className={styles.badgeTasks}>{tasksDone.length} de {tasks.length}</span>
      </div>
    </div>
  )
}