import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import reducers from "../reducers/index";

const sagaMiddleware = createSagaMiddleware();

let middleWare = [sagaMiddleware];

if(process.env.NODE_ENV === 'development') {
    middleWare.push(logger);
}

const store = createStore(reducers, applyMiddleware(...middleWare));

export default store;