let lastId = 0; // counter for Id


export default function reducer(state = [], action) {
    switch(action.type) {
        case 'bugAdded':
            return [
                ...state,   // copying all the bugs in current state
                {           // bug object
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ];
            
        case 'bugRemoved': 
            return state.filter(bug => bug.id !== action.payload.id);
        
        default :
            return state;
    }
}
