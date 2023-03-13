
import { useState } from 'react';
import './App.css';

function App() {

  const [fname,setFName]=useState("")
  const [lName,setLName]=useState("")


  const handleFNameIputChange= (evt)=>{
    setFName(evt.target.value)
  }
  
  const handleLNameInputChange = (evt)=>{
    setLName(evt.target.value)
  }

  const handleSubmit = (evt)=>{
    evt.preventDefault()
    const user= {
      name:fname,
      lastname:lName
    }
    
    fetch("http://localhost:5000/users",{
      method:"POST",
      body:JSON.stringify(user),
      headers:{
          "Content-Type": "application/json",
      },
  })
  }

  return (
    <div className="App">
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name='fname' onChange={handleFNameIputChange}/>
        <br/>
        <input type="text" name='lname' onChange={handleLNameInputChange}/>
        <br/>

      <button type='submit'>click</button>
      </form>
    </div>
  );
}

export default App;
