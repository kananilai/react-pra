import { useRouter } from "next/router";
import { fetcher } from "src/util/fetcher";
import useSWR from "swr";

export const useUser = () => {
  const router = useRouter();
  const { data: user, error: userError } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/users/${router.query.id}`
      : null,
    fetcher
  );
  console.log(user);
  return {
    user,
    userError,
    isLoading: !userError && !user,
  };
};
