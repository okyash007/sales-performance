import React, { useEffect, useState } from "react";
import { makeGetRequest } from "../../api/makeGetRequest";
import { backendUrl } from "../../utils/constants";

const Products = () => {
  const [products, setProducts] = useState(null);

  async function getProducts() {
    const res = await makeGetRequest(`${backendUrl}/product`);
    setProducts(res.data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  if (products === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="pt-20 px-2 flex flex-wrap gap-2">
        {products.map((m) => (
          <div
            className="bg-[#ffffff1a] rounded-lg p-5 w-max"
            key={m._id}
          >
            <h1 className="text-2xl">{m.name}</h1>
            <p>cost - {m.cost_price}</p>
            <p>selling price - {m.cost_price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
