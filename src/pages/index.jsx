/* eslint-disable @next/next/no-html-link-for-pages */
import Head from "next/head";
import { useCallback, useEffect, useState } from "react";
import { Header } from "src/components/Header";
import styles from "src/styles/Home.module.css";

const Home = (props) => {
  const [posts, setPosts] = useState([]);
  const getPosts = useCallback(async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    setPosts(json);
  }, []);

  useEffect(() => {
    // マウント時にgetPostsを呼び出す
    getPosts();
  }, [getPosts]);
  console.log(posts);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      {posts.length > 0 ? (
        <ol>
          {posts.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ol>
      ) : null}
    </div>
  );
};

export default Home;
