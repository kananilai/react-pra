import Head from "next/head";
import { Header } from "src/components/Header";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";
import Link from "next/link";

const useUser = () => {
  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/users",
    fetcher
  );
  return {
    data,
    error,
    isLoading: !data && !error,
    isEmpty: data && data.length === 0,
  };
};

const UserComponent = () => {
  const { data, error, isLoading, isEmpty } = useUser();
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
      {data.map((user) => {
        return (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <a>
                {user.name} ({user.username})
              </a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};

const Users = () => {
  return (
    <div>
      <Head>
        <title>Userd Page</title>
      </Head>
      <Header />
      <UserComponent />
    </div>
  );
};

export default Users;
