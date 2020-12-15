import React, { Component } from 'react'
import '../app.css'

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

                <span>
                <label htmlFor = "username" > Username </label>
                    <input name = "username" type = "text" id = "username" value = {this.state.username} />
                </span>
                
                <span>
                <label htmlFor = "password" > Password </label>
                    <input name = "password" type = "password" id = "password" value = {this.state.password} />

                </span>
            

                        <table className = "table">
                            <thead>
                                <tr>
                                    <th>id</th>
                                    <th>userId</th>
                                    <th>title</th>
                                </tr>
                            </thead>

                            <tbody>
                                { (this.state.info.length > 0) ? this.state.info.map((item, index) => {
                                    return (
                                        <tr key = {index}>
                                            <td> {item.id} </td>
                                            <td> {item.userId}</td>
                                            <td> {item.title} </td>
                                        </tr>
                                    )
                                }) : <tr><td>Not enough data to be fetched  </td></tr> }

                            </tbody>                                
                        </table>
                
                <button type = "submit" onClick = {this.handleOnSubmit}> Submit </button>

                <button type = "clear" onClick = {this.handleOnClick}> Clear </button>

                
                </form>
                
            </div>  
        )
    }

}

export default loginUser;