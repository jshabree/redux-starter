import React, { Component } from 'react'

class details extends Component {
    render() {
        return (
            <div className = "form">
            <form className = "details">

            <div className = "form">
                <input id = "ccn" type = "tel" inputMode = "numeric" maxlength = "10" class = "form-control" placeholder = "Enter your card number"/>
            </div>

            <div className = "row">
                <div class = "col">
                    <input id = "month" class = "form-control" placeholder = "Month"/>
                </div>

                <div class = "col">
                    <input id = "year" class = "form-control" placeholder = "Year"/>
                </div>

                <div class = "col">
                    <input id = "cvv" class = "form-control" placeholder = "Enter your CVV"/>
                </div>

                
            </div>

            
            <div className = "row">
                <div class = "col">
                    <input id = "firstName" type = "text" class = "form-control" placeholder = "Enter your first name"/>
                    </div>

                    <div class = "col">
                    <input id = "lastName" type = "text" class = "form-control" placeholder = "Enter your last name"/>
                </div>
                
            </div>

                <button type = "submit"  class = "btn btn-primary" > Place your order</button>
               
            </form>

            </div>
        )
    }
}

export default details;