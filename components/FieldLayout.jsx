import * as CONST from './Const';
import { store } from '../src/store';
import styles from './FieldLayout.module.css';

export default function FieldLayout () {
    // Получаем данные из стора вместо прокидывания пропсов
    const { field, onPush, status } = store.getState();

    return (
        <div className={styles.FieldLayout}>
            {field.map((elem, id) => <button className={styles.itemButton} onClick={status === CONST.STATUS.TURN && onPush} key={id} id={id}>{elem}</button>)}
        </div>
    )
}