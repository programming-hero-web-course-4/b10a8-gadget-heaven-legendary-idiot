import bannerIMG from "../assets/banner.jpg";

const HomeBanner = () => {
  return (
    <div className="text-center rounded-b-2xl border-4 border-red-700">
      <div className="space-y-7 bg-[#9538E2] min-h-[500px]">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white w-[80%] mx-auto">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h2>
        <p className="text-base sm:text-lg font-normal text-white text-center w-[80%] mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button className="px-4 py-2 bg-white text-[#9538E2] font-bold text-lg rounded-full">
          Shop Now
        </button>
      </div>
      <div className="relative border-4 min-h-[200px]">
        <figure className="absolute border border-white rounded-2xl p-4 left-1/2 -translate-x-1/2 -top-1/2 h-[300px] sm:h-[450px] w-[85%]">
          <img
            className="object-cover rounded-2xl mx-auto w-full h-full"
            src={bannerIMG}
            alt="Hero Banner Image"
          />
        </figure>
      </div>
    </div>
  );
};

export default HomeBanner;
