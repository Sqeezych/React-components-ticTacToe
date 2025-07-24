import { useState, useEffect } from 'react';
import FieldLayout from "./FieldLayout";
import { store } from '../src/store';
import * as CONST from './Const';
import { SET_CURRENT_PLAYER, SET_STATUS, SET_FIELD, SET_RESULT } from '../src/actions';
// import { setCurrentPlayer, setField, setStatus } from '../src/actions';

export default function Field() {

    const [currentPlayer, setCurrentPlayer] = useState(store.getState().currentPlayer);
    const [status, setStatus] = useState(store.getState().status);
    const [field, setField] = useState(store.getState().field);

    useEffect(() => {
      let unsubscribe = store.subscribe(() => {
        setCurrentPlayer(store.getState().currentPlayer);
        setStatus(store.getState().status);
        setField(store.getState().field);
      });
      unsubscribe();
    }, []);

    // Функция для проверки окончания игры
    function isEnd(field) {

      // Проверка на победу 
      for (let subarr of CONST.WIN_PATTERNS) {
        if (field[subarr[0]] !== '' 
          && field[subarr[0]] === field[subarr[1]] 
          && field[subarr[0]] === field[subarr[2]]) {
            store.dispatch(SET_STATUS(CONST.STATUS.WIN));
            store.dispatch(SET_WINNER(field[subarr[0]]));
            // store.dispatch({ type: 'SET_STATUS', payload: CONST.STATUS.WIN });
            // store.dispatch({ type: 'SET_WINNER', payload: field[subarr[0]] });
            return;
        }
      }
      
      // Проверка на ничью
      if (!field.some(elem => elem === '')) {
        store.dispatch(SET_STATUS(CONST.STATUS.DRAW));
        // store.dispatch({ type: 'SET_STATUS', payload: CONST.STATUS.DRAW })
      }

    }
    
    // Обработчик нажатия на ячейку
    function onPush(event) {
        const id = event.target.id;
        let arr = [...field];
        let result;

        // Условный блок для заполенения ячейки текущим игроком
        if(status !== CONST.STATUS.DRAW || status !== CONST.STATUS.WIN) {
          arr[id] = currentPlayer;
          const currentPlayerForDispatch = currentPlayer === CONST.PLAYER.X ? CONST.PLAYER.O : CONST.PLAYER.X;
          store.dispatch(SET_FIELD(arr));
          store.dispatch(SET_CURRENT_PLAYER(currentPlayerForDispatch));
          // store.dispatch({ type: 'SET_FIELD', payload: arr })
          // store.dispatch({ type: 'SET_CURRENT_PLAYER', payload: currentPlayer === CONST.PLAYER.X ? CONST.PLAYER.O : CONST.PLAYER.X })
        }

        // Условный блок для отображения актуальной информации о текущем ходе
        if (status === CONST.STATUS.WIN) {
          result = `Победил ${winner}`;
        } else if (status === CONST.STATUS.DRAW) {
          result = `Ничья`;
        } else {
          result = `Ход игрока ${currentPlayer}`;
        }
        store.dispatch(SET_RESULT(result))
        // store.dispatch({ type: 'SET_RESULT', payload: result })

        // Проверка на конец игры 
        isEnd(arr);
    }

    return (
        <FieldLayout onPush={onPush}/>
    )
  }
