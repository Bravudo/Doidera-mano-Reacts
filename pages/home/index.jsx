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


function Form(){
  const [nome, setNome] = useState(0)
  const users = [{
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
]
  return(

    <div className="container">
    <form>
      <h1>Cadastro de Usuários</h1>
    <input  placeholder='Nome*' name='nome' type="text"/>
    <input placeholder='Idade*'  name='idade' type="number"/>
    <input placeholder='Email*' name='email' type='email'/> 
    <button type='button'>Cadastrar</button>
    </form>
    {users.map((user) => (
      <div key={user.id} className='user'>
      <div>
      <p>Nome: <span>{user.nome}</span></p>
      <p>Idade: <span>{user.idade}</span></p>
      <p>Email: <span>{user.email}</span></p>
      </div>
      <button>Excluir</button>
    </div>
    ))}
    </div>
  )
}


export default function App(){
  return(
    <div>
      <Home />
      <Form />
    </div>
  )
}
