import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

export function PostItem({ post }) {
  const date = new Intl.DateTimeFormat('pt-br', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(new Date(post.createdAt));

  return (
    <div className={styles.postContainer}>
      <Link to={`/post/${post._id}`}>
        <span className={styles.postAuthor}>{post.username}</span>
        <h3 className={styles.postTitle}>{post.title}</h3>
        <small className={styles.postTimestamp}>{date}</small>
        <p className={styles.postText}>{post.text}</p>
      </Link>
    </div>
  );
};