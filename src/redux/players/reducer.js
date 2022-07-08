import { ADD_PLAYER, CLEAR_PLAYERS, FIRST_IS_UP, NEXT_IS_UP, RESET_IS_UP, UPDATE_SCORE } from "./action"

const defaultState = {
    players: [],
    isUp: 0,
}

export function playersReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_PLAYER:
            return {
                ...state,
                players: [action.player, ...state.players]
            }
        case CLEAR_PLAYERS:
            return {
                ...state,
                players: []
            }
        case FIRST_IS_UP:
            return {
                ...state,
                isUp: 0
            }
        case NEXT_IS_UP:
            return {
                ...state,
                isUp: state.isUp + 1
            }
        case RESET_IS_UP:
            return {
                ...state,
                isUp: 0
            }
        case UPDATE_SCORE:
            return {
                ...state,
                players: state.players.map((player, i) => {
                    if (i === state.isUp) {
                        player.score += action.score
                    }
                    return player
                })
            }
        default:
            return state
    }
}