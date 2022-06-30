import Post from './Post';
import styles from './styles.module.scss';

function Posts() {
  return (
    <div className={styles.postsContainer}>
      <div>
        <Post />
        <div className={styles.postDivider} />
      </div>
      <div>
        <Post />
        <div className={styles.postDivider} />
      </div>
      <div>
        <Post />
        <div className={styles.postDivider} />
      </div>
      <div>
        <Post />
        <div className={styles.postDivider} />
      </div>
      <div>
        <Post />
        <div className={styles.postDivider} />
      </div>
    </div>
  );
};

export default Posts;