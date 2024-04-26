import './global.css'

export function App() {
  return (
    <>
      <header>
        <h1>Todo</h1>
      </header>

      <section className='tasks'>
        <div className='inputCreateTasks'>
          <input placeholder='Adicione uma nova tarefa' />
          <button>Criar</button>
        </div>

        <div className='taskList'>
          <span>Você ainda não tem tarefas cadastradas</span>
        </div>
      </section>
    </>
  )
}