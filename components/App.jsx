import { useState, useEffect } from 'react';

import Information from './Information';
import Field from './Field';
import RestartButton from './RestartButton';
import { store } from '../src/store';

export default function App() {

  const [render, setRender] = useState(0);
  
  useEffect(() => {
        let unsubscribe = store.subscribe(() => {
          setRender(Date.now());
        });
        return () => unsubscribe();
  }, []);

  return (
    <>
      <Information />
      <Field />
      <RestartButton /> 
    </>
  )
}