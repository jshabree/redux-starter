import React, { Component } from 'react'
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { connect } from "react-redux";
import { getData }  from "../redux/actions/index";

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

            this.props.dispatch(getData()) // action 
        }
    
        handleOnClick = (e) => {
            // this.setState([e.target.value] = e.target.value);
        }
        
        static getDerivedStateFromProps(props, state){
            if(props.result !== state.info) {
                return ({info: props.result})
            }
        }

    
    render() {
        
        return (
            <div className = "outer-class"> 

                <div className = "login">
                    <Form onSubmit = {this.handleOnSubmit}>
                        <Form.Group controlId = "username">
                        <Form.Label> Username </Form.Label>
                        <Form.Control
                            autoFocus
                            type = "username"
                            value = {this.state.username}
                        />
                        </Form.Group>

                        <Form.Group controlId = "password">
                        <Form.Label> Password </Form.Label>
                        <Form.Control
                            autoFocus
                            type = "password"
                            value = {this.state.password}
                        />
                        </Form.Group>
                    </Form>
                

                    <Button block size = "sm" type = "submit" onClick = {this.handleOnSubmit}> Submit </Button>

                    <Button block size = "sm" type = "clear" onClick = {this.handleOnClick}> Clear </Button>

                </div> 

                <div className = "table">
                    {this.state.info.length > 0 ? 
                
                        <table>
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
                                }) : null }

                            </tbody>   

                        </table>

                    :  console.log('Not enough data to be fetched') }
                </div>
            
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        result: state.posts.info // getData from reducer
    };
};
export default connect(mapStateToProps)(loginUser);