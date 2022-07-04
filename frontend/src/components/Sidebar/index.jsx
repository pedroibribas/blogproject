import styles from './styles.module.scss';

function Sidebar({ userId }) {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebarContent}>
        <div className={styles.sidebarItem}>
          <span className={styles.sidebarTitle}>Sobre o autor</span>
          <strong className={styles.sidebarUsername}>FirstName LastName</strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In faucibus lacinia erat ut feugiat. Curabitur eget quam purus. Praesent tincidunt ultricies justo eget consequat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;