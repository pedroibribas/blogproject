import axios from 'axios';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/Context';
import styles from './styles.module.scss';

function Write() {
  const { user } = useContext(AuthContext);

  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleTitleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTextInputChange = (e) => {
    setText(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "/api/posts",
        {
          title,
          text
        },
        {
          headers: {
            'Authorization': `Bearer ${user.token}`
          }
        }

      )

      res.data && window.location.replace('/');
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className={styles.writeContainer}>
      <form onSubmit={handleFormSubmit} className={styles.writeContent}>
        <div className={styles.formGroup}>
          <input
            type='text'
            className={styles.formInput}
            id="title"
            maxLength='40'
            autoFocus={true}
            placeholder='Título da publicação'
            onChange={handleTitleInputChange}
            name="title"
          />
        </div>

        <div className={styles.formGroup}>
          <textarea
            type='text'
            className={styles.formInput}
            id="text"
            cols={200}
            placeholder='Escreva suas ideias...'
            onChange={handleTextInputChange}
            name="text"
          />
        </div>
        <button type='submit'>Publicar</button>
      </form>
    </div>
  );
};

export default Write;