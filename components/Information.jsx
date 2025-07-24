import { useState, useEffect } from 'react';
import { store } from '../src/store';

export default function Information () {
  const [result, setResult] = useState(store.getState().result);

  useEffect(() => {
    let unsubscribe = store.subscribe(() => {
      setResult(store.getState().result);
    });
    unsubscribe();
  }, []);

  return (
    <div>{result}</div>
  )
}