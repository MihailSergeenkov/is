import { createContext } from 'react';
const basketContext = createContext(
  {
    basket: [],
    addProduct: () => {},
  }
);
export default basketContext;
