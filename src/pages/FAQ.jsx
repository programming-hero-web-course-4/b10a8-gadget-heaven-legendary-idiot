import useDocumentTitle from "./../utils/useDocumentTitle";
const FAQ = () => {
  useDocumentTitle("FAQ - Gadget Heaven");
  return (
    <div className="my-8 space-y-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center">
        Frequently Asked Questions (FAQ)
      </h2>
      <div className="collapse collapse-plus bg-white shadow-2xs">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">
          Q1: What gadgets do you offer?
        </div>
        <div className="collapse-content">
          <p>
            At Gadget Heaven, we offer a diverse range of gadgets including the
            latest smartphones, laptops, tablets, gaming consoles, and a variety
            of accessories like chargers, cases, headphones, and more. We aim to
            provide a comprehensive selection to meet all your tech needs.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-white shadow-2xs">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Q2: Do you sell refurbished items?
        </div>
        <div className="collapse-content">
          <p>
            Yes, we offer both brand new and high-quality refurbished products.
            Our refurbished items are thoroughly tested and certified to ensure
            they function like new, providing great value at a lower price.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-white shadow-2xs">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Q3. What are your shipping options?
        </div>
        <div className="collapse-content">
          <p>
            We provide multiple shipping options to accommodate your needs.
            Standard shipping takes 3-5 business days, while express shipping
            ensures your order arrives within 1-2 business days. We also offer
            international shipping to most countries.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-white shadow-2xs">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Q4. How can I track my order?
        </div>
        <div className="collapse-content">
          <p>
            After your order is shipped, we will send you a tracking number via
            email. You can use this number to track your order on our website or
            through the carrier's tracking system, keeping you updated on your
            order's journey.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-white shadow-2xs">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Q5. What payment methods are accepted?
        </div>
        <div className="collapse-content">
          <p>
            We accept a variety of payment methods for your convenience. These
            include all major credit cards (Visa, MasterCard, American Express),
            PayPal, and Apple Pay. All transactions are securely processed to
            protect your information.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-white shadow-2xs">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Q6. What is your return policy?
        </div>
        <div className="collapse-content">
          <p>
            We offer a 30-day return policy for all our products. If you are not
            satisfied with your purchase, you can return the item within 30 days
            for a full refund or exchange. Please ensure the item is in its
            original condition and packaging.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
