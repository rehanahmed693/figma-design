import Image from "next/image";

export default function Discount() {
  return (
    <div className="">
      <h3 className="text-[#151875] text-[24px] sm:text-[42px] text-center mt-16">
        Discount Item
      </h3>
      <ul className="flex justify-center items-center gap-7 text-[12px] sm:text-[18px] font-normal text-[#151875]">
        <li className="text-[#FB4997] underline">Wood Chair</li>
        <li>Plastic Chair</li>
        <li>Sofa Colletion</li>
      </ul>
      <div className="w-[75%] h-full sm:h-[597px] mx-auto sm:flex justify-center items-center">
        <div className="sm:w-[50%] h-[300px] sm:h-[597px] mt-10 sm:mt-60">
          <h3 className="sm:text-[35px] text-[20px] text-[#151875] ">
            20% Discount Of All Products
          </h3>
          <span className="text-[21px] text-[#FB2E86] ">Eams Sofa Compact</span>
          <p className="font-normal text-[17px] text-[#B7BACB] py-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum.
          </p>
          <ul className="flex flex-wrap justify-between font-normal text-[16px] text-[#B7BACB] py-2">
            <li>Material expose like metals</li>
            <li>Clear lines and geomatric figures</li>
            <li>Simple neutral colours.</li>
            <li className="mr-10">Material expose like metals</li>
          </ul>

          <button className="w-[200px] h-[57px] bg-[#FB2E86] text-[#FFFFFF] text-[17px] my-8">
            Shop Now
          </button>
        </div>
        <div className="w-[50%] h-[300px] sm:h-[597px]">
          <div className="rounded-full bg-[#FCECF1] w-[300px] sm:w-[470px] -[300px] sm:h-[470px] sm:mx-12 mr-12  mt-32 sm:mt-0 sm:my-14">
            <Image
              className="sm:w-[470px] w-[300px] h-[300px] sm:h-[470px] mt-6"
              src="/images/mainchair.png"
              alt=""
              width={470}
              height={470}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
