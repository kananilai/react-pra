import Head from "next/head";
import { Header } from "src/components/Header";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";
import Link from "next/link";

const useComments = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/comments",
    fetcher
  );
  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};

const CommentsComponent = () => {
  const { data, error, isLoading, isEmpty } = useComments();
  if (isLoading) {
    return <p>ローディング中</p>;
  }
  if (error) {
    return <p>{error.message}(</p>;
  }
  if (isEmpty) {
    return <p>Empty :</p>;
  }
  return (
    <ol>
      {data.map((comment) => {
        return (
          <li key={comment.id}>
            <Link href={`/comments/${comment.id}`}>
              <a>
                {comment.body}
              </a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};

const Comments = () => {
  return (
    <div>
      <Head>
        <title>Comments Page</title>
      </Head>
      <Header />
      <CommentsComponent />
    </div>
  );
};

export default Comments;
