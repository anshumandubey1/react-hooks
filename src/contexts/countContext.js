import { createContext } from 'react';

const CountContext = createContext(0);

export const reducer = (count, action) => {
  // console.log({count, action})
  switch (action.type) {
    case 'increment':
      return (count + 101) % 100;
    case 'decrement':
      return (count + 99) % 100;
    default:
      throw new Error();
  }
};

export default CountContext;
