import { useRouter } from "next/router";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const usePost = () => {
  const router = useRouter();
  //router.query.idは、上で定義したuseRouterからURLのパラメーターを文字列として取得する
  const { data: post, error: postError } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/posts/${router.query.id}`
      : null,
    fetcher
  );
  const { data: user, error: userError } = useSWR(
    post?.userId
      ? `https://jsonplaceholder.typicode.com/users/${post?.userId}`
      : null,
    fetcher
  );
  return {
    post,
    user,
    error: postError || userError,
    isLoading: !user && !userError,
  };
};
