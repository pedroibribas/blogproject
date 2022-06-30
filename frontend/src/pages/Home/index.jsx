import Posts from "../../components/Posts";
import Sidebar from "../../components/Sidebar";
import styles from './styles.module.scss';

function Home() {
  return (
    <div className={styles.homeContainer}>
      <Posts />
      <Sidebar />
    </div>
  );
};

export default Home;