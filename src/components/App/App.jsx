import Information from '../Information/Information/Information.jsx';
import Field from '../Field/Field/Field.jsx';
import RestartButton from '../RestartButton/RestartButton.jsx';
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