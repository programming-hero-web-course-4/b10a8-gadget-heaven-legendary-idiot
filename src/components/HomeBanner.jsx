import bannerIMG from "../assets/banner.jpg";

const HomeBanner = () => {
  return (
    <div className="text-center rounded-b-2xl">
      <div className="space-y-7 bg-[#9538E2] min-h-[500px] pt-4 sm:pt-12 rounded-b-2xl">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white w-[80%] mx-auto">
          Upgrade Your Tech Accessories with Gadget Heaven Accessories
        </h2>
        <p className="text-base sm:text-lg font-normal text-white text-center w-[80%] mx-auto">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <button className="px-4 py-2 bg-white text-[#9538E2] font-bold text-lg rounded-full">
          Shop Now
        </button>
      </div>
      <div className="relative min-h-[200px]">
        <figure className="absolute border border-white rounded-2xl p-4 left-1/2 -translate-x-1/2 -top-28 xl:-top-44 h-[300px] xl:h-[390px] w-[90%] sm:w-[75%]">
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
