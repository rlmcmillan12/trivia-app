export const ADD_PLAYERS = 'multipleChoiceGame/ADD_PLAYERS'
export const RESET_PLAYERS = 'multipleChoiceGame/RESET_PLAYERS'
export const ADD_ROUNDS = 'multipleChoiceGame/ADD_ROUNDS'
export const RESET_ROUNDS = 'multipleChoiceGame/RESET_ROUNDS'
export const NEXT_ROUND = 'multipleChoiceGame/NEXT_ROUND'
export const RESET_CURRENT_ROUND = 'multipleChoiceGame/RESET_CURRENT_ROUND'
export const ADVANCE_TURN_STATE = '/multipleChoiceGame/ADVANCE_TURN_STATE'
export const ADVANCE_TURN_STATE_TWO = '/multipleChoiceGame/ADVANCE_TURN_STATE_TWO'
export const RESET_TURN_STATE = 'multipleChoiceGame/RESET_TURN_STATE'
export const ADVANCE_GAME_STATE = 'multipleChoiceGame/ADVANCE_GAME_STATE'
export const DECREASE_GAME_STATE = 'multipleChoiceGame/DECREASE_GAME_STATE'
export const RESET_GAME_STATE = 'multipleChoiceGame/RESET_GAME_STATE'

export const addPlayers = (players) => {
    return {
        type: ADD_PLAYERS,
        players
    }
}
export const resetPlayers = () => {
    return {
        type: RESET_PLAYERS
    }
}
export const addRounds = (rounds) => {
    return {
        type: ADD_ROUNDS,
        rounds
    }
}
export const resetRounds = () => {
    return {
        type: RESET_ROUNDS,
    }
}
export const nextRound = () => {
    return {
        type: NEXT_ROUND,
    }
}
export const resetCurrentRound = () => {
    return {
        type: RESET_CURRENT_ROUND,
    }
}
export const advanceTurnState = () => {
    return {
        type: ADVANCE_TURN_STATE
    }
}
export const advanceTurnStateTwo = () => {
    return {
        type: ADVANCE_TURN_STATE_TWO
    }
}
export const resetTurnState = () => {
    return {
        type: RESET_TURN_STATE,
    }
}
export const advanceGameState = () => {
    return {
        type: ADVANCE_GAME_STATE
    }
}
export const decreaseGameState = () => {
    return {
        type: DECREASE_GAME_STATE
    }
}
export const resetGameState = () => {
    return {
        type: RESET_GAME_STATE,
    }
}