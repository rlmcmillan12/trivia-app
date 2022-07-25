export const DECREMENT_COUNTER = 'trueOrFalseGame/DECREMENT_COUNTER'
export const RESET_COUNTER = 'trueOrFalseGame/RESET_COUNTER'
export const INCREMENT_STREAK = 'trueOrFalseGame/INCREMENT_STREAK'
export const RESET_STREAK = 'trueOrFalseGame/RESET_STREAK'
export const INCREMENT_MAX = 'trueOrFalseGame/INCREMENT_MAX'
export const decrementCounter = () => {
    return {
        type: DECREMENT_COUNTER
    }
}
export const resetCounter = () => {
    return {
        type: RESET_COUNTER,
    }
}
export const incrementStreak = () => {
    return {
        type: INCREMENT_STREAK,
    }
}
export const resetStreak = () => {
    return {
        type: RESET_STREAK,
    }
}
export const incrementMax = () => {
    return {
        type: INCREMENT_MAX,
    }
}