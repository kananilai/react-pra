import { Header } from "src/components/Header";
import { Post } from "src/components/post";
import styles from "src/styles/Home.module.css";

const PostId = () => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <Post />
    </div>
  );
};
export default PostId;