import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { useBgLightBlue } from "src/hooks/useBgLightBlue";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useInputArray";
import styles from "src/styles/Home.module.css";

export default function About() {
  const { count, isShow, handleClick, handleDisplay } = useCounter();
  const { text, array, handleAdd, handleChange } = useInputArray();
  useBgLightBlue();
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <div className={styles.wrapper}>
        {isShow ? <h1>{count}</h1> : null}
        <button href="/about" onClick={handleDisplay}>
          {isShow ? "非表示" : "表示"}
        </button>
        <button href="/about" onClick={handleClick}>
          ボタン
        </button>
        <input type="text" value={text} onChange={handleChange} />
        <button onClick={handleAdd}>追加</button>
        <ul>
          {array.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <Main page="about" />
      <Footer />
    </div>
  );
}
