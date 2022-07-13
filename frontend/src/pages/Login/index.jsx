import { FaSignInAlt } from 'react-icons/fa';
import { LoginForm } from '../../components/LoginForm';
import styles from './styles.module.scss';

export function Login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginContent}>
        <div className={styles.loginHeading}>
          <FaSignInAlt />
          <h1>Faça seu Login</h1>
          <p>
            Acesse seu perfil pessoal enviando o formulário abaixo com seu email e senha de autenticação.
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
};