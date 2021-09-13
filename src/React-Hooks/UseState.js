import React, {useState} from 'react';

const UseStateDemo=() =>{
//First Use case of UseState
const[counter, setCounter]=useState(0);
const increment=()=>{
    setCounter(counter+1);
    console.log(counter);
}
//Second Use case of UseState
const [inputValue, setInputValue]=useState("Kirshan");

let onChange=(event)=>{
    const newValue=event.target.value;
    setInputValue(newValue);
}
//Third Use case of UseState
const [count, setCount]=useState(0);
const [showText, setShowText]=useState(true);

return (
  
    <div>
        <button onClick={increment}>Increment</button>
        {counter}
        <br></br>
        <input placeholder="type something..." onChange={onChange}></input>
        {inputValue}
        <br></br>

        <h1>{count}</h1>
          <button onClick={()=>{setCount(count+1);
          setShowText(!showText);
          }}>Click Here</button>
          {showText && <p> This is a Text show</p>}
    </div>

);

};
export default UseStateDemo;