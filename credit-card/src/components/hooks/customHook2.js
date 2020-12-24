import {useState, useEffect} from 'react'

// useFriendStatus is a custom hook we will reuse at later stages

export default function useFriendStatus(friendID) {

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
