import FieldLayout from "./FieldLayout";
import { store } from '../src/store';
import * as CONST from './Const';
import { SET_CURRENT_PLAYER, SET_STATUS, SET_FIELD, SET_WINNER } from '../src/actions';

export default function Field() {

    const { field, currentPlayer, status} = store.getState();

    // Функция для проверки окончания игры
    function isEnd(field) {

      // Проверка на победу 
      for (let subarr of CONST.WIN_PATTERNS) {
        if (field[subarr[0]] !== '' 
          && field[subarr[0]] === field[subarr[1]] 
          && field[subarr[0]] === field[subarr[2]]) {
            // store.dispatch({ type: 'SET_STATUS', payload: CONST.STATUS.WIN });
            // store.dispatch({ type: 'SET_WINNER', payload: field[subarr[0]] });
            return CONST.STATUS.WIN;
        }
      }
      
      // Проверка на ничью
      if (!field.some(elem => elem === '')) {
        return CONST.STATUS.DRAW;
        // store.dispatch({ type: 'SET_STATUS', payload: CONST.STATUS.DRAW })
      }

    }
    
    // Обработчик нажатия на ячейку
    function onPush(id) {
        let arr = [...field];
        if (status === CONST.STATUS.DRAW || status === CONST.STATUS.WIN || arr[id]) {
          return;
        } 
        // Условный блок для заполенения ячейки текущим игроком
          arr[id] = currentPlayer;
          store.dispatch(SET_FIELD(arr));
          // Проверка на конец игры 
          let result = isEnd(arr);
          if(result === CONST.STATUS.WIN) {
            store.dispatch(SET_STATUS(CONST.STATUS.WIN));
            store.dispatch(SET_WINNER(currentPlayer));
            return;
          } else if(result === CONST.STATUS.DRAW) {
            store.dispatch(SET_STATUS(CONST.STATUS.DRAW));
            return;
          }
          const currentPlayerForDispatch = currentPlayer === CONST.PLAYER.X ? CONST.PLAYER.O : CONST.PLAYER.X;
          store.dispatch(SET_CURRENT_PLAYER(currentPlayerForDispatch));
          // store.dispatch({ type: 'SET_FIELD', payload: arr })
          // store.dispatch({ type: 'SET_CURRENT_PLAYER', payload: currentPlayer === CONST.PLAYER.X ? CONST.PLAYER.O : CONST.PLAYER.X })
        
    }

    return (
        <FieldLayout status={status} field={field} onPush={onPush}/>
    )
  }
