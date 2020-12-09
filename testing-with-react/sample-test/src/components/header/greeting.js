function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn) {
        return <UserGreeting />;
    }

        return <GuestGreeting />;
}

function UserGreeting(props) {
    return <h1> Welcome back, registered user </h1>
}

function GuestGreeting(props) {
    return <h1> Please log in.  </h1>
}

export default Greeting;