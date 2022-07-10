import { Header } from "src/components/Header";
import { useRouter } from "next/router";
import useSWR from "swr";
import { fetcher } from "src/utils/fetcher";

const useUser = () => {
  const router = useRouter();
  const { data, error } = useSWR(
    router.query.id
      ? `https://jsonplaceholder.typicode.com/users/${router.query.id}`
      : null,
    fetcher
  );
  return {
    data,
    error,
    isLoading: !data && !error,
  };
};

const UserComponent = () => {
  const { data, error, isLoading } = useUser();
  if (isLoading) {
    return <p>ローディング中</p>;
  }
  if (error) {
    return <p>{error.message}</p>;
  }
  return (
    <div>
      <h1>{data.name}</h1>
      <ul>
        <li>{data.email}</li>
        <li>{data.address.city}</li>
        <li>{data.phone}</li>
        <li>{data.website}</li>
        <li>{data.company.name}</li>
      </ul>
    </div>
  );
};

const UsersId = () => {
  return (
    <div>
      <Header />
      <UserComponent />
    </div>
  );
};

export default UsersId;
