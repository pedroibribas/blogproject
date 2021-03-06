import axios from 'axios';
import { useEffect, useState } from "react";
import { PostItem } from '../../components/PostItem';
import styles from './styles.module.scss';

export function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const res = await axios.get("/api/posts");

        const postsArr = res.data;
        const posts = postsArr.reverse().slice(0, 6);

        setPosts(posts);
      } catch (error) {
        console.log(error.response.data);
      }
    };

    getPosts();
  }, []);

  return (
    <section className={styles.homeContainer}>
      <div className={styles.heroContent}>
        <h1>Pensou? <span>Compartilhe.</span></h1>
        <span className={styles.subtitle}>
          Crie uma conta pessoal e comece a compartilhar ideias com o mundo.
        </span>
      </div>
      <div className={styles.postsContent}>
        <h2>Últimas publicações</h2>
        <div className={styles.grid}>
          {posts.map(post => (
            <PostItem
              key={post._id}
              post={post}
            />
          ))}
        </div>
      </div>
    </section>
  );
};