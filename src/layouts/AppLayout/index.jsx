import { Header } from "src/layouts/AppLayout/Header";

export const AppLayout = (props) => {
  return (
    <div className="flex mx-auto max-w-2xl flex-col items-center px-2 min-">
      <Header />
      {props.children}
    </div>
  );
};
