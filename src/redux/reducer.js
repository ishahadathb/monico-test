import {
    SET_SEARCH_TERM,
    SET_SORTING_TYPE
} from "./actions";

import generator from '../Api/Api'

/* initial states of the application */
const DEFAULT_STATE = {
    searchTerm: "",
    products: generator(20)
};
let sortingInitialState = {
    sortingType: ''
};


/* reducer for handling search */
const setSearchTerm = (state, action) => {
    return Object.assign({}, state, {searchTerm: action.payload})
};

/* reducer for hydrating and handling products section*/
const setSortingType = (state = sortingInitialState, action) => {
    return Object.assign({}, state,{sortingType: action.payload})
};


const rootReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SET_SEARCH_TERM:
            return setSearchTerm(state, action);
        case SET_SORTING_TYPE:
            return setSortingType(state, action);
        default:
            return DEFAULT_STATE;
    }
}

export default rootReducer;