import * as actions from './actionTypes.js';


let lastId = 0; // counter for Id


export default function reducer(state = [], action) {
    switch(action.type) {
        case actions.BUG_ADDED: 
            return [
                ...state,   // copying all the bugs in current state
                {           // bug object
                    id: ++lastId,
                    description: action.payload.description,
                    resolved: false
                }
            ];
            
        case actions.BUG_REMOVED: 
            return state.filter(bug => bug.id !== action.payload.id);
        
        default :
            return state;
    }
}
