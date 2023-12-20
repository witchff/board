import React from 'react';
import styles from './App.module.scss';
import InputContainer, {
  Input,
  InputText,
} from 'shared/UI/Input/Input';

function App() {
  return (
    <div className={styles.app}>
      <InputContainer id='name' width='420px'>
        <InputText
          style={{
            color: '#828b8d',
            fontSize: '12px',
            fontWeight: '400',
            lineHeight: '20px',
            letterSpacing: '-0.24px',
            marginBottom: '10px',
          }}
        >
          Ваш email
        </InputText>
        <Input />
        <InputText
          style={{
            color: '#eb5757',
            fontSize: '12px',
            fontWeight: '500',
            lineHeight: '25px',
            letterSpacing: '-0.24px',
            marginBottom: '4px',
            textAlign: 'right',
          }}
        >
          Ваш email
        </InputText>
      </InputContainer>
    </div>
  );
}

export default App;
