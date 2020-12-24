import React, { useContext } from 'react';

// old code goes here

function Display() {
    const NumberContext = React.createContext();
  
    const value = useContext(NumberContext);
    return <div>The answer is {value}.</div>;
}

export default Display;