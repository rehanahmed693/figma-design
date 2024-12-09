import Image from "next/image";

export default function () {
  return (
    <div>
      <div className="bg-[#F6F5FF] w-full h-[180px] sm:h-[286px]">
        <h2 className="text-[#101750] sm:text-[36px] text-[24px] sm:mx-96 p-4 sm:p-0 sm:pt-20">
          Shop Grid Default
        </h2>
        <ul className="flex justify-center items-center gap-3 sm:gap-10 sm:text-[15px] font-normal text-[#8A8FB9] sm:mr-80">
          <li>Home </li>
          <li>Pages</li>
          <li className="text-[#FB4997] underline">Shop Grid Default</li>
        </ul>
      </div>
      <div>
        <div className="w-[70%] h-[44px] sm:flex justify-between items-center mx-auto my-20">
          <div className="text-[#3F509E] text-[14px]">
            <h2 className="text-[#151875] text-[16px] sm:text-[22px]">
              Ecommerce Acceories & Fashion item{" "}
            </h2>
            <p className="text-[#8A8FB9] font-normal text-[12px]">
              About 9,620 results (0.62 seconds)
            </p>
          </div>
          <div className="flex gap-3 text-[10px] sm:text-[14px]">
            <p>Per Page</p>
            <input className="w-[40px] border-2 " type="text" />
            <p>Sort By:</p>
            <input
              className="w-[60px] border-2 text-[10px] "
              type="text"
              placeholder="Best Match"
            />
            <p>View:</p>
            <input className="w-[70px] border-2 " type="text" />
          </div>
        </div>
        <div className="w-[80%] flex justify-center items-center flex-wrap gap-4 mx-auto mt-20">
          <div className="w-[240px] h-[350px]">
            <div className="w-[240px] h-[240px] bg-[#F6F7FB] flex justify-center items-center">
              <Image src="/images/42.png" alt="" width={150} height={150} />
            </div>
            <h3 className="text-[#151875] text-[18px] font-bold text-center mt-4 ">
              Vel elit euismod
            </h3>
            <p className="text-[14px] font-normal mt-8 text-center">
              $26.00<span className="text-[#FB2E86] ml-2">$42.00</span>
            </p>
          </div>
          <div className="w-[240px] h-[350px]">
            <div className="w-[240px] h-[240px] bg-[#F6F7FB] flex justify-center items-center">
              <Image src="/images/41.png" alt="" width={150} height={150} />
            </div>
            <h3 className="text-[#151875] text-[18px] font-bold text-center mt-4 ">
              Vel elit euismod
            </h3>
            <p className="text-[14px] font-normal mt-8 text-center">
              $26.00<span className="text-[#FB2E86] ml-2">$42.00</span>
            </p>
          </div>
          <div className="w-[240px] h-[350px]">
            <div className="w-[240px] h-[240px] bg-[#F6F7FB] flex justify-center items-center">
              <Image src="/images/40.png" alt="" width={150} height={150} />
            </div>
            <h3 className="text-[#151875] text-[18px] font-bold text-center mt-4 ">
              Vel elit euismod
            </h3>
            <p className="text-[14px] font-normal mt-8 text-center">
              $26.00<span className="text-[#FB2E86] ml-2">$42.00</span>
            </p>
          </div>
          <div className="w-[240px] h-[350px]">
            <div className="w-[240px] h-[240px] bg-[#F6F7FB] flex justify-center items-center">
              <Image src="/images/39.png" alt="" width={150} height={150} />
            </div>
            <h3 className="text-[#151875] text-[18px] font-bold text-center mt-4 ">
              Vel elit euismod
            </h3>
            <p className="text-[14px] font-normal mt-8 text-center">
              $26.00<span className="text-[#FB2E86] ml-2">$42.00</span>
            </p>
          </div>
          <div className="w-[240px] h-[350px]">
            <div className="w-[240px] h-[240px] bg-[#F6F7FB] flex justify-center items-center">
              <Image src="/images/38.png" alt="" width={150} height={150} />
            </div>
            <h3 className="text-[#151875] text-[18px] font-bold text-center mt-4 ">
              Vel elit euismod
            </h3>
            <p className="text-[14px] font-normal mt-8 text-center">
              $26.00<span className="text-[#FB2E86] ml-2">$42.00</span>
            </p>
          </div>
          <div className="w-[240px] h-[350px]">
            <div className="w-[240px] h-[240px] bg-[#F6F7FB] flex justify-center items-center">
              <Image src="/images/37.png" alt="" width={150} height={150} />
            </div>
            <h3 className="text-[#151875] text-[18px] font-bold text-center mt-4 ">
              Vel elit euismod
            </h3>
            <p className="text-[14px] font-normal mt-8 text-center">
              $26.00<span className="text-[#FB2E86] ml-2">$42.00</span>
            </p>
          </div>
          <div className="w-[240px] h-[350px]">
            <div className="w-[240px] h-[240px] bg-[#F6F7FB] flex justify-center items-center">
              <Image src="/images/36.png" alt="" width={150} height={150} />
            </div>
            <h3 className="text-[#151875] text-[18px] font-bold text-center mt-4 ">
              Vel elit euismod
            </h3>
            <p className="text-[14px] font-normal mt-8 text-center">
              $26.00<span className="text-[#FB2E86] ml-2">$42.00</span>
            </p>
          </div>
          <div className="w-[240px] h-[350px]">
            <div className="w-[240px] h-[240px] bg-[#F6F7FB] flex justify-center items-center">
              <Image src="/images/35.png" alt="" width={150} height={150} />
            </div>
            <h3 className="text-[#151875] text-[18px] font-bold text-center mt-4 ">
              Vel elit euismod
            </h3>
            <p className="text-[14px] font-normal mt-8 text-center">
              $26.00<span className="text-[#FB2E86] ml-2">$42.00</span>
            </p>
          </div>
          <div className="w-[240px] h-[350px]">
            <div className="w-[240px] h-[240px] bg-[#F6F7FB] flex justify-center items-center">
              <Image src="/images/34.png" alt="" width={150} height={150} />
            </div>
            <h3 className="text-[#151875] text-[18px] font-bold text-center mt-4 ">
              Vel elit euismod
            </h3>
            <p className="text-[14px] font-normal mt-8 text-center">
              $26.00<span className="text-[#FB2E86] ml-2">$42.00</span>
            </p>
          </div>
          <div className="w-[240px] h-[350px]">
            <div className="w-[240px] h-[240px] bg-[#F6F7FB] flex justify-center items-center">
              <Image src="/images/33.png" alt="" width={150} height={150} />
            </div>
            <h3 className="text-[#151875] text-[18px] font-bold text-center mt-4 ">
              Vel elit euismod
            </h3>
            <p className="text-[14px] font-normal mt-8 text-center">
              $26.00<span className="text-[#FB2E86] ml-2">$42.00</span>
            </p>
          </div>
          <div className="w-[240px] h-[350px]">
            <div className="w-[240px] h-[240px] bg-[#F6F7FB] flex justify-center items-center">
              <Image src="/images/32.png" alt="" width={150} height={150} />
            </div>
            <h3 className="text-[#151875] text-[18px] font-bold text-center mt-4 ">
              Vel elit euismod
            </h3>
            <p className="text-[14px] font-normal mt-8 text-center">
              $26.00<span className="text-[#FB2E86] ml-2">$42.00</span>
            </p>
          </div>
          <div className="w-[240px] h-[350px]">
            <div className="w-[240px] h-[240px] bg-[#F6F7FB] flex justify-center items-center">
              <Image src="/images/31.png" alt="" width={150} height={150} />
            </div>
            <h3 className="text-[#151875] text-[18px] font-bold text-center mt-4 ">
              Vel elit euismod
            </h3>
            <p className="text-[14px] font-normal mt-8 text-center">
              $26.00<span className="text-[#FB2E86] ml-2">$42.00</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
