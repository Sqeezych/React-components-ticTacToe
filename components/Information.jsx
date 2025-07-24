import { store } from '../src/store';
import * as CONST from './Const';

export default function Information () {

  const { status, winner, currentPlayer } = store.getState();
  let result = '';

  // Условный блок для отображения актуальной информации о текущем ходе
        if (status === CONST.STATUS.WIN) {
          result = `Победил ${winner}`;
        } else if (status === CONST.STATUS.DRAW) {
          result = `Ничья`;
        } else {
          result = `Ход игрока ${currentPlayer}`;
        }

  return (
    <div>{result}</div>
  )
}