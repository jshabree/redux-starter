import React from 'react'

export default function Error( {message}) {
    console.log(message)
    return (
        <div>
        {message.map(item =>  <p style={{color: "red"}}>{item}</p> )}
           
        </div>
    )
}
