
function emptyLink() {
    function handleClick(e) {
        e.preventDefault()
        console.log("Link was clicked");
    }


    return (
        <a href = "#" onClick = {handleClick}>
            Click me
        </a>   
    );
}

export default emptyLink;