import React, { Component } from 'react'
import Error from "./Error"
class details extends Component {
    constructor(props) {
        super(props)
        this.state= {
            cardNum: [[], [], [], []],
            month: "", year: "", cvv: "",
            firstName: "",
            lastName: "",
            error: []

        }
    }

    enableMasking = () => {
        console.log("here")
        const inputFields = [...document.querySelectorAll("input")];
        inputFields.forEach((input, index) => {
            input.addEventListener("keydown", e => {
                this.maskInput(e, index);
            });
        });
    };

        
    handleChange = (e)=>{
        this.setState({[e.target.name]: e.target.value});
    }

    validateForm = (e)=> {
        e.preventDefault();
        const {cardNum, month, year, cvv} = this.state;
        let errorArray = []
        if(cardNum.length < 16 || cardNum.length > 16) {
            errorArray.push("Invalid credit card number");
        }

        if(cvv.length !== 3){
            errorArray.push("Invalid CVV");
        }

        if(month > 12) {
            errorArray.push("Invalid month");
        }

        // validating if the card is expired by checking the month and year

        let today, expiredDate;

        today = new Date();
        expiredDate = new Date();
        expiredDate.setFullYear(year, month -1, 1);

        if(expiredDate < today) {
            errorArray.push("Your card has expired. Enter a valid credit card");
        }

        this.setState({error: [...errorArray]})
        }

    render() {
        return (
            <div className = "center_div">
            <form className = "cardDetails" onSubmit = {this.validateForm} noValidate>

            
            <div className = "row">
            <div class = "col">
                <input  type = "text" className = "form-control" maxLength = "4" placeholder = "----" required onChange={this.handleChange}/>
            </div>

            <div class = "col">
                <input  type = "text" className = "form-control" maxLength = "4" placeholder = "----" required onChange={this.handleChange}/>
            </div>

            <div class = "col">
                <input  type = "text" className = "form-control" maxLength = "4" placeholder = "----" required onChange={this.handleChange}/>
            </div>

            <div class = "col">
                <input  type = "text" className = "form-control" maxLength = "4" placeholder = "----" required onChange={this.handleChange}/>
            </div>

            </div>
        

            <div className = "row">
                <div class = "col">
                    <input name = "month" type = "number" className = "form-control" placeholder = "Month of expiry" value = {this.state.month} required onChange={this.handleChange}/>
                </div>

                <div class = "col">
                    <input name = "year" type = "number" className = "form-control" placeholder = "Year of expiry" value = {this.state.year} required onChange={this.handleChange}/>
                </div>

                <div class = "col">
                    <input name = "cvv" type = "password" className = "form-control" placeholder = "Enter your CVV" value = {this.state.cvv} required onChange={this.handleChange}/>
                </div>
                
                
            </div>

            
            <div className = "row">
                <div class = "col">
                    <input name="firstName" type = "text" className = "form-control" placeholder = "Enter your first name" value = {this.state.firstName} required onChange={this.handleChange}/>
                    </div>

                    <div class = "col">
                    <input name = "lastName" type = "text" className = "form-control" placeholder = "Enter your last name"  value = {this.state.lastName} required onChange={this.handleChange}/>
                </div>
                
            </div>

            <div class = "primary-button">
                <button type = "submit"  class = "btn btn-primary" > Submit </button>
            </div>

               
            </form>

            <Error message={this.state.error}/>

            </div>
        )
    }
}

export default details;