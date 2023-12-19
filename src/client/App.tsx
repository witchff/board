import React from 'react';
import styles from './App.module.scss';
import Button from 'shared/UI/Button/Button';

function App() {
  return (
    <div className={styles.app}>
      <Button
        as='button'
        size='medium'
        variant='outline'
        backColor='gray'
      >
        Оформить доставку
      </Button>
    </div>
  );
}

export default App;
