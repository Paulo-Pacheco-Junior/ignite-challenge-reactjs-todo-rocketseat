import { Check, Trash } from "@phosphor-icons/react";
import styles from './TaskList.module.css'

interface TaskProps {
  id: string;
  text: string;
  checked: boolean;
}

interface TaskListProps {
  task: TaskProps;
  onToggleTask: (taskId: string) => void;
  onDeleteTask: (taskId: string) => void;
}

export function TaskList({task, onToggleTask, onDeleteTask}: TaskListProps) {

  function handleToggleTask(taskId: string) {
    onToggleTask(taskId);
  }

  function handleDeleteTask(taskId: string) {
    onDeleteTask(taskId);
  }

  return (
    <li className={styles.taskItem}>
      <label className={styles.checkboxLabel}>
        <input type='checkbox' onChange={()=>handleToggleTask(task.id)} checked={task.checked} />
        {task.checked && <Check size={12} weight='bold' className={styles.checkboxIcon} />}
      </label>
      <span onClick={()=>handleToggleTask(task.id)} className={task.checked ? styles.done : ''}>{task.text}</span>
      <button onClick={()=>handleDeleteTask(task.id)}>
        <Trash size={16} />
      </button>
    </li>
  )
}