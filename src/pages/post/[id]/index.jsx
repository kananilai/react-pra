/* eslint-disable @next/next/no-html-link-for-pages */
import { Header } from "src/components/Header";
import { usePost } from "src/hooks/usePost";
import styles from "src/styles/Home.module.css";
import { Post } from "src/components/Post";
const PostId = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Post />
    </div>
  );
};

export default PostId;
