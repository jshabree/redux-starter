import React, { Component } from 'react'

class details extends Component {
    
    
    
    validate() {
        window.addEventListener('load', function() {
          var forms = document.getElementsByClassName('details');
          var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add('was-validated');
            }, false);
          });
        }, false);
      }

    render() {
        return (
            <div className = "center_div">
            <form className = "details" noValidate>

            <div className = "form-inline">
                <input id = "validationCustom01" type = "number" pattern="\d*" max = "10" class = "form-control" placeholder = "Enter your card number*"/>
                <div class = "invalid-feedback">
                    Please enter your card details
                </div>
            </div>

            <div className = "row">
                <div class = "col">
                    <input id = "month" type = "tel" maxLength = "2" class = "form-control" placeholder = "Month*" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required/>
                </div>

                <div class = "col">
                    <input id = "year" type = "tel" maxLength = "2" class = "form-control" placeholder = "Year*"/>
                </div>

                <div class = "col">
                    <input id = "cvv" type = "password" maxLength = "3" class = "form-control" placeholder = "Enter your CVV*"/>
                </div>

                
            </div>

            
            <div className = "row">
                <div class = "col">
                    <input id = "firstName" type = "text" class = "form-control" placeholder = "Enter your first name*"/>
                    </div>

                    <div class = "col">
                    <input id = "lastName" type = "text" class = "form-control" placeholder = "Enter your last name*"/>
                </div>
                
            </div>

            <div class = "primary-button">
                <button type = "submit"  class = "btn btn-primary" > Place your order </button>
            </div>

               
            </form>

            </div>
        )
    }
}

export default details;