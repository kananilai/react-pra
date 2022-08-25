/* eslint-disable @next/next/no-html-link-for-pages */
import Head from "next/head";
import { useCallback, useEffect } from "react";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import styles from "src/styles/Home.module.css";

export default function Home() {
  const foo = 1;

  const handleClick = useCallback((e) => {
    console.log(e.target.href);
    e.preventDefault();
    alert(foo);
  }, []);

  useEffect(() => {
    //マウント時の処理
    console.log("mounted");
    document.body.style.backgroundColor ="lightblue";
    //アンマウント時の処理
    return()=>{
      console.log("unmounted");
      document.body.style.backgroundColor ="";
    }
  },[]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
      </Head>
      <Header />
      <a href="/about" onClick={handleClick}>
        ボタン
      </a>
      <Main page="index" />
      <Footer />
    </div>
  );
}
