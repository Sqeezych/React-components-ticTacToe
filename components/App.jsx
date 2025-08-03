import Information from './Information';
import Field from './Field';
import RestartButton from './RestartButton';
import styles from './App.module.css';

export default function App() {

  return (
    <div className={styles.gameDiv}>
      <Information />
      <Field />
      <RestartButton /> 
    </div>
  )
}