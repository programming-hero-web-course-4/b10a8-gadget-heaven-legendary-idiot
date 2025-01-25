const Footer = () => {
  return (
    <div className="w-11/12">
      <div className="w-full sm:w-1/2">
        <h2>Gadget Heaven</h2>
        <p>Leading the way in cutting-edge technology and innovation.</p>
      </div>
      <div className="flex justify-around gap-4 flex-wrap">
        <div>
          <h2>Services</h2>
          <p>Product Support</p>
          <p>Order Tracking</p>
          <p>Shipping & Delivery</p>
          <p>Returns</p>
        </div>
        <div>
          <h2>Company</h2>
          <p>About Us</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
        <div>
          <h2>Legal</h2>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Shipping & Delivery</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
