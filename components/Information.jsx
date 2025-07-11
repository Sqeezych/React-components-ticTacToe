import * as CONST from './Const';
import { store } from '../src/store';
import InformationLayout from './InformationLayout';

export default function Information () {

  // Получаем данные из стора вместо прокидывания пропсов
  const { status, currentPlayer, winner } = store.getState();

  let result;

  if (status === CONST.STATUS.WIN) {
    result = `Победил ${winner}`;
  } else if (status === CONST.STATUS.DRAW) {
    result = `Ничья`;
  } else {
    result = `Ход игрока ${currentPlayer}`;
  }

  return (
    <InformationLayout result={result} />
  )
}