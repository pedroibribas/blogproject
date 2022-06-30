import { FaUpload } from 'react-icons/fa';
import Sidebar from '../../components/Sidebar';
import styles from './styles.module.scss';

const user = {
  image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
};

function Settings() {
  return (
    <div className={styles.settingsContainer}>
      <div className={styles.settingsContent}>
        <div className={styles.settingsHeading}>
          <span className={styles.settingsTitle}>
            Atualizar Seu Perfil
          </span>
          <a href='/delete' className={styles.deleteAccount}>
            Excluir Conta
          </a>
        </div>
        <form>
          <div className={styles.formGroup}>
            <span className={styles.settingsLabel}>Avatar</span>
            <div className={styles.fileInputControl}>
              <img src={user.image} alt='Avatar do usuário' />
              <label htmlFor='file'>
                <FaUpload />
              </label>
              <input
                type='file'
                id='file'
                name='file'
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.settingsLabel}>
              Nome do Usuário
            </label>
            <input
              type='text'
              id='name'
              maxLength='20'
              placeholder='Insira um nome'
              name='name'
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
              maxLength='12'
              name='password'
            />
          </div>
          <button type='submit'>Atualizar</button>
        </form>
      </div>

      <Sidebar />
    </div>
  );
};

export default Settings;