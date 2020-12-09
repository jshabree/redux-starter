import React from 'react'

// replacing Clock as a functional component

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    render() {
        return (
            <div>
                <h1> Hello </h1>
                <h2> It is {this.state.date.toLocaleTimeString()}   </h2>
                
            </div>
        );
    }
}

export default Clock;