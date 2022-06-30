import styles from './styles.module.scss';

const user = {
  name: 'Friedrich',
  image: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80'
};

function Sidebar() {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebarItem}>
        <span className={styles.sidebarTitle}>Sobre o autor</span>
        <img src={user.image} alt='Avatar do usuário' />
        <strong className={styles.sidebarUsername}>{user.name}</strong>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus lacinia erat ut feugiat. Curabitur eget quam purus. Praesent tincidunt ultricies justo eget consequat.
        </p>
      </div>

      <div className={styles.sidebarItem}>
        <span className={styles.sidebarTitle}>Categorias</span>
        <ul>
          <li className={styles.sidebarCategory}>name</li>
          <li className={styles.sidebarCategory}>name</li>
          <li className={styles.sidebarCategory}>name</li>
          <li className={styles.sidebarCategory}>name</li>
          <li className={styles.sidebarCategory}>name</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;