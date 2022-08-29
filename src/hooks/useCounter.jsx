import { useCallback, useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(
    (e) => {
      console.log(count);
      setCount((prevCount) => prevCount + 1);
    },
    [count]
  );
  const handleDisplay = useCallback((e) => {
    setIsShow((prevIsShow) => !prevIsShow);
  }, []);

  return { count, isShow, handleClick, handleDisplay };
};
