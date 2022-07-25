import { DECREMENT_COUNTER, INCREMENT_MAX, INCREMENT_STREAK, RESET_COUNTER, RESET_STREAK } from "./action"


const defaultState = {
    counter: 10,
    streak: 0,
    max: 0
}

export function trueOrFalseGameReducer(state = defaultState, action) {
    switch (action.type) {
        case DECREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter - 1
            }
        case RESET_COUNTER:
            return {
                ...state,
                counter: 10
            }
        case INCREMENT_STREAK:
            return {
                ...state,
                streak: state.streak + 1
            }
        case RESET_STREAK:
            return {
                ...state,
                streak: state.streak = 0,
            }
        case INCREMENT_MAX:
            return {
                ...state,
                max: state.max + 1,
            }
        default:
            return state
    }
}