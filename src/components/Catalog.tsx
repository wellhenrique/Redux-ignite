import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { AddProductToCart } from "../score/modules/cart/actions";
import { IProduct } from "../score/modules/cart/types";
import api from "../server/api";

export const Catalog = () => {
  const dispatch = useDispatch();
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get("products").then((response) => {
      setCatalog(response.data);
    });
  }, []);

  const handleAddProductToCart = useCallback(
    (product: IProduct) => {
      dispatch(AddProductToCart(product));
    },
    [dispatch]
  );

  return (
    <main>
      <h1>Catalog</h1>
      {catalog.map((product) => (
        <article key={product.id}>
          <strong>{product.title}</strong> {" - "}
          <span>{product.price}</span> {"  "}
          <button type="button" onClick={() => handleAddProductToCart(product)}>
            Comprar
          </button>
        </article>
      ))}
    </main>
  );
};
