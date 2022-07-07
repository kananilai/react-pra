/* eslint-disable @next/next/no-html-link-for-pages */
import Head from "next/head";
import { useRouter } from "next/router";
import { Header } from "src/components/Header";
import styles from "src/styles/Home.module.css";

const PostId = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <div>
        <h1>{router.query.id}</h1>
      </div>
    </div>
  );
};

export default PostId;
