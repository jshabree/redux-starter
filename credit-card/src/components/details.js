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
        this.setState({[e.target.name]: e.target.value})
    }


    validateForm= (e)=> {
        e.preventDefault();
        const {cardNum, month, year, cvv, firstName, lastName} = this.state;

        if(cardNum < 16 || cardNum > 16) {
            alert("Invalid credit card number");
        }

        if(cvv !== 3){
            alert("Invalid CVV");
        }

        if(firstName === "") {
            alert("First name cannot be empty!");
        }

        if(lastName.value === "") {
            alert("Last name cannot be empty!");
        }

        if(month.length > 12) {
            alert("Invalid month");
        }

        if(year.selectedIndex === 0) {
            alert("Please select a year");
        }

        // // validating if the card is expired by checking the month and year
        // var today, someday

        // today = new Date();
        // someday = new Date();
        // someday.setFullYear(year, month -1, 1);

        // if(someday < today) {
        //     alert("Enter a valid credit card");
        //     return false;
        // }

    }

    render() {
        return (
            <div className = "center_div">
            <form className = "details" onSubmit = {this.validateForm}>

            <div className = "form-inline">
                <input name = "cardNum" type = "number" className = "form-control" placeholder = "Enter your card number*" required onChange={this.handleChange}/>
            </div>

            <div className = "row">
                <div class = "col">

                    <input name = "month" type = "number" maxLength = "2" className = "form-control" placeholder = "Month of expiry*" required onChange={this.handleChange}/>
                </div>

                <div class = "col">
                    <input name = "year" type = "number" maxLength = "4" className = "form-control" placeholder = "Year of expiry*" required onChange={this.handleChange}/>
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