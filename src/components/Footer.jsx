const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="w-11/12 m-auto">
        <div className="w-full sm:w-1/2 py-8 text-center mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold">Gadget Heaven</h2>
          <p className="text-base text-[#09080F99] font-medium">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-[#09080F1A] py-8">
          <div className="text-center space-y-2">
            <h2 className="text-lg font-bold text-[#09080F]">Services</h2>
            <p className="text-[#09080F99] font-normal">Product Support</p>
            <p className="text-[#09080F99] font-normal">Order Tracking</p>
            <p className="text-[#09080F99] font-normal">Shipping & Delivery</p>
            <p className="text-[#09080F99] font-normal">Returns</p>
          </div>
          <div className="text-center space-y-2">
            <h2 className="text-lg font-bold text-[#09080F]">Company</h2>
            <p className="text-[#09080F99] font-normal">About Us</p>
            <p className="text-[#09080F99] font-normal">Careers</p>
            <p className="text-[#09080F99] font-normal">Contact</p>
          </div>
          <div className="text-center space-y-2">
            <h2 className="text-lg font-bold text-[#09080F]">Legal</h2>
            <p className="text-[#09080F99] font-normal">Terms of Service</p>
            <p className="text-[#09080F99] font-normal">Privacy Policy</p>
            <p className="text-[#09080F99] font-normal">Shipping & Delivery</p>
            <p className="text-[#09080F99] font-normal">Cookie Policy</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
