import Link from "next/link";
import { fetcher } from "src/utils/fetcher";
import useSWR from "swr";

export const PostByPostId = (props) => {
  const { data, error } = useSWR(
    props.id
      ? `https://jsonplaceholder.typicode.com/posts/?userId=${props.id}`
      : null,
    fetcher
  );
  console.log(data);
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
