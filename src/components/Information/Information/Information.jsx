import { useSelector } from 'react-redux';
import * as CONST from '../../../CONST';
 
export default function Information () {
  const status = useSelector(state => state.status);
  const currentPlayer = useSelector(state => state.currentPlayer);
  const winner = useSelector(state => state.winner);

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