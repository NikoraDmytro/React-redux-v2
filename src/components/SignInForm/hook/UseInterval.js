import { useState, useEffect } from "react";

export function useInterval(max) {
  const [index, setIndex] = useState(0);

  const choseSlide = (number) => {
    setIndex(number);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index + 1) % max);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [index, max]);

  return [index, choseSlide];
}
