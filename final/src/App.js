import {useState} from 'react'
import axios from 'axios'
import './App.css';


function App() {
  const [name,setname]=useState("")
  const [num,setnum]=useState("")
  
  
  const handleSubmit=(e,name)=>{
        e.preventDefault()
        axios.post('https://final-backend-i034.onrender.com/app/signup',{name:name})
          .then(res => console.log(res.data));
        setname('')
  }


  return (
    <div className="App">
      <form className="signup" onSubmit={(e)=>handleSubmit(e,name)}>
        <label htmlFor="signup">enter name:</label>
        <input id="signup"
            type='tel'
            value={name}
            onChange={(e)=>(setname(e.target.value))}
        ></input>
        <label htmlFor="otp">enter otp:</label>
        <input id="opt"
            type='tel'
            value={num}
            onChange={(e)=>(setnum(e.target.value))}
        ></input>
        <button type='submit'>otp</button>
        <button type='submit'>signup</button>
        
      </form>
    </div>
  );
}

export default App
