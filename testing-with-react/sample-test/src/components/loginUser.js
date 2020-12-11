import React, { Component } from 'react'

class loginUser extends Component {
    constructor(props){
        super(props)
        this.state = {
            info: [
                
            ]
        }
        

        this.handleOnSubmit = this.handleOnSubmit.bind(this)
        this.handleOnClick = this.handleOnClick.bind(this)
    }

        handleOnSubmit = (e) => {
            e.preventDefault();
            this.setState({[e.target.name]: e.target.value});
            try{
                fetch("https://jsonplaceholder.typicode.com/todos/", {
                    method: "GET",
                    headers: {"Content-type": "application/json"}
                }).then(response => response.json())
                .then(data=> this.setState({info: data}))
            }
            
            catch {
                console.log("error")

            }

        }
    
        handleOnClick = (e) => {
            // this.setState([e.target.value] = e.target.value);
        }

    
    render() {
        return (
            <div>

                <form className = "login" onChange = {this.handleOnSubmit}>

                <label htmlFor = "username" > Username </label>
                    <input name = "username" type = "text" id = "username" value = {this.state.username} />

                <label htmlFor = "password" > Password </label>
                    <input name = "password" type = "password" id = "password" value = {this.state.password} />

                
                <button type = "submit" onClick = {this.handleOnSubmit}>
                    Submit
                </button>

                <div>
                    { (this.state.info.length > 0) ? this.state.info.map((item, index) => {
                   
                       return(
                           <div key={index} style = {{borderBottom:"1px solid black"}}>
                                <table>
                            
                                    <thead>
                                        <tr>
                                            <th>id</th>
                                            <th>userId</th>
                                            <th>title</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td> {item.id} </td>
                                            <td> {item.userId}</td>
                                            <td> {item.title} </td>
                                        </tr>
                                    </tbody>
                                
                                </table>
                            </div>
                        )
                   }) : <tr> Not enough data to be fetched  </tr> }
                    
                
                </div>
                

            
                <button type = "clear" onClick = {this.handleOnClick}>
                    Clear
                </button>

                </form>
                
            </div>
        )
    }

}

export default loginUser;