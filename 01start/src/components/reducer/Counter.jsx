import React from 'react'
import "./Counter.css"
import { useReducer } from 'react';
import counterReducer from './counterReducer';


function Counter() {

   let [state,dispatch] = useReducer(counterReducer, {count:0});
    
   const incCount=()=> 
    {
        dispatch({type:"INC"});
   }

   const decCount=()=>
    {
        dispatch({type:"DEC"});
   }

   const clearCount=()=>
    {
    dispatch({type:"ZERO"});
   }

  return (
    <div  className="reducerCounter">
      <h2>Counter App with useReudcer() Hook:{state.count}</h2>
      <button onClick={incCount}>incCount</button>
      <button onClick={decCount}>decCount</button>
      <button onClick={clearCount}>clear</button>
    </div>
  );
}

export default Counter
