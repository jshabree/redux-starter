import React, { Component } from 'react'

class details extends Component {
    render() {
        return (
            <div className = "form">
            <form className = "details">

            <div className = "form-inline">

                <label for = "ccn"> Card Number </label>
                <input id = "ccn" type = "tel" inputMode = "numeric" maxlength = "10" class = "form-control" placeholder = "Enter your card number"/>

            </div>

            <div className = "form-inline">

                <label for = "month"> MM </label>
                <input id = "month" class = "form-control" placeholder = "Month"/>
           
                <label for = "year"> YY </label>
                <input id = "year" class = "form-control" placeholder = "Year"/>
            

                <label for = "cvv"> CVV </label>
                <input id = "cvv" class = "form-control" placeholder = "Enter your CVV"/>

            </div>

            
            <div className = "form-inline">
                <label for = "firstName"> First Name </label>
                <input id = "firstName" type = "text" class = "form-control" placeholder = "Enter your first name"/>

                <label for = "lastName"> Last Name </label>
                <input id = "lastName" type = "text" class = "form-control" placeholder = "Enter your last name"/>
            
            </div>

                <button type = "submit"  class = "btn btn-primary" > Place your order</button>
               
            </form>

            </div>
        )
    }
}

export default details;