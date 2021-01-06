export function getDataFromServer(apiPath, requestedMethod, formBody) {
    let myHeaders = new Headers();
    myHeaders.append('Content-type', 'application/json');


    if (!requestedMethod && requestedMethod !== "POST") {
        return fetch(apiPath, { method: 'GET', headers: myHeaders })

    } 
    else {
        if (formBody) {
            let fetchData = {
                method: 'POST',
                body: JSON.stringify(formBody),
                headers: myHeaders
            }

            return fetch(apiPath, fetchData);
        }
    }
}

export function getDataFromServerToPost(apiPath, requestedMethod, formBody) {
    let myHeaders = new Headers();
   

    myHeaders.append('Content-type', 'application/json');
    if (formBody) {
        let fetchData = {
            method: 'POST',
            body: formBody,
            headers: myHeaders
        }
        return fetch(apiPath, fetchData);
    }
}