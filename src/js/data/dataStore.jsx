import { createStore } from 'redux';

export const actionTypes = {
    SET_API_URL: 'SET_API_URL'
};

export function getStore() {
    return store;
}

const store = createStore(reducer);

function defaultState() {
    return {
        apiUrl: {}
    };
}

function reducer(state = defaultState(), action) {
    const { type, payload } = action;
    switch (type) {
        case actionTypes.SET_API_URL:
            return Object.assign({}, state, payload);
        default: return state;
    }
}

export function setApiUrl(apiUrl) {
    return {
        type: actionTypes.SET_API_URL,
        payload: { apiUrl },
    };
}