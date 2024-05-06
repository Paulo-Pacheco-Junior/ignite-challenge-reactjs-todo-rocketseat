import { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Header } from './components/Header'
import { TaskStatusBar } from './components/TaskStatusBar';
import { ZeroTasks } from './components/ZeroTasks';
import { TaskList } from './components/TaskList';
import { PlusCircle } from "@phosphor-icons/react";
import styles from './App.module.css'
import './global.css'

interface TaskProps {
  id: string;
  text: string;
  checked: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [task, setTask] = useState('');

  function handleInputCreateTask(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
  }

  function handleSubmitTask(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if(task.length > 0 && task.trim() !== '') {
      const newTask = {
        id: uuidv4(),
        text: task, 
        checked: false
      }
      setTasks(tasks => [...tasks, newTask]);
      setTask('');
    }
  }

  function onToggleTask(taskId: string) {
    setTasks(tasks.map(task => {
      if(task.id === taskId) {
        return {...task, checked: !task.checked};
      }
      return task;
    }));
  }

  function onDeleteTask(taskId: string) { 
    setTasks(tasks.filter(task => task.id !== taskId));
  }

  return (
    <div className={styles.wrapper}>
      <Header />
      <section className={styles.mainContent}>
        <form onSubmit={handleSubmitTask} className={styles.formTasks}>
          <div className={styles.inputCreateTasks}>
            <input onChange={handleInputCreateTask} value={task} placeholder='Adicione uma nova tarefa' required />
            <button type='submit'>
              <span>Criar</span>
              <PlusCircle size={20} className={styles.CreateButtonIcon}/>
            </button>
          </div>
        </form>
        <TaskStatusBar tasks={tasks} />
        <div className={styles.tasksContainer}>   
          {tasks.length > 0  
            ? <ul className={styles.taskList}> 
                {tasks.map((task) => (
                  <TaskList 
                    key={task.id} 
                    task={task}
                    onToggleTask={onToggleTask}
                    onDeleteTask={onDeleteTask}
                  />
                ))}           
              </ul>
            : <ZeroTasks />   
          }
        </div>
      </section>
    </div>
  )
}