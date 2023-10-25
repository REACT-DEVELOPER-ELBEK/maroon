import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { fetchProducts } from "../../../redux/slicer/slice";
import { useEffect } from "react";

const CatalogProducts = () => {
    const dispatch = useAppDispatch();
  const productsInstance = useAppSelector((state) => state.products.data);
  dispatch(fetchProducts());

  useEffect(() => {
    productsInstance;
  }, [productsInstance]);
  return (
    <>
         <div className="catalog__cards ml-48">
          <div className="container">
          <div className="product__cards flex flex-wrap gap-6">
            {productsInstance?.map((product: any, index) => (
              <div className="product pb-6 bg-slate-200 w-60 flex flex-col align-middle" key={index}>
                <img src={product.images[0]} alt="" />
                <h2 className="text-center font-medium">{product.category.name}</h2>
                <h3 className="text-center text-gray-400">{product.title.slice(0, 20, '...')}</h3>
                <Link to='/about' className="border-b-2 border-sky-950 w-24 text-center ml-20">Подробнее</Link>
              </div>
            ))}
          </div>
          </div>
         </div>
    </>
  )
}

export default CatalogProducts