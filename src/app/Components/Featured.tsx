import Image from "next/image";

export default function Feature() {
  return (
    <div className="w-full">
      <div className="w-[80%] mx-auto">
        <h2 className="text-[42px] mt-24 py-5 text-center">
          Featured Products
        </h2>
        <div className="sm:flex justify-center items-center gap-4">
          <div className="w-[240px] h-[341px] ml-10 sm:ml-0 shadow-lg">
            <div className="flex justify-center items-center w-[240px] h-[221px] bg-[#F6F7FB]">
              <Image
                src="/images/image 1.png"
                alt="image"
                width={180}
                height={160}
              />
            </div>

            <h1 className="text-[#FB2E86] py-2 text-[18px] text-center font-bold">
              Cantilever chair
            </h1>

            <p className="text-[#151875] text-[14px] text-center">
              Code - Y523201<br></br>$42.00{" "}
            </p>
          </div>

          <div className="w-[240px] h-[341px] ml-10 sm:ml-0  shadow-lg">
            <div className="flex justify-center items-center w-[240px] h-[221px] bg-[#F6F7FB]">
              <Image
                src="/images/image 2.png"
                alt="image"
                width={180}
                height={160}
              />
            </div>

            <h1 className="text-[#FB2E86] py-2 text-[18px] text-center font-bold">
              Cantilever chair
            </h1>

            <p className="text-[#151875] text-[14px] text-center">
              Code - Y523201<br></br>$42.00{" "}
            </p>
          </div>

          <div className="w-[240px] h-[341px] ml-10 sm:ml-0  shadow-lg">
            <div className="flex justify-center items-center w-[240px] h-[221px] bg-[#F6F7FB]">
              <Image
                src="/images/image 3.png"
                alt="image"
                width={180}
                height={160}
              />
            </div>

            <h1 className="text-[#FB2E86] py-2 text-[18px] text-center font-bold">
              Cantilever chair
            </h1>

            <p className="text-[#151875] text-[14px] text-center">
              Code - Y523201<br></br>$42.00{" "}
            </p>
          </div>

          <div className="w-[240px] h-[341px] ml-10 sm:ml-0  shadow-lg">
            <div className="flex justify-center items-center w-[240px] h-[221px] bg-[#F6F7FB]">
              <Image
                src="/images/image 4.png"
                alt="image"
                width={180}
                height={160}
              />
            </div>

            <h1 className="text-[#FB2E86] py-2 text-[18px] text-center font-bold">
              Cantilever chair
            </h1>

            <p className="text-[#151875] text-[14px] text-center">
              Code - Y523201<br></br>$42.00{" "}
            </p>
          </div>
        </div>

        <h2 className="text-[42px] mt-24 py-4 text-center">Leatest Products</h2>
        <ul className="flex justify-center items-center gap-3 sm:gap-10 text-[12px] sm:text-[18px] font-normal text-[#8A8FB9]">
          <li className="text-[#FB4997] underline">New Arrival</li>
          <li>Best Seller</li>
          <li>Featured</li>
          <li>Special Offer</li>
        </ul>

        <div className="flex justify-center flex-wrap gap-4 w-[100%] mx-auto">
          <div className="w-[320px] h-[306px] shadow-sm mt-10">
            <div className="flex items-center justify-center w-[320px] h-[269px] bg-[#F7F7F7]">
              <Image
                src="/images/top1.png"
                alt="image"
                width={267}
                height={277}
              />
            </div>
            <div className="flex justify-between">
              <p className="text-[16px] text-[#151875]">Comfort Handy Craft</p>
              <p className="text-[14px]">
                $42.00<span className="text-xs text-[#FB2448]">$65.00</span>
              </p>
            </div>
          </div>

          <div className="w-[320px] h-[306px] shadow-sm mt-10">
            <div className="flex items-center justify-center w-[320px] h-[269px]">
              <Image
                src="/images/top2.png"
                alt="image"
                width={267}
                height={277}
              />
            </div>
            <div className="flex justify-between">
              <p className="text-[16px] text-[#151875]">Comfort Handy Craft</p>
              <p className="text-[14px]">
                $42.00<span className="text-xs text-[#FB2448]">$65.00</span>
              </p>
            </div>
          </div>

          <div className="w-[320px] h-[306px] shadow-sm mt-10">
            <div className="flex items-center justify-center w-[320px] h-[269px] bg-[#F7F7F7]">
              <Image
                src="/images/top3.png"
                alt="image"
                width={267}
                height={277}
              />
            </div>
            <div className="flex justify-between">
              <p className="text-[16px] text-[#151875]">Comfort Handy Craft</p>
              <p className="text-[14px]">
                $42.00<span className="text-xs text-[#FB2448]">$65.00</span>
              </p>
            </div>
          </div>

          <div className="w-[320px] h-[306px] shadow-sm mt-20">
            <div className="flex items-center justify-center w-[320px] h-[269px] bg-[#F7F7F7]">
              <Image
                src="/images/top4.png"
                alt="image"
                width={267}
                height={277}
              />
            </div>
            <div className="flex justify-between">
              <p className="text-[16px] text-[#151875]">Comfort Handy Craft</p>
              <p className="text-[14px]">
                $42.00<span className="text-xs text-[#FB2448]">$65.00</span>
              </p>
            </div>
          </div>

          <div className="w-[320px] h-[306px] shadow-sm mt-20">
            <div className="flex items-center justify-center w-[320px] h-[269px] bg-[#F7F7F7]">
              <Image
                src="/images/top5.png"
                alt="image"
                width={267}
                height={277}
              />
            </div>
            <div className="flex justify-between">
              <p className="text-[16px] text-[#151875]">Comfort Handy Craft</p>
              <p className="text-[14px]">
                $42.00<span className="text-xs text-[#FB2448]">$65.00</span>
              </p>
            </div>
          </div>

          <div className="w-[320px] h-[306px] shadow-sm mt-20">
            <div className="flex items-center justify-center w-[320px] h-[269px] bg-[#F7F7F7]">
              <Image
                src="/images/top6.png"
                alt="image"
                width={267}
                height={277}
              />
            </div>
            <div className="flex justify-between">
              <p className="text-[16px] text-[#151875]">Comfort Handy Craft</p>
              <p className="text-[14px]">
                $42.00<span className="text-xs text-[#FB2448]">$65.00</span>
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-[42px] mt-24 py-5 text-center">
          What Shopex Offer!
        </h2>
        <div className="w-[100%] mt-8 sm:flex justify-center mx-auto gap-4">
          <div className="flex flex-col justify-center ml-10 sm:ml-0 mb-2 sm:mb-0 gap-16 items-center w-[240px] h-[341px] bg-[#FFFFFF] shadow-lg">
            <Image
              className="mt-4"
              src="/images/Group.png"
              alt=""
              width={65}
              height={65}
            />

            <div className="w-[220px] h-[100px] flex flex-col justify-center gap-5 items-center">
              <h3 className="text-[22px] text-[#151875]">24/7 Support</h3>
              <p className="font-bold text-[16px] text-[#1A0B5B4D]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center ml-10 sm:ml-0 mb-2 sm:mb-0 gap-16 items-center w-[240px] h-[341px] bg-[#FFFFFF] shadow-lg">
            <Image
              className="mt-4"
              src="/images/cashback 1.png"
              alt=""
              width={65}
              height={65}
            />

            <div className="w-[220px] h-[100px] flex flex-col justify-center gap-5 items-center">
              <h3 className="text-[22px] text-[#151875]">24/7 Support</h3>
              <p className="font-bold text-[16px] text-[#1A0B5B4D]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center ml-10 sm:ml-0 mb-2 sm:mb-0 gap-16 items-center w-[240px] h-[341px] bg-[#FFFFFF] shadow-lg">
            <Image
              className="mt-4"
              src="/images/Group (1).png"
              alt=""
              width={65}
              height={65}
            />

            <div className="w-[220px] h-[100px] flex flex-col justify-center gap-5 items-center">
              <h3 className="text-[22px] text-[#151875]">24/7 Support</h3>
              <p className="font-bold text-[16px] text-[#1A0B5B4D]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center ml-10 sm:ml-0 mb-2 sm:mb-0 gap-16 items-center w-[240px] h-[341px] bg-[#FFFFFF] shadow-lg">
            <Image
              className="mt-4"
              src="/images/Group (2).png"
              alt=""
              width={65}
              height={65}
            />

            <div className="w-[220px] h-[100px] flex flex-col justify-center gap-5 items-center">
              <h3 className="text-[22px] text-[#151875]">24/7 Support</h3>
              <p className="font-bold text-[16px] text-[#1A0B5B4D]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa
                purus gravida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
