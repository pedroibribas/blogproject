import styles from './styles.module.scss';

function Login() {
  return (
    <div className={styles.loginContainer}>
      <span className={styles.loginTitle}>
        Faça Seu Login
      </span>
      <div className={styles.loginContent}>
        <form>
          <div className={styles.formGroup}>
            <label className={styles.loginInputLabel}>
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
            <label className={styles.loginInputLabel}>
              Senha
            </label>
            <input
              type='password'
              id='password'
              placeholder='Insira uma senha'
              maxLength='12'
              name='password'
            />
          </div>
          <button type='submit'>Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;