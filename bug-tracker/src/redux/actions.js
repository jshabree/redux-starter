import * as actions from './actionTypes.js';

export const bugAdded = description => ({
        type: actions.BUG_ADDED,
        payload: {
        description: 'bug1'
    }
})

// export function bugAdded(params) {
//     return {
//         type: actions.BUG_ADDED,
//         payload: {
//             description: 'bug1'
//         }
//     }
// }