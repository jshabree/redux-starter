import {useRef} from 'react';

function TextInputWithFocusButton() {
    const input = useRef(null);
    const onButtonClick = () => {
        input.current.focus();
    };

    return(
        <>
            <input ref = {input} type = "text" />
            <button onClick = {onButtonClick}> Focus the input </button>
        </>
    );
}

export default TextInputWithFocusButton;