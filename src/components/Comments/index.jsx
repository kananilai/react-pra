import Link from "next/link";
import { useComments } from "src/hooks/useComments";

export const CommentsComponent = () => {
  const { data, error, isLoading, isEmpty } = useComments();
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
      {data.map((comment) => {
        return (
          <li key={comment.id}>
            <Link href={`/comments/${comment.id}`}>
              <a>
                {comment.body}
              </a>
            </Link>
          </li>
        );
      })}
    </ol>
  );
};
