import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/Context';
import styles from './styles.module.scss';

export function Profile() {
  const { user } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [posts, setPosts] = useState([]);
  const path = useLocation().pathname.split('/')[2];
  const postsAmount = posts?.length;

  useEffect(() => {
    const getUsername = async () => {
      try {
        const res = await axios.get("/api/users/" + path);
        setUsername(res.data.username);
      } catch (error) {
        console.log(error.response.data);

      }
    };

    const getPosts = async () => {
      try {
        const res = await axios.get("/api/posts/user/" + path);

        setPosts(res.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };

    getUsername();
    getPosts();
  }, [path]);

  return (
    <section className={styles.profileContainer}>
      <div className={styles.profileContent}>
        <div className={styles.profileHeading}>
          <div className={styles.title}>
            <h1>{username}</h1>
            {path === user?.username && (
              <Link to="/settings">Editar perfil</Link>
            )}
          </div>
          <span className={styles.info}>
            <strong>{postsAmount}</strong> publicações
          </span>
        </div>

        <div className={styles.profilePosts}>
          <div className={styles.grid}>
            {posts.map(post => (
              <article key={post._id} className={styles.profilePostContainer}>
                <Link to={`/post/${post._id}`}>
                  <h3 className={styles.profilePostTitle}>{post.title}</h3>
                  <small className={styles.profilePostTimestamp}>
                    Criado em&nbsp;
                    {new Intl.DateTimeFormat('pt-br', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    }).format(new Date(post?.createdAt))}
                  </small>
                  <small className={styles.profilePostTimestamp}>
                    Última edição em&nbsp;
                    {new Intl.DateTimeFormat('pt-br', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    }).format(new Date(post?.updatedAt))}
                  </small>
                  <p className={styles.profilePostText}>{post.text}</p>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
};