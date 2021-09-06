//import './App.css';
import React, {useEffect, useState} from 'react';
function App(props){

    useEffect(()=>{
        console.warn("useEffect used");

    },[props.count,props.data])
    return (

        <div className="App">
         <h1>Count Props: {props.count}</h1>
         <h2>Count Data: {props.data}</h2>         
         </div>
      );
    }
    
    export default App;
    
