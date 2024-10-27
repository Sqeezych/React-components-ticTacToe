import * as CONST from './Const'
import styles from './FieldLayout.module.css'

export default function FieldLayout ({ field, onPush, status}) {
    return (
        <div className={styles.FieldLayout}>
            {field.map((elem, id) => <button className={styles.itemButton} onClick={status === CONST.STATUS.TURN && onPush} key={id} id={id}>{elem}</button>)}
        </div>
    )
}