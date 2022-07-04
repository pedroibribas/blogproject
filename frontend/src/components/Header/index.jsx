import { useContext } from 'react';
import { MdLogout } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import styles from './styles.module.scss';

function Header() {
  const { user, dispatch } = useContext(Context);

  const handleLogoutClick = () => {
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link className={styles.headerLogo} to="/">
          BlogIn
        </Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/write">Escrever</Link>
        </nav>

        <ul className={styles.rightContent}>
          {user ? (
            <>
              <li>
                <Link className={styles.headerUsername} to="/settings">
                  {user.name}
                </Link>
              </li>
              <li>
                <button
                  className={styles.headerBtn}
                  onClick={handleLogoutClick}
                >
                  Sair
                  <MdLogout />
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link className={styles.headerBtn} to="/register">
                  Registrar
                </Link>
              </li>
            </>
          )}

          {/* <FaSearch className='search-icon' /> */}
        </ul>
      </div>
    </header>
  )
};

export default Header;