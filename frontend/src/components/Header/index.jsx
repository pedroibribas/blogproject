import { MdLogout } from 'react-icons/md';
// import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const user = {
  isLoggedIn: true,
  image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
};

function Header() {
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
          {user.isLoggedIn ? (
            <>
              <li>
                <Link to="/settings">
                  <img src={user.image} alt="Avatar do usuário" />
                </Link>
              </li>
              <li>
                <a className={styles.headerLogout} href="/">
                  Sair
                  <MdLogout />
                </a>
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