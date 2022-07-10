import Link from "next/link";
import { useCommentsByPostId } from "src/hooks/useFetchArray";

export const PostByCommentId = (props) => {
  const { data, error } = useCommentsByPostId(props.id);

  if (!data && !error) {
    return <div>ローディング中</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <h3>元記事一覧</h3>
      <ol>
        {data.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <a>{post.body}</a>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
