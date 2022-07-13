import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Spinner } from '../Spinner';
import { LoginFulfilled, LoginPending, LoginRejected } from '../../context/Actions';
import { AuthContext } from '../../context/Context';
import styles from './styles.module.scss';

export function LoginForm() {
  const { user, isError, isLoading, isSuccess, message, dispatch } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const { email, password } = formData;
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) toast.error(message);

    if (isSuccess || user) navigate('/');

  }, [user, isError, isLoading, isSuccess, message, navigate, dispatch]);

  const handleInputChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    dispatch(LoginPending());

    try {
      const res = await axios.post("api/users/login", {
        email,
        password
      });

      dispatch(LoginFulfilled(res.data));
    } catch (error) {
      dispatch(LoginRejected('As credenciais são inválidas'));
      console.log(error.response.data);
    }
  };

  if (isLoading) return <Spinner />

  return (
    <form className={styles.loginFormContainer} onSubmit={handleFormSubmit}>
      <div className={styles.formGroup}>
        <label className={styles.loginInputLabel}>
          Email
        </label>
        <input
          type='email'
          className={styles.formControl}
          id='email'
          placeholder='Insira um email'
          onChange={handleInputChange}
          name='email'
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.loginInputLabel}>
          Senha
        </label>
        <input
          type='password'
          className={styles.formControl}
          id='password'
          placeholder='Insira uma senha'
          minLength='8'
          maxLength='12'
          onChange={handleInputChange}
          name='password'
        />
      </div>
      <div className={styles.formGroup}>
        <button
          type='submit'
        >
          Enviar
        </button>
      </div>
    </form>
  );
};