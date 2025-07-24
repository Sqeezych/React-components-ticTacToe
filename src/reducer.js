import * as CONST from '../components/Const';

const initialState = {
    currentPlayer: CONST.PLAYER.X,
    status: CONST.STATUS.TURN,
    field: Array(9).fill(''),
    winner: '',
    result: 'Начинает игру X',
};

export const reducer = (action, state = initialState) => {
    const { type, payload } = action;
    
    switch(type) {
        case 'SET_RESULT': {
            return {
                ...state,
                result: payload
            }
        }
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
            return state;
        }
        default: 
            return state;
    }
}