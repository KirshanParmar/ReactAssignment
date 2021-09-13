import React, {useRef} from 'react';

const UseRefDemo=()=>{
    const inputRef= useRef(null);
    const onClick=()=>{
       // console.log(inputRef.current.value);
       inputRef.current.value="";
        
    };

    return (
        <div>
        <h1>UseRef Demo</h1>
        <input type="text" placeholder="Ex..." ref={inputRef}></input>
        <button onClick={onClick}>Change Value</button>
        </div>
       

    );
};
export default UseRefDemo;