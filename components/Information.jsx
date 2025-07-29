import { store } from '../src/store';
import * as CONST from './Const';
 
export default function Information () {

  const { status, currentPlayer, winner } = store.getState();

  let result;

  if (status === CONST.STATUS.WIN) {
    result = `Победил ${winner}`;
  } else if (status === CONST.STATUS.DRAW) {
    result = `Ничья`;
  } else {
    result = `Ход игрока ${currentPlayer}`;
  }

  return <div>{result}</div>
}