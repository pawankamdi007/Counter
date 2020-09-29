import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './index.css';


function App() {

  const[count,setcount]=useState(0);
  //const[newcount,setnewcount]=useState();

  const plus=()=>{
   // counter++;
    setcount(count+1)
    console.log(count);
  }
  const minus=()=>{
    if(count>0){
   setcount(count-1);
    }
    console.log(count);
  }

  return (
    <div className="App">
      <div className="main">
      <h2>Counter</h2>
        <h1>{count}</h1>
        <button id="btn" onClick={minus}>Decrement</button>
        <button id="btn" onClick={plus}>Increment</button>
        </div>
    </div>
  );
}

export default App;
