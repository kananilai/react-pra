import Head from "next/head";
import { Header } from "src/components/Header";
import { Posts } from "src/components/posts";
import styles from "src/styles/Home.module.css";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <Posts />
    </div>
  );
};
export default Home;
