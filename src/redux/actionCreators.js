import {SET_SEARCH_TERM} from "./actions";
import {SET_SORTING_TYPE} from "./actions";

function setSearchTern(searchTerm) {
    return {type: SET_SEARCH_TERM, payload: searchTerm}
}

function setSortingType(sortingType) {
    return {type: SET_SORTING_TYPE, payload: sortingType}
}

export {setSearchTern, setSortingType}
