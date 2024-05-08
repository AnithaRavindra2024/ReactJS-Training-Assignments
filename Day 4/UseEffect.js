import React, { useEffect, useState } from "react";

function UseEfecthook(){

        let [name,setName]=useState('X');
        let [counter,setCount]=useState(0);

        function increment(){
            counter=counter+1;
            setCount(counter);
            setName(name +' Test');
        }
        useEffect(()=>{
            console.log('Updated');
        },[name,counter])
        return (
            
            <div>
                <h1>Name={name}</h1>
                <h1>Counter={counter}</h1>
                <br></br><br></br>
                <button onClick={increment}>Click On Increment</button>
            </div>
        )
}

export default UseEfecthook;