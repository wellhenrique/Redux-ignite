import { useEffect, useState } from "react";
import { IProduct } from "../score/modules/cart/types";
import api from "../server/api";
import { CatalogItem } from "./CatalogItem";

export const Catalog = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);

  useEffect(() => {
    api.get("products").then((response) => {
      setCatalog(response.data);
    });
  }, []);

  return (
    <main>
      <h1>Catalog</h1>
      {catalog.map((product) => (
        <CatalogItem key={product.id} product={product} />
      ))}
    </main>
  );
};
