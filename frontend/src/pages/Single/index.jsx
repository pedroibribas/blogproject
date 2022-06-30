import Sidebar from "../../components/Sidebar";
import SinglePost from "../../components/SinglePost";
import styles from './styles.module.scss';

function Single() {
  return (
    <div className={styles.singleContainer}>
      <SinglePost />
      <Sidebar />
    </div>
  );
};

export default Single;