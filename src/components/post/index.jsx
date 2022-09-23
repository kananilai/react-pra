import Head from "next/head";
import { usePost } from "src/hooks/usePost";
export const Post = () => {
  const { post, user, error,isLoading } = usePost();
  
  if (isLoading) {
    return <p>ローディング中...</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <>
      <Head>
        <title>{post?.title}</title>
      </Head>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
      {user?.name ? <div>Created by {user.name} </div> : null}
    </>
  );
};
