import { store } from '../src/store';
import styles from "./RestartButton.module.css";
import { RESTART_GAME } from '../src/actions';

export default function RestartButton() {

    function restartGame() {
        store.dispatch(RESTART_GAME());
        // store.dispatch({ type: 'RESTART_GAME' });
    }

    return <button onClick={restartGame} className={styles.restartButton}>Начать заново</button>
}