import React, { Component } from 'react'
import Error from "./Error"
class details extends Component {
    constructor(props) {
        super(props)
        this.state= {
            cardNum: "", safeCardNum: "",
            month: "", year: "", cvv: "",
            firstName: "",
            lastName: "",
            error: []

        }
    }

    enableMasking = () => {
        const cardNums = [...document.querySelectorAll("input")];
        cardNums.forEach((input, index) => {
          input.adddEventListener("keydown", e => {
            this.maskInput(e, index);
          });
        });
      };

      maskInput = (e, cardNum) => {
        const numkeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
        const navkeys = [
          "Backspace",
          "Delete",
          "Shift",
          "ArrowUp",
          "ArrowDown",
          "ArrowLeft",
          "ArrowRight",
          "Tab"
        ];

        let selectionStart = e.target.selectionStart;

        if (!numkeys.includes(e.key) && !navkeys.includes(e.key)) {
          e.preventDefault();
        } 
        else if (e.key === "Backspace" || e.key === "Delete") {
          selectionStart = selectionStart - 1 <= 0 ? 0 : selectionStart - 1;
          this.state.cardDigits[cardNum].splice(selectionStart, 1);
          e.target.value = this.state.cardDigits[cardNum]
            .map(item => "#")
            .join("");
          e.target.selectionStart = selectionStart;
        } 
        else if (numkeys.includes(e.key)) {
          this.setState.cardDigits[cardNum][selectionStart] = e.key;
          }
        }
        
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
        else if(cardNum.length === 16) {
            let safeCardNum = cardNum;
            safeCardNum = safeCardNum.toString().replace(/\d(?=\d{4})/g, "*");
            return safeCardNum;
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

            
            <div className = "form-inline">
                <input name = "cardNum" type = "number" className = "form-control" placeholder = "Enter your card number" value = {this.state.cardNum} required onChange={this.handleChange}/>
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