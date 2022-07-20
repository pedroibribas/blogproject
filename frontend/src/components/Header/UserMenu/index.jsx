import { Link } from "react-router-dom";
import { CgProfile } from 'react-icons/cg';
import { IoMdClose } from 'react-icons/io';
import { IoSettingsOutline } from 'react-icons/io5';
import { useContext } from "react";
import { AuthContext } from "../../../context/Context";
import { Logout } from "../../../context/Actions";
import styles from './styles.module.scss';

export function UserMenu({ setIsOpenMenuActive }) {
  const { user, dispatch } = useContext(AuthContext);

  const handleLogoutClick = () => {
    dispatch(Logout());
    setIsOpenMenuActive(false);
  };

  const handleCloseBtnClick = () => {
    setIsOpenMenuActive(false);
  };

  return (
    <div className={styles.userMenuContainer}>
      <div className={styles.triangle} />
      <div className={styles.closeBtn}>
        <IoMdClose onClick={handleCloseBtnClick} />
      </div>
      <ul className={styles.userMenuContent}>
        <li>
          <Link to={"/profile/" + user?.username}>
            <CgProfile /> Perfil
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <IoSettingsOutline /> Configurações
          </Link>
        </li>
        <li className={styles.logoutBtn}>
          <button onClick={handleLogoutClick}>
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};