import Nav from "./layout/nav/Nav";
import { useAppDispatch, useAppSelector } from "./redux/hooks/hooks";
import { fetchProducts } from "./redux/slicer/slice";
import { useEffect } from "react";
import Routes from './routes/routes'
import './App.css'

function App() {
  const dispatch = useAppDispatch();
  const productsInstance = useAppSelector((state) => console.log(state.products.data));
  dispatch(fetchProducts());

  useEffect(() => {
    productsInstance;
  }, []);

  return (
      <>
      <Nav />
      <Routes/>
        </>
  );
}

export default App;
