import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";
import { Spinner } from '../Spinner';
import { RegisterFulfilled, RegisterPending, RegisterRejected, Reset } from '../../context/Actions';
import { AuthContext } from '../../context/Context';
import styles from './styles.module.scss';

export function RegisterForm() {
  const { user, isError, isLoading, isSuccess, message, dispatch } =
    useContext(AuthContext);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confPassword: ''
  });
  const { username, email, password, confPassword } = formData;
  const navigate = useNavigate();

  useEffect(() => {
    if (isError) toast.error(message);

    if (isSuccess || user) navigate('/');

    dispatch(Reset());

  }, [user, isError, isLoading, isSuccess, message, navigate, dispatch]);

  const handleInputChange = e => {
    setFormData(prevState => (
      {
        ...prevState,
        [e.target.name]: e.target.value
      }
    ));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (password !== confPassword) {
      toast.error('A senha de confirmação está incorreta.');
    } else {
      dispatch(RegisterPending());

      try {
        await axios.post("/api/users", {
          username,
          email,
          password
        });

        dispatch(RegisterFulfilled());


      } catch (error) {
        // const message =
        //   (error.response &&
        //     error.response.data &&
        //     error.response.data.message) ||
        //   error.message ||
        //   error.toString();

        dispatch(RegisterRejected(error.message));

        console.log(error.response.data);
      }
    }
  };

  if (isLoading) return <Spinner />

  return (
    <form className={styles.registerFormContainer} onSubmit={handleFormSubmit}>
      <div className={styles.formGroup}>
        <label className={styles.registerInputLabel}>Nome</label>
        <input
          type='text'
          className={styles.formControl}
          id='username'
          minLength='8'
          maxLength='20'
          placeholder='Ex.: João da Silva'
          onChange={handleInputChange}
          name='username'
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.registerInputLabel}>Email</label>
        <input
          type='email'
          className={styles.formControl}
          id='email'
          placeholder='Ex.: joãodasilva@domínio.com'
          onChange={handleInputChange}
          name='email'
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.registerInputLabel}>Senha</label>
        <input
          type='password'
          className={styles.formControl}
          id='password'
          placeholder='Insira uma senha'
          minLength='8'
          maxLength='12'
          onChange={handleInputChange}
          name='password'
          value={password}
        />
      </div>
      <div className={styles.formGroup}>
        <label className={styles.registerInputLabel}>Confirmar senha</label>
        <input
          type='password'
          className={styles.formControl}
          id='confPassword'
          placeholder='Insira novamente sua senha'
          minLength='8'
          maxLength='12'
          onChange={handleInputChange}
          name='confPassword'
          value={confPassword}
        />
      </div>
      <div className={styles.formGroup}>
        <button type='submit'>Cadastrar</button>
      </div>
    </form>
  );
};