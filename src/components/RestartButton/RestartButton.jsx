import { useDispatch } from 'react-redux';
import styles from "./RestartButton.module.css";
import { RESTART_GAME } from '../../actions';

export default function RestartButton() {
    const dispatch = useDispatch();

    function restartGame() {
        dispatch(RESTART_GAME());
    }

    return <button onClick={restartGame} className={styles.restartButton}>Начать заново</button>
}