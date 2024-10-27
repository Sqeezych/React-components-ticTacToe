import FieldLayout from "./FieldLayout";
import * as CONST from './Const'

export default function Field({ field, setField, currentPlayer, setCurrentPlayer, status, setStatus, winner, setWinner}) {

    // Функция для проверки окончания игры
    function isEnd(field) {

      // Проверка на победу 
      for (let subarr of CONST.WIN_PATTERNS) {
        if (field[subarr[0]] !== '' 
          && field[subarr[0]] === field[subarr[1]] 
          && field[subarr[0]] === field[subarr[2]]) {
            setStatus(CONST.STATUS.WIN)
            setWinner(field[subarr[0]])
            return
        }
      }
      
      // Проверка на ничью
      if (!field.some(i => i === '')) {
        setStatus(CONST.STATUS.DRAW)
      }

    }
    
    // Обработчик нажатия на ячейку
    function onPush(event) {
        const id = event.target.id
        let arr = [...field]

        if(status !== CONST.STATUS.DRAW || status !== CONST.STATUS.WIN) {
          arr[id] = currentPlayer
          setField(arr)
          setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
        }
        isEnd(arr)
    }

    return (
        <FieldLayout status={status} field={field} onPush={onPush} />
    )
  }
