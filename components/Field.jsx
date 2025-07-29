import FieldLayout from "./FieldLayout";
import { store } from '../src/store';
import * as CONST from './Const';
import { SET_CURRENT_PLAYER, SET_STATUS, SET_FIELD, SET_WINNER } from '../src/actions';

export default function Field() {

    const { field, currentPlayer, status } = store.getState();

    // Функция для проверки окончания игры
    function isEnd(field) {

      // Проверка на победу 
      for (let subarr of CONST.WIN_PATTERNS) {
        if (field[subarr[0]] !== '' 
          && field[subarr[0]] === field[subarr[1]] 
          && field[subarr[0]] === field[subarr[2]]) {
            return CONST.STATUS.WIN;
        }
      }
      // Проверка на ничью
      if (!field.some(elem => elem === '')) {
        return CONST.STATUS.DRAW;
      }
    }
    
    // Обработчик нажатия на ячейку
    function onPush(id) {
      if (status === CONST.STATUS.WIN || status === CONST.STATUS.DRAW || field[id]) {
        return;
      } else {
          let arr = [...field];
          arr[id] = currentPlayer;
          store.dispatch(SET_FIELD(arr));
          let result = isEnd(arr);
          if (result === CONST.STATUS.WIN) {
            store.dispatch(SET_STATUS(CONST.STATUS.WIN));
            store.dispatch(SET_WINNER(currentPlayer));
          } else if (result === CONST.STATUS.DRAW) {
            store.dispatch(SET_STATUS(CONST.STATUS.DRAW));
          }
      }      
      const currentPlayerForDispatch = currentPlayer === CONST.PLAYER.X ? CONST.PLAYER.O : CONST.PLAYER.X;
      store.dispatch(SET_CURRENT_PLAYER(currentPlayerForDispatch));
      return;
    }

    return (
        <FieldLayout field={field} onPush={onPush}/>
    )
  }
