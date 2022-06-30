import styles from './styles.module.scss';

function Write() {
  return (
    <div className={styles.writeContainer}>
      <form>
        <div className={styles.formGroup}>
          <input
            type='text'
            className={styles.formInput}
            id="title"
            maxLength='40'
            autoFocus={true}
            placeholder='Título da publicação'
            name="title"
          />
        </div>

        <div className={styles.formGroup}>
          <textarea
            type='text'
            className={styles.formInput}
            id="title"
            cols={200}
            placeholder='Escreva suas ideias...'
            name="title"
          />
        </div>

        <button type='submit'>Publicar</button>
      </form>
    </div>
  );
};

export default Write;