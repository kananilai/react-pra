import Head from "next/head";
import { CommentsComponent } from "src/components/Comment";
import { Header } from "src/components/Header";

const Comments = () => {
  <div>
    <Head>
      <title> Comments Page</title>
    </Head>
    <Header />
    <CommentsComponent />
  </div>;
};
export default Comments;
