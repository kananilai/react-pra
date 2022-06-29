import { useCallback, useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [isShow, setIsShow] = useState(true);
  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((prevCount) => prevCount + 1);
    }
  }, [count]);
  const handleDisplay = useCallback(() => {
    //引数には前回の値の状態が入る
    setIsShow((prevIsShow) => !prevIsShow);
    // return isShow ? false : true;
  }, []);
  //使うものを返す
  return { count, isShow, handleClick, handleDisplay };
};
