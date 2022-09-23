import Head from "next/head";
import { Header } from "src/components/Header";
import { Posts as PostsComponent } from "src/components/posts";
import styles from "src/styles/Home.module.css";

const Posts = () => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <PostsComponent />
    </div>
  );
};
export default Posts;
