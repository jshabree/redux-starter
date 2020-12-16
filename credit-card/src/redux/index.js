import store from './store.js';
import { bugAdded } from './actions.js';


store.dispatch(bugAdded("Bug 1"));

console.log(store.getState());