import { Check, Trash } from "@phosphor-icons/react";
import styles from './TaskList.module.css'
import { tasksData } from '../data/tasksData'

export function TaskList() {
  
  const tasks = tasksData;

  return (
    <ul className={styles.taskList}>
      {tasks.map((task, i) => {
        return (
          <li key={i} className={styles.taskItem}>
            <label className={styles.checkboxLabel}>
              <input type='checkbox' checked={task.checked} />
              {task.checked && <Check size={12} weight='bold' className={styles.checkboxIcon} />}
            </label>
            <span className={task.checked ? styles.done : ''}>{task.text}</span>
            <button>
              <Trash size={16} />
            </button>
          </li>
        )
      })}
    </ul>
  )
}