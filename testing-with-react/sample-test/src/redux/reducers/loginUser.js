import * as Types from '../actions/types';

const initialObject = {
    "result": {},
    "user": {
        "username": "",
        "password": ""
    }
    
};


const handleLoginServerResponseSuccess = (state,action) => {
    console.log("Output is," + JSON.stringify(action));
    let newState = { ...state };
    if (action.result !== undefined) {
      newState = Object.assign({}, state, { "result": Object.assign({}, action.result) })
  
    }
    console.log("State is," + JSON.stringify(newState));
    return { ...newState };

}

const handleLoginServerResponseError = (state, action) => {
    let newState = {...state};
    return {...newState};

}
export default (state = initialObject, action) => {
    switch(action.type) {
        case Types.LOGIN_USER:
            return Object.assign({}, state)
        case Types.LOGIN_USER_SERVER_RESPONSE_SUCCESS:
            return handleLoginServerResponseSuccess(state, action);
        case Types.LOGIN_USER_SERVER_RESPONSE_ERROR:
            return handleLoginServerResponseError(state);
        default:
            return state; 
    }
}