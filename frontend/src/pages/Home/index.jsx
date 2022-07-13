import axios from 'axios';
import { useEffect, useState } from "react";
import { PostItem } from '../../components/PostItem';
import styles from './styles.module.scss';

export function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios("/api/posts");

        setPosts(res.data);
      } catch (error) {
        console.log(error.response.data)
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeContent}>
        {posts.map(post => (
          <PostItem
            key={post._id}
            post={post}
          />
        ))}
      </div>
    </div>
  );
};