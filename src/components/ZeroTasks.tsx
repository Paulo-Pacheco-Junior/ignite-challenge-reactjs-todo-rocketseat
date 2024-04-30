import styles from './ZeroTasks.module.css'
import TaskIcon from '../assets/icons/task-icon.svg'

export function ZeroTasks() {
  return (
    <div className={styles.zeroTasks}>
      <img src={TaskIcon} alt='task icon' />
      <div className={styles.zeroTasksText}>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  )
}