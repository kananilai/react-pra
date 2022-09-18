import Head from "next/head";
import { Footer } from "src/components/Footer";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import styles from "src/styles/Home.module.css";

const About = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      <div className={styles.wrapper}>
        {props.isShow ? <h1>{props.doubleCount}</h1> : null}
        <button href="/about" onClick={props.handleDisplay}>
          {props.isShow ? "非表示" : "表示"}
        </button>
        <button href="/about" onClick={props.handleClick}>
          ボタン
        </button>
        <input type="text" value={props.text} onChange={props.handleChange} />
        <button onClick={props.handleAdd}>追加</button>
        <ul>
          {props.array.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <Main
        page="about"
        items={props.items}
        handleReduce={props.handleReduce}
      />
      <Footer />
    </div>
  );
};
export default About;
