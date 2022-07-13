import { FaUser } from 'react-icons/fa';
import { RegisterForm } from '../../components/RegisterForm';
import styles from './styles.module.scss';

export function Register() {
  return (
    <div className={styles.registerContainer}>
      <div className={styles.registerContent}>
        <div className={styles.registerHeading}>
          <FaUser />
          <h1>Criar novo acesso</h1>
          <p>
            Crie uma conta de acesso pessoal enviando o formulário abaixo e comece a postar.
          </p>
        </div>

        <RegisterForm />
      </div>
    </div>
  );
};