import Link from "next/link";
import { useUser } from "src/hooks/useUsers";

export const UsersComponent = () => {
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
