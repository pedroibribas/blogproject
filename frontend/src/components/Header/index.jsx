import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import { ImPencil2 } from 'react-icons/im';
import { AuthContext } from '../../context/Context';
import { HeaderLogout } from './HeaderLogout';
import styles from './styles.module.scss';

export function Header() {
  const { user } = useContext(AuthContext);

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
                  <HeaderLogout />
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

      </div>
    </header>
  )
};