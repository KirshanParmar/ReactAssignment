import { useLayoutEffect, useEffect, useRef } from "react";

function UseLayoutEffectDemo(){
    const inputRef=useRef(null);

    useLayoutEffect(() => {
        console.log(inputRef.current.value);
        
    }, []);
    useEffect(()=>{
     inputRef.current.value="Hello"
    });

    return(
        <div className="App">

            <input ref={inputRef} value="Kirshan" style={{width:400, height:100}}></input>
        </div>
    );
}

export default UseLayoutEffectDemo;