import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { AddProductToCart } from "../score/modules/cart/actions";
import { IProduct } from "../score/modules/cart/types";

interface CatalogItemProps {
  product: IProduct;
}
export const CatalogItem = ({ product }: CatalogItemProps) => {
  const dispatch = useDispatch();

  const handleAddProductToCart = useCallback(() => {
    dispatch(AddProductToCart(product));
  }, [dispatch, product]);

  return (
    <article>
      <strong>{product.title}</strong> {" - "}
      <span>{product.price}</span> {"  "}
      <button type="button" onClick={handleAddProductToCart}>
        Comprar
      </button>
    </article>
  );
};
