import { useState, useEffect } from 'react';
import { store } from '../src/store';
import Information from './Information';
import Field from './Field';
import RestartButton from './RestartButton';
import styles from './App.module.css';

export default function App() {
  const [render, setRender] = useState(0);
  useEffect(() => {
    let unsubscribe = store.subscribe(() => {
      setRender(Date.now());
    })
    return () => unsubscribe();
  }, [])

  return (
    <div className={styles.gameDiv}>
      <Information />
      <Field />
      <RestartButton /> 
    </div>
  )
}