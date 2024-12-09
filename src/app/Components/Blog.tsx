import Image from "next/image";

export default function Blog() {
  return (
    <div>
      <h3 className="text-[42px] text-[#151875] text-center mt-20 mb-6">
        Leatest Blog
      </h3>
      <div className="sm:flex justify-center items-center gap-4 w-[70%] sm:mx-auto ">
        <div className="w-[370px] h-[490px] shadow-lg">
          <div className=" h-[250px]">
            <Image src="/images/image18.png" alt="" width={370} height={250} />
          </div>
          <div className="px-3">
            <h1 className="text-[#151875] text-[18px] my-6">
              Top esssential Trends in 2021
            </h1>
            <p className="text-[#72718F] text-[16px] font-normal my-3">
              More off this less hello samlande lied much over tightly circa
              horse taped mightly
            </p>

            <button className="text-[16px] font-normal underline text-[#151875]">
              Read More
            </button>
          </div>
        </div>
        <div className="w-[370px] h-[490px] shadow-lg ">
          <div className=" h-[250px]">
            <Image src="/images/image19.png" alt="" width={370} height={250} />
          </div>
          <div className="px-3">
            <h1 className="text-[#151875] text-[18px] my-6">
              Top esssential Trends in 2021
            </h1>
            <p className="text-[#72718F] text-[16px] font-normal my-3">
              More off this less hello samlande lied much over tightly circa
              horse taped mightly
            </p>

            <button className="text-[16px] font-normal underline text-[#151875]">
              Read More
            </button>
          </div>
        </div>
        <div className="w-[370px] h-[490px] shadow-lg ">
          <div className=" h-[250px]">
            <Image src="/images/image20.png" alt="" width={370} height={250} />
          </div>
          <div className="px-3">
            <h1 className="text-[#151875] text-[18px] my-6">
              Top esssential Trends in 2021
            </h1>
            <p className="text-[#72718F] text-[16px] font-normal my-3">
              More off this less hello samlande lied much over tightly circa
              horse taped mightly
            </p>

            <button className="text-[16px] font-normal underline text-[#151875]">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
