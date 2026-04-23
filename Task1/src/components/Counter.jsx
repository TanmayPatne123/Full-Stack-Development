import React from 'react'
import { useState } from 'react';

function Counter() {

    let [count,setState] = useState(0);

    const increaseCount=()=>{
        setState(count+1);
    }

    const decrCount=()=>{
        setState(count-1);
    }

    const reset=()=>{
      setState(0);
    }

  return (
    <div>
        <p>Data:{count}</p>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decrCount}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default Counter
