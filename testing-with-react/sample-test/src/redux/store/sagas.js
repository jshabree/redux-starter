import { call, put, takeLatest} from 'redux-saga/effects';
import * as Types from '../actions/types';
import {getDataFromServer} from '../service';

const baseUrl = ' ';

function* fetchLoginUser(action) {
    try {
        console.log("Action->" + JSON.stringify(action));
        let formBody = {};
        formBody.username = " ";
        formBody.password = " "; 

        const loginUrl = baseUrl + '/view';
        const response = yield call(getDataFromServer, loginUrl, '', '');

        const result = yield response.json();

        console.log("Result," + JSON.stringify(result))
        console.log('Result JSON' + result);

        if (result.error) {
            yield put({ type: Types.LOGIN_USER_SERVER_RESPONSE_ERROR, error: result.error });
        } 
    
        else {
            yield put({ type: Types.LOGIN_USER_SERVER_RESPONSE_SUCCESS, result });
        }

    }
    

    catch (error) {
        console.log(error);
    }
}

export default function* rootSaga(params) {
    yield takeLatest(Types.LOGIN_USER, fetchLoginUser);
     
    console.log("root saga");  
}