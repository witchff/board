import React from 'react';
import Button from 'shared/UI/Button/Button';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Button
        as={'button'}
        size='medium'
        variant='fill'
        backColor='gray'
      >
        Оформить доставку
      </Button>
    </div>
  );
}

export default App;
