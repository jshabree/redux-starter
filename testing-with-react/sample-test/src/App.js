import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/App.scss'

function App() {
const [username, setUsername] = useState("")
const [password, setPassword]= useState("");

  const handleSubmit =(e) => {
    e.preventDefault();

    if(username === ''|| username.length < 8) {
      alert('username needs to be at least 8 characters')
    }

    if(password === '') {
      alert('password cannot be empty')
  
    }

    if(password.length >10 || password.length <5) {
      alert('password needs to be at least 10 characters')
    }
  }

  console.log(username, password);


  return (
    <div className = "app">

    <div>
      <input 
      type = "text"
      className = "loginFields"
      onChange = {(e)=>setUsername(e.target.value)}
      placeholder = "Enter your username"
      value = {username} />
    </div>

    <div>
    <input 
      type = "password"
      className = "loginFields"
      onChange = {(e)=>setPassword(e.target.value)}
      placeholder = "Enter your password"
      value = {password} />
    </div>
      
      <div>
        <button onClick = {handleSubmit}>
          Login 
        </button>
      </div>
      

    </div>
  )
}

export default App;
