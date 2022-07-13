import styles from './styles.module.scss';

export function BtnGroup({ handleUpdateBtnClick, handleCancelBtnClick }) {
  return (
    <div className={styles.btnGroupContainer}>
      <button className={styles.btnPrimary} onClick={handleUpdateBtnClick}>
        Atualizar
      </button>
      <button className={styles.btnPrimaryAlt} onClick={handleCancelBtnClick}>
        Cancelar
      </button>
    </div>
  )
};