import React, { Component } from 'react'

class details extends Component {
    render() {
        return (
            <div className = "form-group">
            <form className = "details">
                <label for = "ccn"> Card Number </label>
                <input id = "ccn" type = "tel" inputMode = "numeric" maxlength = "10" placeholder = "Enter your card number"/>
                
                <label for = "month"> MM </label>
                <input id = "month" placeholder = "Month"/>

                <label for = "year"> YY </label>
                <input id = "year" placeholder = "Year"/>

                <label for = "cvv"> CVV </label>
                <input id = "cvv" placeholder = "Enter your CVV"/>

                <label for = "firstName"> First Name </label>
                <input id = "firstName" placeholder = "Enter your first name"/>

                <label for = "lastName"> Last Name </label>
                <input id = "lastName" placeholder = "Enter your last name"/>

                <button type = "submit" class = "btn btn-primary" > Place your order</button>
               
            </form>

            </div>
        )
    }
}

export default details;