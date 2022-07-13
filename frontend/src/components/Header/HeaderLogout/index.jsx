import { useContext } from "react";
import { MdLogout } from "react-icons/md";
import { Logout } from "../../../context/Actions";
import { AuthContext } from "../../../context/Context";
import styles from './styles.module.scss';

export function HeaderLogout() {
  const { dispatch } = useContext(AuthContext);

  const handleLogoutClick = () => {
    dispatch(Logout());
  };

  return (
    <button
      className={styles.btn}
      onClick={handleLogoutClick}
    >
      Sair <MdLogout />
    </button>
  )
};