import React, { Component } from 'react'

class details extends Component {

    validateMonthAndYear (input) {
        var today, someday
        var month = document.getElementById("month");
        var year = document.getElementById("year");
        today = new Date();
        someday = new Date();
        someday.setFullYear(year, month -1, 1);

        if(someday < today) {
            alert("Enter a valid credit card");
            return false;
        }

    }

    render() {
        return (
            <div className = "center_div">
            <form className = "details" onSubmit = "validateMonthAndYear()">

            <div className = "form-inline">
                <input id = "validationCustom01" type = "number" pattern="\d*" max = "16" class = "form-control" placeholder = "Enter your card number*" required/>
            </div>

            <div className = "row">
                <div class = "col">
                    <input id = "month" type = "tel" maxLength = "2" class = "form-control" placeholder = "Month of expiry*" required/>
                </div>

                <div class = "col">
                    <input id = "year" type = "tel" maxLength = "2" class = "form-control" placeholder = "Year of expiry*" required/>
                </div>

                <div class = "col">
                    <input id = "cvv" type = "password" maxLength = "3" class = "form-control" placeholder = "Enter your CVV*" required/>
                </div>

                
            </div>

            
            <div className = "row">
                <div class = "col">
                    <input id = "firstName" type = "text" class = "form-control" placeholder = "Enter your first name*" required/>
                    </div>

                    <div class = "col">
                    <input id = "lastName" type = "text" class = "form-control" placeholder = "Enter your last name*" required/>
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