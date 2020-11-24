import * as actions from './actionTypes.js';

export function bugAdded(params) {
    return {
        type: actions.BUG_ADDED,
        payload: {
            description: 'bug1'
        }
    }
}