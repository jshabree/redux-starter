let lastId = 0; // counter for Id


function reducer(state = [], action) {
    if (action.type == 'bugAdded') {
        return [
            ...state,   // copying all the bugs in current state
            {           // bug object
                id: ++lastId,
                description: action.payload.description,
                resolved: false
            }
        ];
    }
    else if (action.type === 'bugRemoved') {
        return state.filter(bug => bug.id !== action.payload.id);
    }
    return state;

}