import { ADD_PLAYERS, ADD_ROUNDS, ADVANCE_GAME_STATE, ADVANCE_TURN_STATE, ADVANCE_TURN_STATE_TWO, DECREASE_GAME_STATE, NEXT_ROUND, RESET_CURRENT_ROUND, RESET_GAME_STATE, RESET_PLAYERS, RESET_ROUNDS, RESET_TURN_STATE } from "./action"


const defaultState = {
    gameState: 0,
    turnState: 0,
    players: 0,
    rounds: 0,
    currentRound: 0,
}

export function multipleChoiceGameReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_PLAYERS:
            return {
                ...state,
                players: state.players = action.players
            }
        case RESET_PLAYERS:
            return {
                ...state,
                players: 0
            }
        case ADD_ROUNDS:
            return {
                ...state,
                rounds: state.rounds = action.rounds
            }
        case RESET_ROUNDS:
            return {
                ...state,
                rounds: 0
            }
        case NEXT_ROUND:
            return {
                ...state,
                currentRound: state.currentRound + 1
            }
        case RESET_CURRENT_ROUND:
            return {
                ...state,
                currentRound: 0
            }
        case ADVANCE_TURN_STATE:
            return {
                ...state,
                turnState: state.turnState + 1
            }
        case ADVANCE_TURN_STATE_TWO:
            return {
                ...state,
                turnState: state.turnState + 2
            }
        case RESET_TURN_STATE:
            return {
                ...state,
                turnState: 0
            }
        case ADVANCE_GAME_STATE:
            return {
                ...state,
                gameState: state.gameState + 1
            }
        case DECREASE_GAME_STATE:
            return {
                ...state,
                gameState: state.gameState - 1
            }
        case RESET_GAME_STATE:
            return {
                ...state,
                gameState: 0
            }
        default:
            return state
    }
}