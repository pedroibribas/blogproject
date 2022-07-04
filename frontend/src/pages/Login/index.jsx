import axios from 'axios';
import { useContext, useRef } from 'react';
import { Context } from '../../context/Context';
import styles from './styles.module.scss';

function Login() {
  const { isFetching, dispatch } = useContext(Context);

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    dispatch({ type: 'LOGIN_START' });

    try {
      const res = await axios.post('http://localhost:5000/api/users/login', {
        email: emailRef.current.value,
        password: passwordRef.current.value
      });

      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: res.data
      });
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE' });
    }
  };

  return (
    <div className={styles.loginContainer}>
      <span className={styles.loginTitle}>
        Faça Seu Login
      </span>

      <form onSubmit={handleFormSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.loginInputLabel}>
            Email
          </label>
          <input
            type='email'
            id='email'
            placeholder='Insira um email'
            ref={emailRef}
            name='email'
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.loginInputLabel}>
            Senha
          </label>
          <input
            type='password'
            id='password'
            placeholder='Insira uma senha'
            minLength='8'
            maxLength='12'
            ref={passwordRef}
            name='password'
          />
        </div>
        <button
          type='submit'
          disabled={isFetching}
        >Enviar</button>
      </form>
    </div>
  );
};

export default Login;