import * as CONST from './Const';
import { store } from '../src/store';
import styles from "./RestartButton.module.css";

export default function RestartButton() {
    function restartGame() {

        setStatus(CONST.STATUS.TURN);
        setCurrentPlayer(CONST.PLAYER.X);
        setField(['', '', '','', '', '','', '', '']);
        setWinner('');
    }

    return <button className={styles.restartButton}>Начать заново</button>
}