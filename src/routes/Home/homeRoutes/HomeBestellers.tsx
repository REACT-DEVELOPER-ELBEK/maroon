import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import { fetchProducts } from "../../../redux/slicer/slice";
import { useEffect } from "react";

const HomeBestellers = () => {
  const dispatch = useAppDispatch();
  const productsInstance = useAppSelector((state) => state.products.data);
  dispatch(fetchProducts());

  useEffect(() => {
    productsInstance;
  }, [productsInstance]);
  return (
    <div className="bestellers mt-64">
      <div className="container">
        <div className="bestellers__wrapper flex">
          <div className="bestellers__info flex flex-col">
            <h2 className="text-4xl font-medium">Бестселлеры</h2>
            <p className="mt-8 text-xl w-64 text-start">
              Легендарные продукты, завоевавшие любовь наших клиентов
            </p>
            <button className="mt-10 text-black font-medium py-2 w-44 border-solid border-gray-700">
              Смотреть все
            </button>
          </div>
          <div className="product__cards flex gap-6">
            {productsInstance?.slice(0, 4).map((product: any, index) => (
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
    </div>
  );
};

export default HomeBestellers;
