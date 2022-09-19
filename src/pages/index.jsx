import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import styles from "src/styles/Home.module.css";

const Home = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      テスト
    </div>
  );
};
export default Home;
