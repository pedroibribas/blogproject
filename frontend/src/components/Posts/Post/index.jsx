import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const post = {
  categories: ['music', 'life'],
  title: 'We’re All Different and That’s Okay',
  timestamp: '1 hour ago',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lectus ante, rutrum eget laoreet quis, mollis condimentum augue. Ut facilisis mollis felis et dapibus. Donec placerat odio nec sem ultricies, non congue ipsum molestie. Fusce posuere ante scelerisque dolor porttitor aliquet. Fusce eu tellus rhoncus, tincidunt eros at, malesuada ligula. Ut ac blandit felis, id dictum felis. Vestibulum risus nisl, interdum eget nisl id, cursus porta odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lectus ante, rutrum eget laoreet quis, mollis condimentum augue. Ut facilisis mollis felis et dapibus. Donec placerat odio nec sem ultricies, non congue ipsum molestie. Fusce posuere ante scelerisque dolor porttitor aliquet. Fusce eu tellus rhoncus, tincidunt eros at, malesuada ligula. Ut ac blandit felis, id dictum felis. Vestibulum risus nisl, interdum eget nisl id, cursus porta odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lectus ante, rutrum eget laoreet quis, mollis condimentum augue. Ut facilisis mollis felis et dapibus. Donec placerat odio nec sem ultricies, non congue ipsum molestie. Fusce posuere ante scelerisque dolor porttitor aliquet. Fusce eu tellus rhoncus, tincidunt eros at, malesuada ligula. Ut ac blandit felis, id dictum felis. Vestibulum risus nisl, interdum eget nisl id, cursus porta odio.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lectus ante, rutrum eget laoreet quis, mollis condimentum augue. Ut facilisis mollis felis et dapibus. Donec placerat odio nec sem ultricies, non congue ipsum molestie. Fusce posuere ante scelerisque dolor porttitor aliquet. Fusce eu tellus rhoncus, tincidunt eros at, malesuada ligula. Ut ac blandit felis, id dictum felis. Vestibulum risus nisl, interdum eget nisl id, cursus porta odio.',
};

function Post() {
  return (
    <div className={styles.postContainer}>
      <ul className={styles.postCategories}>
        {post.categories.map(category => (
          <li className={styles.postCategory}>{category}</li>
        ))}
      </ul>
      <Link to='/post/1'>
        <h2 className={styles.postTitle}>{post.title}</h2>
        <small className={styles.postTimestamp}>{post.timestamp}</small>
        <p className={styles.postDescription}>{post.description}</p>
      </Link>
    </div>
  );
};

export default Post;