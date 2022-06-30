import styles from './styles.module.scss';

function Register() {
  return (
    <div className={styles.registerContainer}>
      <span className={styles.registerTitle}>
        Faça Seu Cadastro
      </span>
      <div className={styles.registerContent}>
        <form>
          <div className={styles.formGroup}>
            <label className={styles.registerInputLabel}>
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
            <label className={styles.registerInputLabel}>
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
            <label className={styles.registerInputLabel}>
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
          <button type='submit'>Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default Register;