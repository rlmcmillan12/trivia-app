import { SEARCH, SET_RESULTS } from "./action"

const defaultState = {
    results: null,
    searchParams: null,
}

export const multipleChoiceSearch = (state = defaultState, action) => {
    switch (action.type) {
        case SEARCH:
            return {
                ...state,
                searchParams: action.searchParams,
            }
        case SET_RESULTS:
            return {
                ...state,
                results: action.results
            }
        default:
            return state
    }
}