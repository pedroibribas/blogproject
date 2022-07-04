import axios from 'axios';
import { useState } from 'react';
import styles from './styles.module.scss';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorOnSubmit, setErrorOnSubmit] = useState(false);

  const handleUsernameInputChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordInputChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    setErrorOnSubmit(false);

    try {
      const res = await axios.post('http://localhost:5000/api/users', {
        username,
        email,
        password
      });

      res.data && window.location.replace('/login');
    } catch (error) {
      setErrorOnSubmit(true);
      console.log(error);
    }
  };

  return (
    <div className={styles.registerContainer}>
      <span className={styles.registerTitle}>
        Faça Seu Cadastro
      </span>
      {errorOnSubmit && (
        <span className={styles.registerErrorMessage}>
          Dados inválidos
        </span>
      )}

      <form onSubmit={handleFormSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.registerInputLabel}>
            Nome do Usuário
          </label>
          <input
            type='text'
            id='username'
            maxLength='20'
            placeholder='Insira um nome de usuário'
            onChange={handleUsernameInputChange}
            name='username'
            value={username}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.registerInputLabel}>
            Email
          </label>
          <input
            type='email'
            id='email'
            placeholder='Insira um email'
            onChange={handleEmailInputChange}
            name='email'
            value={email}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.registerInputLabel}>
            Senha
          </label>
          <input
            type='password'
            id='password'
            placeholder='Insira uma senha'
            minLength='8'
            maxLength='12'
            onChange={handlePasswordInputChange}
            name='password'
            value={password}
          />
        </div>
        <button type='submit'>Cadastrar</button>
      </form>
    </div>
  );
};

export default Register;