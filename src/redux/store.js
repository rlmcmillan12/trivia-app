import { composeWithDevTools } from "@redux-devtools/extension"
import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import { multipleChoiceGameReducer } from "./multipleChoiceGame/reducer"
import { multipleChoiceSearch } from "./multipleChoiceSearch/reducer"
import { playersReducer } from "./players/reducer"
import { trueOrFalseGameReducer } from "./trueOrFalseGame/reducer"

const localCache = (store) => (next) => (action) => {
    next(action)
    const state = store.getState()
    localStorage.setItem('trivia-app', JSON.stringify(state))
}

const rootReducer = combineReducers(

    {
        players: playersReducer,
        multipleChoiceGame: multipleChoiceGameReducer,
        multipleChoiceSearch: multipleChoiceSearch,
        trueOrFalseGame: trueOrFalseGameReducer,
    }
)

const defaultState = {

    players: undefined,
    multipleChoiceGame: undefined,
    multipleChoiceSearch: undefined,

}
export const store = createStore(
    rootReducer,
    JSON.parse(localStorage.getItem('trivia-app')) || defaultState,
    composeWithDevTools(applyMiddleware(thunk, 
        localCache
        ))
)