import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './constants';

const initialStateSearch = {
    searchField: ''
}

const initialStateRobots = {
    isPending: false,
    robots: [],
    error: '',
    requestHasFailed: false
}

export const searchRobots = (state = initialStateSearch, action = {}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return { ...state, searchField: action.payload };
        default:
            return state;
    }
}

/*
There are 3 different states:
    Waiting for the API call.
    Receiving successful response, setting state
    Receiving error from API call, setting state
*/
export const requestRobots = (state = initialStateRobots, action = {}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return { ...state, isPending: true }
        case REQUEST_ROBOTS_SUCCESS:
            return { ...state, robots: action.payload, isPending: false }
        case REQUEST_ROBOTS_FAILED:
            return { ...state, error: action.payload, isPending: false, requestHasFailed: true }
        default:
            return state
    }
}