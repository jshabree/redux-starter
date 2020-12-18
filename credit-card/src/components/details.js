import React, { Component } from 'react'

class details extends Component {
    constructor(props) {
        super(props)
        this.state= {
            cardNum: "",
            month: "", year: "", cvv: "",
            firstName: "",
            lastName: "",

        }
    }
        
    handleChange = (e)=>{
        this.setState({[e.target.name]: e.target.value});
    }


    validateForm = (e)=> {
        e.preventDefault();
        const {cardNum, month, year, cvv, firstName, lastName} = this.state;

        if(cardNum.length < 16 || cardNum.length > 16) {
            alert("Invalid credit card number");
        }

        if(cvv.length !== 3){
            alert("Invalid CVV");
        }

        // in case of browser default failures

        if(firstName === "") {
            alert("First name cannot be empty!");
        }

        if(lastName.value === "") {
            alert("Last name cannot be empty!");
        }

        if(month > 12) {
            alert("Invalid month");
        }

        // validating if the card is expired by checking the month and year
        let today, expiredDate;

        today = new Date();
        expiredDate = new Date();
        expiredDate.setFullYear(year, month -1, 1);

        if(expiredDate < today) {
            alert("Your card has expired. Enter a valid credit card");
            return false;
        }

        else {
            alert("Card is valid, you are being redirected to the next page")
        }

    }

    render() {
        return (
            <div className = "center_div">
            <form className = "cardDetails" onSubmit = {this.validateForm}>

            <div className = "form-inline">
                <input name = "cardNum" type = "number" className = "form-control" placeholder = "Enter your card number*" required onChange={this.handleChange}/>
            </div>

            <div className = "row">
                <div class = "col">
                    <input name = "month" type = "number" className = "form-control" placeholder = "Month of expiry*" required onChange={this.handleChange}/>
                </div>

                <div class = "col">
                    <input name = "year" type = "number" className = "form-control" placeholder = "Year of expiry*" required onChange={this.handleChange}/>
                </div>

                <div class = "col">
                    <input name = "cvv" type = "password" className = "form-control" placeholder = "Enter your CVV*" required onChange={this.handleChange}/>
                </div>
                
                
            </div>

            
            <div className = "row">
                <div class = "col">
                    <input name="firstName" type = "text" className = "form-control" placeholder = "Enter your first name*" required onChange={this.handleChange}/>
                    </div>

                    <div class = "col">
                    <input name = "lastName" type = "text" className = "form-control" placeholder = "Enter your last name*" required onChange={this.handleChange}/>
                </div>
                
            </div>

            <div class = "primary-button">
                <button type = "submit"  class = "btn btn-primary" > Submit </button>
            </div>

               
            </form>

            </div>
        )
    }
}

export default details;