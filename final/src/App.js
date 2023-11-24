import {useState} from 'react'
import axios from 'axios'
import './App.css';

function App() {
  const [name,setname]=useState("")
  
  const handleSubmit=(e,name)=>{
        e.preventDefault()
        axios.post('http://localhost:4000/app/signup',{name:name})
          .catch(function (error) {
          if (error.response) {
            console.log(error.response.message);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            
            console.log('Error', error.message);
          }
          console.log(error.config);
        });

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
