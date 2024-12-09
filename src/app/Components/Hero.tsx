import Image from "next/image";

export default function Hero() {
  return (
    <div className="sm:flex w-full h-full sm:h-[100vh] bg-[#F2F0FF] ">
      <div className="w-[360px] h-[360px] mr-[-100px]">
        <Image src="/images/image 32.png" alt="" width={360} height={360} />
      </div>

      <div className="sm:w-[854px] w-[80%]  sm:h-[220px] sm:my-[200px] sm:ml-[100px]">
        <p className="font-bold sm:text-[16px] text-[12px] text-[#FB2E86]">
          Best Furniture For Your Castle....
        </p>

        <h2 className="sm:text-[34px] text-[30px] text-[#000000] ">
          New Furniture Collection Trends in 2020
        </h2>

        <p className="text-[16px] font-bold text-[#8A8FB9] mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </p>

        <button className="w-[163px] h-[50px] text-[17px] mt-8 text-[#FFFFFF] bg-[#FB2E86] rounded-sm">
          Shop Now
        </button>
      </div>

      <div className="sm:w-[650px] sm:h-[90%] mr-10 mt-[40px] sm:left-[1041px]">
        <div className="sm:w-[600px] h-[90%] rounded-[50%] bg-[#ECD2FA59]">
          <Image src="/images/sofa.png" alt="image" width={600} height={600} />
        </div>
      </div>
    </div>
  );
}
