import logo from './logo.svg';
import './App.css';
import  UseEffectApp from './UseEffectApp';
import React, {useEffect, useState} from 'react';

function App() {
  const [data,setData]=useState(10);
  const [count,setCount]=useState(100);

  return (

    <div className="App">
       <UseEffectApp count={count} data={data}/>
       <button onClick={()=>setCount(count+1)}>UpdateCount</button>
       <button onClick={()=>setData(data+1)}>UpdateData</button>
       
     </div>
  );
}

export default App;
