import { Link } from "react-router-dom";

const SingleCard = ({ item }) => {
  const { product_id, product_img, price, product_title, slug } = item;
  return (
    <div className="card bg-base-100 shadow-lg p-6 space-y-4 border border-gray-100">
      <figure className="h-72">
        <img
          src={product_img}
          alt={product_title}
          className="rounded-xl h-full w-full object-cover border border-gray-100"
        />
      </figure>
      <div className="space-y-3">
        <h2 className="text-xl text-[#09080F] font-bold md:text-nowrap overflow-hidden text-ellipsis">
          {product_title}
        </h2>
        <p className="text-lg font-medium text-[#09080F99]">Price: ${price}</p>

        <Link
          to={`/${slug}/${product_id}`}
          className="btn border border-[#9538E2] text-lg font-bold text-[#9538E2] p-4 rounded-full"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default SingleCard;
