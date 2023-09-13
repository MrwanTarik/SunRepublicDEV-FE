import React, { useState, useRef, Suspense } from 'react';

import axios from 'axios';

import { API_URL } from '../../constants/main';
import Button from '../../components/Button';
import classes from './styles.module.scss';

const TextEditor = React.lazy(() => import('../../components/TextEditor'));

export default function AddBlogPostPage() {
  const [textContent, setTextContent] = useState(null);
  const [textContentRus, setTextContentRus] = useState(null);
  const [title, setTitle] = useState('');
  const [titleRus, setTitleRus] = useState('');
  const [image, setImage] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const formRef = useRef();

  const validatePassword = async () => {
    try {
      const response = await axios.post(`${API_URL}/admin/password`, {
        password,
      });

      if (response.data.isValid) {
        setIsPasswordValid(true);
      } else {
        alert('WRONG PASSWORD');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createBlogPost = async () => {
    try {
      if (!image || !textContent || !title) {
        return;
      }

      const form = new FormData();
      form.append('file', image);
      form.append('textContent', textContent);
      form.append('textContentRus', textContentRus);
      form.append('title', title);
      form.append('titleRus', titleRus);

      await axios.post(`${API_URL}/blog-posts`, form, {
        headers: {
          password,
        },
      });

      setTextContent('');
      setTextContentRus('');
      setTitle('');
      setTitleRus('');
      setImage('');

      formRef.current.reset();

      alert('SUCCESS');
    } catch (error) {
      console.log(error);
      alert('ERROR');
    }
  };

  if (!isPasswordValid) {
    return (
      <div className={classes.AddBlogPostPage}>
        <div className={classes.container}>
          <form
            className={classes.passwordForm}
            onSubmit={(event) => {
              event.preventDefault();
              validatePassword();
            }}
          >
            <label>
              Password
              <input
                type="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
            <Button onClick={validatePassword}>Proceed</Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className={classes.AddBlogPostPage}>
      <div className={classes.container}>
        <h1>Add blog post</h1>
        <form
          className={classes.inputs}
          ref={formRef}
          onSubmit={(event) => event.preventDefault()}
        >
          <label>
            Title:
            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </label>
          <label>
            Title (russian):
            <input
              type="text"
              value={titleRus}
              onChange={(event) => setTitleRus(event.target.value)}
            />
          </label>
          <label>
            Image:
            <input
              type="file"
              onChange={(event) => setImage(event.target.files[0])}
              accept="image/*"
            />
          </label>
        </form>
        <Suspense fallback={<div>Loading...</div>}>
          <h2>Text content</h2>
          <TextEditor text={textContent} setText={setTextContent} />
          <h2>Text content (russian)</h2>
          <TextEditor text={textContentRus} setText={setTextContentRus} />
        </Suspense>
        <div className={classes.buttonContainer}>
          <Button onClick={createBlogPost}>Publish</Button>
        </div>
      </div>
    </div>
  );
}
