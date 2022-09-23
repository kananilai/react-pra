import Head from "next/head";
import { Header } from "src/components/Header";
import styles from "src/styles/Home.module.css";

const Index = () => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <h1>Next.jsで学ぶReact講座</h1>
      <p>jsonplaceholderで勉強</p>
    </div>
  );
};
export default Index;
