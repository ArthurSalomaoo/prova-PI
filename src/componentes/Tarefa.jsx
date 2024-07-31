import '../css/tarefacss.css'

function Tarefa({ tarefa }) {
  return (
    <div className="tarefa">
      <li>{tarefa}</li>
    </div>
  )
}

export default Tarefa
