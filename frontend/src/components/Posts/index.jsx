import Post from './Post';
import styles from './styles.module.scss';

function Posts({ posts }) {
  return (
    <div className={styles.postsContainer}>
      {posts.map(post => (
        <Post
          key={post._id}
          post={post}
        />
      ))}
    </div>
  )
};

export default Posts;