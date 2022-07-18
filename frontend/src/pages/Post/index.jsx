import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './styles.module.scss';
import { AuthContext } from '../../context/Context';
import { BtnGroup } from '../../components/BtnGroup';
import { PostOptions } from '../../components/PostOptions';

export function Post() {
  const { user } = useContext(AuthContext);
  const [post, setPost] = useState({});
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const path = useLocation().pathname.split("/")[2]; // Get post ID as path

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/api/posts/" + path);

        setPost(res.data);
        setTitle(res.data.title);
        setText(res.data.text);
      } catch (error) {
        console.log(error.response.data)
      }
    };

    getData();
  }, [path]);

  const onEditBtnClick = () => {
    setEditMode(true);
  };

  const onDeleteBtnClick = async () => {
    try {
      await axios.delete("/api/posts/" + path, {
        headers: {
          Authorization: `Bearer ${user.token}`
        }
      });

      window.location.replace('/');
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const onUpdateBtnClick = async () => {
    try {
      const res = await axios.put(
        "/api/posts/" + path,
        {
          title,
          text
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`
          }
        }
      );

      if (res.data) {
        setEditMode(false);
        setPost(res.data);

        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const onCancelBtnClick = () => {
    setEditMode(false);
    window.scrollTo({ top: 0 });
  };

  const handleTitleInputChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTextInputChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div className={styles.singlePostContainer}>
      <div className={styles.singlePostContent}>
        <div className={styles.singlePostInfo}>
          <span className={styles.singlePostAuthor}>{post.username}</span>
          <span className={styles.singlePostTimestamp}>{post.createdAt}</span>
        </div>

        <div className={styles.singlePostTitle}>
          {!editMode ? (
            <h1>{post.title}</h1>
          ) : (
            <input type="text" id="title" maxLength="40" autoFocus={true} onChange={handleTitleInputChange} name="title" value={title} />
          )}

          {!editMode && post.user === user?._id && (
            <PostOptions
              handleEditBtnClick={onEditBtnClick}
              handleDeleteBtnClick={onDeleteBtnClick}
            />
          )}
        </div>

        {!editMode ? (
          <p className={styles.singlePostText}>{post.text}</p>
        ) : (
          <textarea type="text" id="text" cols={200} onChange={handleTextInputChange} name="text" value={text} />
        )}

        {editMode && (
          <BtnGroup
            handleUpdateBtnClick={onUpdateBtnClick}
            handleCancelBtnClick={onCancelBtnClick}
          />
        )}
      </div>
    </div>
  )
};