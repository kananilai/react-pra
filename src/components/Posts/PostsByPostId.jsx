import Link from "next/link";
import { usePostsbyUserId } from "src/hooks/useFetchArray";

export const PostsByPostId = (props) => {
  const { data, error } = usePostsbyUserId(props.id);

  if (!data && !error) {
    return <div>ローディング中</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }
  return (
    <div>
      <h3>投稿記事一覧</h3>
      <ol>
        {data.map((post) => {
          return (
            <li key={post.id}>
              <Link href={`/posts/${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
