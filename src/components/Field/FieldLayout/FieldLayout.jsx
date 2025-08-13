import styles from './FieldLayout.module.css';

export default function FieldLayout ({ onPush, field }) {

    return (
        <div className={styles.FieldLayout}>
            {field.map((elem, id) => <button className={styles.itemButton} onClick={() => onPush(id)} key={id}>{elem}</button>)}
        </div>
    )
}