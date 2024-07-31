import { useState } from 'react'
import './App.css'
import Lista from './componentes/ListaDeTarefas'
import Tarefa from './componentes/Tarefa'

function App() {
  const [tarefas, setTarefas] = useState([])

  const adicionarTarefa = (novaTarefa) => {
    setTarefas([...tarefas, novaTarefa])
  }

  return (
    <div>
      <Lista adicionarTarefa={adicionarTarefa} />
      {tarefas.map((item, index) => (
        <Tarefa key={index} tarefa={item} />
      ))}
    </div>
  )
}

export default App
