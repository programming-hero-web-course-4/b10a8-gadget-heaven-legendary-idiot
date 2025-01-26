import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductSection from "../components/ProductSection";
import ProductContainer from "../components/ProductContainer";

const ProductPage = () => {
  const { slug, item } = useParams();
  const allProducts = useLoaderData();
  const [showProduct, setShowProduct] = useState({});

  useEffect(() => {
    const product = allProducts.find(
      (product) => product.slug === slug && product.product_id === item
    );
    setShowProduct(product);
  }, [allProducts, item, slug]);

  return (
    <div className="relative h-[1550px] md:h-[1250px] lg:h-[1100px] xl:h-[1000px]">
      <ProductSection />
      <ProductContainer product={showProduct} />
    </div>
  );
};

export default ProductPage;
