import { useEffect, useState } from "react";
import axios from 'axios';
import Posts from "../../components/Posts";
import styles from './styles.module.scss';

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      await axios
        .get('http://localhost:5000/api/posts')
        .then(res => setPosts(res.data))
        .catch(err => console.log(err));
    };

    fetchPosts();
  }, []);

  return (
    <div className={styles.homeContainer}>
      <Posts posts={posts} />
    </div>
  );
};

export default Home;