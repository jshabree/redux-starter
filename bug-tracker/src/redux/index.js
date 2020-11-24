import store from './store.js';
import * as actions from './actionTypes.js';

const unsubscribe = store.subscribe(() => {
    console.log("Store changed", store.getState());
});

    
store.dispatch({
    type: actions.BUG_ADDED,
    payload: {
        description: 'bug1'
    }
});

unsubscribe();

store.dispatch({
    type: actions.BUG_REMOVED,
    payload: {
        id:1
    }
})
console.log(store.getState());