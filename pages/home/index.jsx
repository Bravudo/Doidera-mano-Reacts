import { useState } from 'react'
import './style.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <div className='title'>
      <h1>React Study</h1>
    </div>
  )
}

function Form() {
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [email, setEmail] = useState('')
  const [users, setUsers] = useState([
    {
      id: 1,
      nome: 'João',
      idade: 47,
      email: 'joao@gmail.com'
    },
    {
      id: 2,
      nome: 'Maria',
      idade: 25,
      email: 'maria@gmail.com'
    }
  ])

  const deleteUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id)
    setUsers(newUsers)
  }

  const addUser = () => {
    if (!nome || !idade || !email) {
      alert('Por favor, preencha todos os campos.')
      return
    }

    const newUser = {
      id: users.length + 1, 
      nome,
      idade: parseInt(idade, 10), 
      email
    }
    setUsers([...users, newUser])
    setNome('') 
    setIdade('') 
    setEmail('') 
  }

  return (
    <div className="container">
      <form onSubmit={(e) => e.preventDefault()}>
        <h1>Cadastro de Usuários</h1>
        <input
          placeholder='Nome*'
          name='nome'
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          placeholder='Idade*'
          name='idade'
          type="number"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />
        <input
          placeholder='Email*'
          name='email'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type='button' onClick={addUser}>Cadastrar</button>
      </form>
      {users.map((user) => (
        <div key={user.id} className='user'>
          <div>
            <p>Nome: <span>{user.nome}</span></p>
            <p>Idade: <span>{user.idade}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button onClick={() => deleteUser(user.id)}>Excluir</button>
        </div>
      ))}
    </div>
  )
}

export default function App() {
  return (
    <div>

      <Home />
      <Form />
    </div>
  )
}
