export const ACTIONS_TYPES = {
    SET_CURRENT_PLAYER: 'SET_CURRENT_PLAYER',
    SET_STATUS: 'SET_STATUS',
    SET_FIELD: 'SET_FIELD',
    SET_RESULT: 'SET_RESULT',
    SET_WINNER: 'SET_WINNER',
    RESTART_GAME: 'RESTART_GAME',
}

export const SET_CURRENT_PLAYER = (currentPlayer) => ({
    type: ACTIONS_TYPES.SET_CURRENT_PLAYER,
    payload: currentPlayer,
})

export const SET_STATUS = (status) => ({
    type: ACTIONS_TYPES.SET_STATUS,
    payload: status,
})

export const SET_FIELD = (field) => ({
    type: ACTIONS_TYPES.SET_FIELD,
    payload: field,
})

export const SET_RESULT = (result) => ({
    type: ACTIONS_TYPES.SET_RESULT,
    payload: result,
})

export const SET_WINNER = (winner) => ({
    type: ACTIONS_TYPES.SET_WINNER,
    payload: winner,
})

export const RESTART_GAME = () => ({
    type: ACTIONS_TYPES.RESTART_GAME,
})

