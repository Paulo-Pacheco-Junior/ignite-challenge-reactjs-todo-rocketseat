import { Header } from './components/Header'
import { TaskStatusBar } from './components/TaskStatusBar';
import { ZeroTasks } from './components/ZeroTasks';
import { TaskList } from './components/TaskList';
import { PlusCircle } from "@phosphor-icons/react";
import styles from './App.module.css'
import './global.css'

export function App() {
  
  const tasks = []; 
  // const tasks = ['exibir TaskList'];

  return (
    <div className={styles.wrapper}>
      <Header />
      <section className={styles.mainContent}>
        <form className={styles.formTasks}>
          <div className={styles.inputCreateTasks}>
            <input placeholder='Adicione uma nova tarefa' />
            <button type='submit'>
              <span>Criar</span>
              <PlusCircle size={20}/>
            </button>
          </div>
        </form>
        <TaskStatusBar />
        <div className={styles.tasksContainer}>       
          { tasks.length > 0 ? <TaskList /> : <ZeroTasks /> }
        </div>
      </section>
    </div>
  )
}