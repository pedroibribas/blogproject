import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { ImPencil2 } from 'react-icons/im';
import { AuthContext } from '../../context/Context';
import { UserMenu } from './UserMenu';
import styles from './styles.module.scss';

export function Header() {
  const { user } = useContext(AuthContext);
  const [isOpenMenuActive, setIsOpenMenuActive] = useState(false);
  const path = useLocation().pathname;

  useEffect(() => {
    setIsOpenMenuActive(false)
  }, [path]);

  const handleMenuBtnClick = () => {
    if (isOpenMenuActive === false) setIsOpenMenuActive(true);
    if (isOpenMenuActive === true) setIsOpenMenuActive(false);
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link className={styles.headerLogo} to="/">
          <ImPencil2 />
        </Link>

        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/write">Escrever</Link></li>
            {user ? (
              <>
                <li>
                  <button
                    className={styles.openMenuBtn}
                    onClick={handleMenuBtnClick}
                  >
                    {user.username}
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link className={styles.registerBtn} to="/register">
                    <FaUser /> Registrar
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>

        {isOpenMenuActive && (
          <UserMenu setIsOpenMenuActive={setIsOpenMenuActive} />
        )}
      </div>
    </header>
  )
};