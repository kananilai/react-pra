import { useRouter } from "next/router";
import { API_URL } from "src/utils/const";
import useSWRiImmutable from "swr/immutable";

export const useComment = () => {
  const router = useRouter();
  const { data, error } = useSWRiImmutable(
    router.query.id ? `${API_URL}/comments/${router.query.id}` : null
  );
  return {
    data,
    error,
    isLoading: !data && !error,
  };
};
