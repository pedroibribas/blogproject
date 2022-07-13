import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import styles from './styles.module.scss';

export function PostOptions({ handleEditBtnClick, handleDeleteBtnClick }) {
  return (
    <div className={styles.postOptionsContainer}>
      <button onClick={handleEditBtnClick}>
        Editar <FaEdit />
      </button>
      <button onClick={handleDeleteBtnClick}>
        Deletar <FaTrashAlt />
      </button>
    </div>
  )
};