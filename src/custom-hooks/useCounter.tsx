import { useState } from 'react';

//Proprety is an object for min max
const useCounter = (initalValue = 0, min: any = null, max = Infinity) => {
  const [count, setCount] = useState(initalValue);

  return [
    count,
    {
      increment: () => {
        if (!max) {
          setCount(c => c + 1);
          return;
        }
        if (count + 1 > max) return;
        setCount(c => c + 1);
      },
      decrement: () => {
        if (!min) {
          setCount(c => c - 1);
          return;
        }
        if (count - 1 < min) return;
        setCount(c => c - 1);
      },
      setSpecifivalue: (number: number) => {
        if (number < min || number > max) return;
        setCount(number);
      },
      reset: () => setCount(initalValue),
    },
  ];
};

export default useCounter;
