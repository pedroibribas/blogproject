import axios from 'axios';
import { useContext, useState } from 'react';
import { IoSettingsOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/Context';
import styles from './styles.module.scss';

export function Settings() {
  const { user, dispatch } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confPassword: ''
  });
  const { username, email, password, confPassword } = formData;

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
      try {
        await axios.put("/api/users", {
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
    }
  };

  // const handleDeleteAccClick = async (e) => {
  //   try {
  //     await axios.delete('http://localhost:5000/api/users', {
  //       headers: {
  //         Authorization: `Bearer ${user.token}`
  //       }
  //     });

  //     dispatch({ type: 'LOGOUT' });
  //   } catch (error) {
  //     console.log(error.response.data);
  //   }
  // };

  return (
    <div className={styles.settingsContainer}>
      <div className={styles.settingsContent}>
        <div className={styles.settingsHeading}>
          <h1 className={styles.settingsTitle}>
            <IoSettingsOutline />
            Atualizar Perfil
          </h1>
          <button className={styles.deleteAccount}>
            Excluir Conta
          </button>
        </div>
        <div className={styles.settingsForm}>
          <form className={styles.editFormContainer} onSubmit={handleFormSubmit}>
            <div className={styles.formGroup}>
              <label className={styles.inputLabel}>
                Novo nome de Usuário
              </label>
              <span>
                O nome de usuário deve conter 10 caracteres. É válido apenas letras,
                números, &ldquo;.&rdquo; &#40;ponto&#41;, &ldquo;-&rdquo;
                &#40;hífen&#41; ou &ldquo;_&rdquo; &#40;underline&#41;.
              </span>
              <input
                type='text'
                id='username'
                className={styles.formControl}
                pattern="[a-zA-Z0-9_.-]{10}"
                maxLength='10'
                placeholder="Ex.: joao_12345"
                onChange={handleInputChange}
                name='username'
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.inputLabel}>
                Nova senha
              </label>
              <input
                type='password'
                id='password'
                className={styles.formControl}
                placeholder='Insira uma senha'
                minLength='8'
                maxLength='12'
                onChange={handleInputChange}
                name='password'
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.inputLabel}>Confirmar senha</label>
              <input
                type="password"
                className={styles.formControl}
                id="confPassword"
                placeholder="Insira novamente sua senha"
                minLength="8"
                maxLength="12"
                onChange={handleInputChange}
                name="confPassword"
                value={confPassword}
              />
            </div>
            <div className={styles.formGroup}>
              <button type='submit'>Atualizar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};