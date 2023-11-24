import {useState} from 'react'
import axios from 'axios'
import './App.css';

function App() {
  const [name,setname]=useState("")
  
  const handleSubmit=(e,name)=>{
        e.preventDefault()
        axios.post('https://final-backend.netlify.app/app/signup',{name:name})
          .then(res => console.log(res.data));

        setname('')
  }

  return (
    <div className="App">
      <form className="signup" onSubmit={(e)=>handleSubmit(e,name)}>
        <label htmlFor="signup">enter name:</label>
        <input id="signup"
            type='text'
            value={name}
            onChange={(e)=>(setname(e.target.value))}
        ></input>
        <button type='submit'>signup</button>
        
      </form>
    </div>
  );
}

export default App;
