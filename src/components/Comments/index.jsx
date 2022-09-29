import Link from "next/link";
import { useComments } from "src/hooks/useComments";

export const UsersComponent = () => {
  const { data, error, isLoading, isEmpty } = useComments();

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
      {data.map((comment) => (
        <li key={comment.id}>
          <Link href={`/comments/${comment.id}`}>
            <a>{comment.name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};
