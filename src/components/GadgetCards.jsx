import React from "react";
import SingleCard from "./SingleCard";

const GadgetCards = ({ products }) => {
  return (
    <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      {products?.map((product) => {
        return <SingleCard key={product.product_id} item={product} />;
      })}
    </div>
  );
};

export default GadgetCards;
