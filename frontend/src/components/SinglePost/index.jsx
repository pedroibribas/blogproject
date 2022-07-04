import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import styles from './styles.module.scss';

function SinglePost({ post }) {
  return (
    <div className={styles.singlePostContainer}>
      <div className={styles.singlePostContent}>
        <div className={styles.singlePostInfo}>
          <span className={styles.singlePostAuthor}>{post.username}</span>
          <span className={styles.singlePostTimestamp}>{post.createdAt}</span>
        </div>

        <div className={styles.singlePostTitle}>
          <h1>{post.title}</h1>
          <div className={styles.singlePostOptions}>
            <FaEdit />
            <FaTrashAlt />
          </div>
        </div>

        <p className={styles.singlePostText}>{post.text}</p>
      </div>
    </div>
  )
};

export default SinglePost;