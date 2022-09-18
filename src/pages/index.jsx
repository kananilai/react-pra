import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import styles from "src/styles/Home.module.css";

export default function Home(props) {
  const {
    count,
    isShow,
    handleClick,
    handleDisplay,
    text,
    array,
    handleAdd,
    handleChange,
    items,
    handleReduce,
  } = props;

  return (
    <div className={styles.container}>
      <Head>
        <title>Index Page</title>
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
      <Main page="index" items={items} handleReduce={handleReduce}/>
      <Footer />
    </div>
  );
}
