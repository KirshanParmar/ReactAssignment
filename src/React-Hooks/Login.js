import React, {useContext} from "react";
import { AppContext } from "./ContextDemo"

function Login(){
    const {setUsername}= useContext(AppContext);

    return(
        <div>
            <input onChange={(event)=>{
             setUsername(event.target.value);
            }}
            ></input>
        </div>
    );
}
export default Login;