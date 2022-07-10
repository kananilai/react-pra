import Head from "next/head";
import { useRouter } from "next/router";
import { CommentsByPostId } from "src/components/Comments/CommentsByPostId";
import { UserByUserId } from "src/components/User/UserByUserId";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const Post = () => {
  const router = useRouter();
  const { data, error ,isLoading} = useSWR(
    //三項演算子、query.idが存在する場合は、取得しURLを返す、存在しない場合はnullを返す
    router.query.id
      ? `https://jsonplaceholder.typicode.com/posts/${router.query.id}`
      : null,
    fetcher
  );

  if (isLoading) {
    return <div>ローディング中</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Head>
        <title>{data?.title} Page</title>
      </Head>
      <h1>{data?.title}</h1>
      <p>{data?.body}</p>
      <UserByUserId id={data?.userId} />
      <CommentsByPostId id={data?.id} />
    </div>
  );
};
