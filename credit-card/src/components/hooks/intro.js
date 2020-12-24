import React, {useState} from 'react'

export default function example() {

    const [count, setCount] = useState[0];

    return (
        <div>
            <p> You have clicked counter {count} times </p>
            <button onClick = {() => setCount(count+1)}> 
                Click me 
             </button>
        </div>
    );
}
