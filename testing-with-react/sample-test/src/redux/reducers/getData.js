import * as Types from "../actions/types";

const initialObject = {
    result: {},
    info: []
};

const handleDataSuccess = (state, action) => {
    console.log("Success! data is being displayed" + JSON.stringify(action));
    let newState = {...state};
    if(action.result !== undefined) {
        newState = Object.assign({}, state, {
            info: Object.assign([], action.result)
        });
    }

    console.log("State =>" + JSON.stringify(newState));
    return {...newState};
}

const handleDataFailure = (state) => {
    let newState = {...state};
    return {...newState};
};

export default ( state = initialObject, action) => {
    switch(action.type) {
        case Types.GET_DATA:
            return state;
        case Types.GET_DATA_SUCCESS:
            return handleDataSuccess(state, action);
        case Types.GET_DATA_FAIL:
            return handleDataFailure(state);
        default:
            return state;
    }
};