import { useEffect, useState } from "react";
import { IProduct } from "../score/modules/cart/types";
import api from "../server/api";

export const Catalog = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);
  console.log(catalog);

  useEffect(() => {
    api.get("products").then((response) => {
      setCatalog(response.data);
    });
  }, []);

  return (
    <main>
      <h1>Catalog</h1>
      {catalog.map((product) => (
        <article key={product.id}>
          <strong>{product.title}</strong> {" - "}
          <span>{product.price}</span> {"  "}
          <button type="button">Comprar</button>
        </article>
      ))}
    </main>
  );
};
