//Day 2 Assignment

//creating a single component "NumberState" and utilization of 'useState' hook

import { useState } from "react";
 
function NumberState() {
    let [count, setCount] = useState(0);
 
  
    function incrementCounter() {
       setCount(count + 1);
        console.log(count);
    }
 
    function decrementCounter() {
        setCount(count - 1);
         console.log(count);
     }

     function ResetCounter() {
        setCount(count *0);
         console.log(count);
     }

  return (
    <div>
      <h1>{count}</h1>
        <button onClick={incrementCounter}>Increment</button>
        <button onClick={decrementCounter}>Decrement</button>
        <button onClick={ResetCounter}>Reset</button>
    </div>
  );

  }
 
export default NumberState;

