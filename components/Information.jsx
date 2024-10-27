import * as CONST from './Const'
import InformationLayout from './InformationLayout'

export default function Information ({ status, currentPlayer, winner }) {

    let result

    if (status === CONST.STATUS.WIN) {
      result = `Победил ${winner}`
    } else if (status === CONST.STATUS.DRAW) {
      result = `Ничья`
    } else {
      result = `Ход игрока ${currentPlayer}`
    }

    return (
      <InformationLayout result={result} />
    )
  }