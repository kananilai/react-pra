import Head from "next/head";
import { useComment } from "src/hooks/useComment";

export const Comment = () => {
  const { comment, commentError, error, isLoading } = useComment();
  if (isLoading) {
    return <div>ローディング中</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{comment?.name} Page</title>
      </Head>
      <h1>{comment?.name}</h1>
      <p>{comment?.body}</p>
    </div>
  );
};
