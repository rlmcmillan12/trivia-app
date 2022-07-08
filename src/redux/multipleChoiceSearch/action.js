export const SEARCH = 'multipleChoiceSearch/SEARCH'
export const SET_RESULTS = 'multipleChoiceSearch/SET_RESULTS'

export const search = (searchParams) => {
    return {
        type: SEARCH,
        searchParams: searchParams,
    }
}
export const setResults = (results) => {
    return {
        type: SET_RESULTS,
        results
    }
}
export const startSearch = (searchParams) => {
    return (dispatch) => {
        dispatch(search(searchParams))
        fetch(`https://the-trivia-api.com/api/questions?${searchParams.category}&limit=1&region=US&difficulty=${searchParams.difficulty}`)
            .then(res => res.json())
            .then(data => dispatch(setResults(data[0])))
    }
}