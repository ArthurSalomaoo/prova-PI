import { useState } from 'react'

function Lista({ adicionarTarefa }) {
  const [tarefa, setTarefa] = useState('')

  function enviarTarefa() {
    if (tarefa.trim()) {
      adicionarTarefa(tarefa)
      setTarefa('')
    }
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Digite a tarefa!"
        value={tarefa}
        onChange={(e) => setTarefa(e.target.value)}
      />
      <button onClick={enviarTarefa}>Enviar</button>
    </div>
  )
}

export default Lista
