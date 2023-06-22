import React from "react";

const Products = () => {
  let productos = [
    { name: "Airpods", price: 237 },
    { name: "iPhone 14 Pro", price: 1200 },
    { name: "iPod Touch", price: 268 },
    { name: "Macbook", price: 2460 },
  ];

  return (
    <>
      {productos.map((p) => {
        return (
          <div className="p-container">
            <h1 className="p-name">{p.name}</h1>
            <p className="p-price">{p.price}</p>
          </div>
        );
      })}
    </>
  );
};

export default Products;
