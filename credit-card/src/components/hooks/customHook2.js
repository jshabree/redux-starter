import {useState, useEffect} from 'react'

// useFriendStatus is a custom hook we will reuse at later stages
// useFriendStatus is used to subscribe to a friend's status to see 
// if he/she is online

function useFriendStatus(friendID) {

    // defining the hook

    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
        function handleStatusChange(status) {
            setIsOnline(status.isOnline)
        }

        ChatAPI.subscribe(friendID, handleStatusChange)

        return () => {
            ChatAPI.unsubscribe(friendID, handleStatusChange)
        }

    });


    return isOnline;
}

function FriendStatus(props) {
    const isOnline = useFriendStatus(props.friend.id);

    if(isOnline === null) {
        return "Loading....";        
    }
    return isOnline ? 'Online' : 'Offline';

}

function FriendLisItem(props) {
    const isOnline = useFriendStatus(props.friend.id);

    return(
        <li style = {{ color: isOnline ? 'green' : 'black '}}>
            {props.friend.name}
        </li>
    );
}