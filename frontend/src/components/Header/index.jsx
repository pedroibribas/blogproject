import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSignInAlt, FaUser } from 'react-icons/fa';
import { AuthContext } from '../../context/Context';
import { HeaderLogout } from './HeaderLogout';
import styles from './styles.module.scss';

export function Header() {
  const { user } = useContext(AuthContext);
  const [isActive, setIsActive] = useState({
    isHomeActive: false,
    isWriteActive: false,
  });

  const handleLinkClick = e => {
    if (e.target.id === 'Home') {
      setIsActive(prevState => ({
        ...prevState,
        isHomeActive: true,
        isWriteActive: false,
      }))
    }

    if (e.target.id === 'Write') {
      setIsActive(prevState => ({
        ...prevState,
        isHomeActive: false,
        isWriteActive: true,
      }))
    }
  }

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Link className={styles.headerLogo} to="/">
          BlogIn
        </Link>

        <nav>
          <Link
            id="Home"
            className={isActive.isHomeActive ? styles.active : ''}
            to="/"
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            id="Write"
            className={isActive.isWriteActive ? styles.active : ''}
            to="/write"
            onClick={handleLinkClick}
          >
            Escrever
          </Link>
        </nav>

        <ul className={styles.rightContent}>
          {user ? (
            <>
              <li>
                <HeaderLogout />
              </li>
            </>
          ) : (
            <>
              <li>
                <Link className={styles.loginBtn} to="/login">
                  <FaSignInAlt /> Login
                </Link>
              </li>
              <li>
                <Link className={styles.registerBtn} to="/register">
                  <FaUser /> Registrar
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  )
};