export const ADD_PLAYER = '/players/ADD_PLAYER'
export const CLEAR_PLAYERS = '/players/CLEAR_PLAYERS'
export const FIRST_IS_UP = 'players/FIRST_IS_UP'
export const NEXT_IS_UP = 'players/NEXT_PLAYER'
export const RESET_IS_UP = 'players/RESET_PLAYER'
export const UPDATE_SCORE = '/players/UPDATE_SCORE'

export const addPlayer = (player) => {
    return {
        type: ADD_PLAYER,
        player
    }
}

export const clearPlayers = () => {
    return {
        type: CLEAR_PLAYERS,
    }
}
export const firstIsUp = () => {
    return {
        type: FIRST_IS_UP
    }
}
export const nextIsUp = () => {
    return {
        type: NEXT_IS_UP,
    }
}
export const resetIsUp = () => {
    return {
        type: RESET_IS_UP,

    }
}

export const updateScore = (score) => {
    return {
        type: UPDATE_SCORE,
        score
    }
}