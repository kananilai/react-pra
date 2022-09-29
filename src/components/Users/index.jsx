import Link from "next/link";
import { useUsers } from "src/hooks/useUsers";

export const UsersComponent = () => {
  const { data, error, isLoading, isEmpty } = useUsers();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isEmpty) {
    return <div>No data</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>
          <Link href={`/users/${user.id}`}>
            <a>{user.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
