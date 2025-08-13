import * as CONST from './CONST.js';

const initialState = {
    currentPlayer: CONST.PLAYER.X,
    status: CONST.STATUS.TURN,
    field: Array(9).fill(''),
    winner: '',
};

export const reducer = (state = initialState, action) => {
    const { type, payload } = action;
    
    switch(type) {
        case 'SET_STATUS': {
            return {
                ...state,
                status: payload
            }
        }
        case 'SET_WINNER': {
            return {
                ...state,
                winner: payload
            }
        }
        case 'SET_FIELD': {
            return {
                ...state,
                field: payload
            }
        }
        case 'SET_CURRENT_PLAYER': {
            return {
                ...state,
                currentPlayer: payload
            }
        }
        case 'RESTART_GAME': {
            return initialState;
        }
        default: 
            return state;
    }
}