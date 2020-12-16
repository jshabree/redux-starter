export function getDataFromServer(apiPath, requestMethod) {
    let myHeaders = new Headers();
    myHeaders.append("Content-type", "application/json");

    if(requestMethod !== 'GET' && requestMethod !== '') {
        return fetch(apiPath, { method: 'POST', headers: myHeaders });
    }

    else {
        return fetch(apiPath, { method: 'GET', headers: myHeaders });
    }
}

export function getDataFromServerForPosting(apiPath, requestMethod, formBody) {
    let myHeaders = new Headers();
    myHeaders.append("Content-type", "application/json");

    if(formBody) {
        let fetchData = {
            method: requestMethod,
            body: formBody,
            headers: myHeaders
        };

        return fetch(apiPath, fetchData);
    }

}