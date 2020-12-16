import {
    call,
    put,
    takeLatest
} from "redux-saga/effects";

import * as Types from "../actions/types";

import {
    getDataFromServer,
} from "../service";

function* fetchData(action) {
    try {
        const baseUrl = "https://jsonplaceholder.typicode.com/todos/";
        console.log("Action at sagas =>", JSON.stringify(action));
        const requestMethod = "";
        const response = yield call(getDataFromServer, baseUrl, requestMethod, "");

        const result = yield response.json();
        console.log("Result =>" + JSON.stringify(result));
        console.log("Result JSON" + result);

        if(result.error) {
            yield put ({
                type: "GET_DATA_FAIL",
                error: result.error
            });
        }

        else {
            yield put ({ type: Types.GET_DATA_SUCCESS, result });

        }
    } catch (error) {
        console.log(error);
    }

}

export default function* rootSaga(params) {
    yield takeLatest(Types.GET_DATA, fetchData);

    console.log("Root Saga");

}