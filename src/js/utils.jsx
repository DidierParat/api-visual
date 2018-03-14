import React from 'react';
import { get } from 'axios';

export function prettyPrintJson(data) {
    return (
        <pre>{JSON.stringify(data, null, 2)}</pre>
    );
}

export function queryApi(request) {
    return new Promise((resolve, reject) => {
        get(request)
            .then(response => resolve(response.data))
            .catch(error => reject(error));
    });
}