import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

function Post({ post }) {
  const date = new Intl.DateTimeFormat('pt-br', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(new Date(post.createdAt)); // Ex.: 02 de junho de 2022

  return (
    <div className={styles.postContainer}>
      <Link to={`/post/${post._id}`}>
        <span className={styles.postAuthor}>{post.username}</span>
        <span className={styles.postTitle}>{post.title}</span>
        <small className={styles.postTimestamp}>{date}</small>
        <p className={styles.postText}>{post.text}</p>
      </Link>
    </div>
  );
};

export default Post;