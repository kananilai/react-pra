import { useRouter } from "next/router";
import { fetcher } from "src/util/fetcher";
import useSWR from "swr";

export const useComment = () => {
  const router = useRouter();
  const { data: comment, error: commentError } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/comments/${router.query.id}`
      : null,
    fetcher
  );
  console.log(comment);
  return {
    comment,
    commentError,
    isLoading: !commentError && !comment,
  };
};
