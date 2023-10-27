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
            {productsInstance?.map((product: any) => (
              <div
                className="product pb-6 w-60 flex flex-col align-middle"
                key={product.id}
              >
                <img src={product.image} alt="" />
                <div
                  className="card__text mt-56 ml-16"
                  style={{ position: "absolute" }}
                >
                  <h2 className=" font-medium text-center">{product.name}</h2>
                  <h3 className="text-gray-400">
                    {product.description.slice(0, 20, "...")}
                  </h3>
                  <Link
                    to={`/about/${product.id}
                    `}
                    className="ml-5 border-b-2 border-sky-950 w-24"
                  >
                    Подробнее
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CatalogProducts;
