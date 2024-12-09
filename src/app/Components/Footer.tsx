export default function Footer() {
  return (
    <div className="w-full h-full sm:h-[532px] bg-[#EEEFFB] mt-20 pb-5 sm:pb-0">
      <div className="sm:flex justify-around w-[80%] mx-auto">
        <div className="my-20">
          <h1 className="sm:text-[38px] text-[28px]">Hekto</h1>
          <div className="sm:w-[377px] h-[44px] flex justify-center items-center my-2">
            <input
              className="w-[338px] h-[44px]"
              type="text"
              placeholder="Enter Email Address"
            />
            <button className="sm:w-[135px] w-[100px] h-[39px] bg-[#FB2E86] text-[#EEEFFB] font-medium text-[16px]">
              Sign Up
            </button>
          </div>
          <p className="text=[16px] font-normal text-[#9196AA]">
            Contact Info<br></br>17 Princess Road, London, Greater London NW1
            8JR, UK
          </p>
        </div>

        <div className="my-20">
          <p className="text-[22px]">Categories</p>
          <ul className="text-[16px] font-normal text-[#8A8FB9]">
            <li className="my-3">Laptops & Computers</li>
            <li className="my-3">Cameras & Photography</li>
            <li className="my-3">Smart Phones & Tablets</li>
            <li className="my-3">Video Games & Consoles</li>
            <li className="my-3">Waterproof Headphones</li>
          </ul>
        </div>

        <div className="my-20">
          <p className="text-[22px]">Customer Care</p>
          <ul className="text-[16px] font-normal text-[#8A8FB9]">
            <li className="my-2">My Account</li>
            <li className="my-2">Discount</li>
            <li className="my-2">Returns</li>
            <li className="my-2">Orders History</li>
            <li className="my-2">Order Tracking</li>
          </ul>
        </div>

        <div className="my-20">
          <p className="text-[22px]">Pages</p>
          <ul className="text-[16px] font-normal text-[#8A8FB9]">
            <li className="my-2">Blog</li>
            <li className="my-2">Browse the Shop</li>
            <li className="my-2">Category</li>
            <li className="my-2">Pre-Built Pages</li>
            <li className="my-2">Visual Composer Elements</li>
            <li className="my-2">WooCommerce Pages</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
