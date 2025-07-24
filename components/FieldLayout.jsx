import { useState, useEffect } from 'react';
import { store } from '../src/store';
import * as CONST from '../components/Const';
import styles from './FieldLayout.module.css';

export default function FieldLayout ({ onPush }) {
    const [status, setStatus] = useState(store.getState().status);
    const [field, setField] = useState(store.getState().field);

    useEffect(() => {
      let unsubscribe = store.subscribe(() => {
        setStatus(store.getState().status);
        setField(store.getState().field);
      });
      unsubscribe();
    }, []);

    return (
        <div className={styles.FieldLayout}>
            {field.map((elem, id) => <button className={styles.itemButton} onClick={status === CONST.STATUS.TURN && onPush} key={id} id={id}>{elem}</button>)}
        </div>
    )
}