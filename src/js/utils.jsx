import React from 'react';
import { get } from 'axios';

export function prettyPrintJson(data) {
    return (
        <pre>{JSON.stringify(data, null, 2)}</pre>
    );
}

export function queryApi(request) {
    if (request) {
        return new Promise((resolve, reject) => {
            get(request)
                .then(response => resolve(response.data))
                .catch(error => reject(xhrError(error)));
        });
    } else {
        const error = "No target API URL defined.";
        return new Promise((resolve, reject) => {reject(xhrError(error))});
    }
}

function xhrError(error) {
    console.error("Error: unable to fetch data from the API.");
    console.error(error);
}