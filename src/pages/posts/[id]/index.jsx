/* eslint-disable @next/next/no-html-link-for-pages */
import { Header } from "src/components/Header";
import styles from "src/styles/Home.module.css";
import { Post } from "src/components/Post";

const PostsId = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Post />
    </div>
  );
};

export default PostsId;
