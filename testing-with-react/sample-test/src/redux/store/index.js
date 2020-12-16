import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";
import reducers from "../reducers/index";
import rootSaga from "./sagas"
const sagaMiddleware = createSagaMiddleware();

let middleWare = [sagaMiddleware];

if(process.env.NODE_ENV === 'development') {
    middleWare.push(logger);
}

const store = createStore(reducers, applyMiddleware(...middleWare));

sagaMiddleware.run(rootSaga)
export default store;