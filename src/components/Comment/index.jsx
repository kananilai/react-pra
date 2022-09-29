import { useComment } from "src/hooks/useComment";

export const CommentsComponent = () => {
  const { comment, commentError, isLoading } = useComment();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (commentError) {
    return <div>{commentError.message}</div>;
  }

  return (
    <>
      <h1>{comment?.name}</h1>
      <p>{comment?.email}</p>
    </>
  );
};
