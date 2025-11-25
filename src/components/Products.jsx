import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProduct] = useState([]);

  const ShowProduct = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProduct(data);
  };

  useEffect(() => {
    ShowProduct();
  }, []);

  return (
    <div className="md:w-8/10 mx-auto px-5">
      <p className="text-4xl my-5">All products</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-[20px]">
        {products.map((p) => (
          <div key={p.id} className="bg-gray-200 p-5 rounded-2xl h-[600px]">
            <img src={p.image} alt="" className="h-1/2 mx-auto" />
            <div className="bg-gray-300 h-1/2 py-5 px-3 flex flex-col justify-between">
              <div>
                <p className="text-2xl">{p.title}</p>
                <div className="flex justify-end">
                  <p className="text-red-500">$ {p.price}</p>
                </div>
              </div>
              <button className="p-5 bg-blue-400 w-full rounded-2xl text-2xl">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
