import Link from "next/link";
import { useCommentsByPostId } from "src/hooks/useFetchArray";

export const CommentsByPostId = (props) => {
  const { data, error, isLoading, isEmpty } = useCommentsByPostId(props.id);
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
    <div>
      <h2>コメント</h2>
    <ol>
      {data.map((comment) => {
        return (
          <li key={comment.id}>
            <Link href={`/comments/${comment.id}`}>
              <a>{comment.body}</a>
            </Link>
          </li>
        );
      })}
    </ol>
    </div>

  );
};
