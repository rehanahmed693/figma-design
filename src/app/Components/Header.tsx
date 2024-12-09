import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="w-full hidden sm:h-[44px] bg-[#7E33E0] text-white sm:flex justify-around  items-center">
        <div className="text-[16px] font-semibold flex justify-center gap-2 items-center">
          <p className=" text-[16px] font-semibold leading-4 text-[#F1F1F1]">
            <i className="bi bi-envelope mr-2"></i>mhhasanul@gmail.com
          </p>

          <i className="bi bi-telephone-inbound"></i>
          <p>(12345)67890</p>
        </div>
        <div className="w-[300px] h-[24px] flex justify-center items-center ">
          <p>
            English<i className="bi bi-chevron-compact-down"></i>
          </p>
          <p>
            USD<i className="bi bi-chevron-compact-down"></i>
          </p>
          <p>
            Login<i className="bi bi-person "></i>
          </p>
          <p>
            Whishlist<i className="bi bi-heart"></i>
          </p>
          <p>
            <i className="bi bi-cart ml-3"></i>
          </p>
        </div>
      </div>
      <div className="flex sm:flex justify-center h-[160px] sm:h-[80px]">
        <div className=" sm:flex justify-center items-center w-screen sm:w-[1050px] h-[40px] mx-[150px] mt-[20px]">
          <h1 className="text-[34px] font-bold text-[#0D0E43]">Hecto</h1>

          <ul className="flex justify-center gap-3 sm:gap-9 sm:ml-[107px] items-center text-[12px] sm:text-base font-normal text-[#0D0E43] leading-5">
            <Link className="text-[#FB2E86]" href="./">
              <li>Home</li>
            </Link>
            <Link href="/Pages">
              <li>Pages</li>
            </Link>
            <Link href="">
              <li>Products</li>
            </Link>
            <Link href="">
              <li>Blog</li>
            </Link>
            <Link href="">
              <li>Shop</li>
            </Link>
            <Link href="">
              <li>Contact</li>
            </Link>
          </ul>

          <div className="sm:ml-16 flex  w-[317px] h-[40px] bg-[#FB2E86]">
            <input className="flex-1 border-2" type="text" />
            <div className="w-[51px] text-white flex justify-center items-center">
              <i className="bi bi-search w-[60px] px-4"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
