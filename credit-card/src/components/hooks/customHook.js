import React, {useState, useEffect} from 'react'

export default function CustomHook() {

    const [name, setName] = useState('Mary');

    useEffect(function persistForm() {
        localStorage.setItem('formData', name);
    });

    const [lastName, setLastName] = useState('Poppins');

    useEffect(function updateName() {
        document.title = name + ' ' + lastName;
    });

    return (
        <div>

        <p> Full name is {name} {lastName} </p>
            
        </div>
    )
}
