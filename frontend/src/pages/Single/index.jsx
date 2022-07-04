import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from 'axios';
import SinglePost from "../../components/SinglePost";
import styles from './styles.module.scss';

function Single() {
  const [post, setPost] = useState({});

  const location = useLocation();
  const path = location.pathname.split('/')[2];

  useEffect(() => {
    const fetchPost = async () => {
      await axios
        .get(`http://localhost:5000/api/posts/${path}`)
        .then(res => setPost(res.data))
        .catch(err => console.log(err));
    };

    fetchPost();
  }, [path]);

  return (
    <div className={styles.singleContainer}>
      <div className={styles.singleContent}>
        <SinglePost post={post} />
      </div>
    </div>
  );
};

export default Single;