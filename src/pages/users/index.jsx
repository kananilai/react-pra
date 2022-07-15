import Head from "next/head";
import { Header } from "src/components/Header";
import { UsersComponent } from "src/components/Users";
import { SWRConfig } from "swr";

export const getServerSideProps = async (ctx) => {
  const USERS_API_URL = `https://jsonplaceholder.typicode.com/users`;
  const users = await fetch(USERS_API_URL);
  const usesrData = await users.json();

  return {
    props: {
      fallback: {
        [USERS_API_URL]: usesrData,
      },
    },
  };
};

const Users = (props) => {
  const { fallback } = props;
  return (
    <div>
      <Head>
        <title>Users Page</title>
      </Head>
      <SWRConfig value={{ fallback }}>
        <Header />
        <UsersComponent />
      </SWRConfig>
    </div>
  );
};

export default Users;
