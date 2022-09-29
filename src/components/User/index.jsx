import { useUser } from "src/hooks/useUser";

export const User = () => {
  const { user, userError, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (userError) {
    return <div>{userError.message}</div>;
  }

  return (
    <>
      <h1>{user?.name}</h1>
      <p>{user?.email}</p>
    </>
  );
};
