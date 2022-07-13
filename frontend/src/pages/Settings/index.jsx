import axios from 'axios';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/Context';
import styles from './styles.module.scss';

export function Settings() {
  const { user, dispatch } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

    try {
      await axios.put('http://localhost:5000/api/users', {
        username,
        email,
        password
      }, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      });

      dispatch({ type: 'LOGOUT' });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const handleDeleteAccClick = async (e) => {
    try {
      await axios.delete('http://localhost:5000/api/users', {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      });

      dispatch({ type: 'LOGOUT' });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className={styles.settingsContainer}>
      <div className={styles.settingsContent}>
        <div className={styles.settingsHeading}>
          <span className={styles.settingsTitle}>
            Atualizar Seu Perfil
          </span>
          <button onClick={handleDeleteAccClick} className={styles.deleteAccount}>
            Excluir Conta
          </button>
        </div>
        <form onSubmit={handleFormSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.settingsLabel}>
              Nome do Usuário
            </label>
            <input
              type='text'
              id='username'
              maxLength='20'
              placeholder='Insira um nome'
              onChange={handleUsernameInputChange}
              name='username'
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.settingsLabel}>
              Email
            </label>
            <input
              type='email'
              id='email'
              placeholder='Insira um email'
              onChange={handleEmailInputChange}
              name='email'
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.settingsLabel}>
              Nova Senha
            </label>
            <input
              type='password'
              id='password'
              placeholder='Insira uma senha'
              minLength='8'
              maxLength='12'
              onChange={handlePasswordInputChange}
              name='password'
            />
          </div>
          <button type='submit'>Atualizar</button>
        </form>
      </div>
    </div>
  );
};