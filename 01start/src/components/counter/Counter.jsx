import "./Counter.css";
import {useState} from "react"

// state is a special variable in react. where we can store any tyep of data
// State data we can bind with JSX Element
// Whenever state gets updated, internally react take car updating UI with new State Data.

function Counter() {

    var [state,setState] = useState(0);

    const increaseCount=()=>{
        setState(state+1);
    };

    return (
        <div className="counter">
            <h2>Counter App</h2>
            <p>Count Value is : {state}</p>
            <button onClick={increaseCount}>Click me</button>
        </div>
    );
}

export default Counter