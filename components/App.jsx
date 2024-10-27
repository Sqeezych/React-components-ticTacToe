import { useState } from 'react'
import * as CONST from './Const'

import Information from './Information';
import Field from './Field'
import styles from './App.module.css'

export default function App() {

  const [currentPlayer, setCurrentPlayer] = useState(CONST.PLAYER.X);
  const [status, setStatus] = useState(CONST.STATUS.TURN)
  const [field, setField] = useState(['', '', '','', '', '','', '', '']);
  const [winner, setWinner] = useState('')

  // Обнуление игры 
  function restartGame() {
    setStatus(CONST.STATUS.TURN)
    setCurrentPlayer(CONST.PLAYER.X)
    setField(['', '', '','', '', '','', '', ''])
    setWinner('')
  }

  return (
    <>
      <Information status={status} currentPlayer={currentPlayer} winner={winner} />
      <Field 
      field={field}
      setField={setField}
      currentPlayer={currentPlayer}
      setCurrentPlayer={setCurrentPlayer}
      status={status} 
      setStatus={setStatus}
      winner={winner} 
      setWinner={setWinner} />
      <button className={styles.restartButton} onClick={restartGame}>Начать заново</button>
    </>
  )
}
