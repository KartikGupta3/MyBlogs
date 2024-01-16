import Train from "@/components/Images/TrainImage.png";
import Image from "next/image";

export default function ReadBlog() {
  return (
    <div className="flex flex-row bg-white min-h-screen">
      <div className="bg-[#ffffff] flex flex-col w-[40%] md:w-[30%]">
        <div className="bg-[#ffffff] flex flex-col gap-16 lg:p-12">
          <div className="flex flex-col gap-8">
            <div className="text-[#1a1a1a] text-left">
              Recent Blog Posts
            </div>
            <div className="flex flex-col gap-8 md:flex-row">
              <div className="flex flex-col gap-8 items-start justify-start self-stretch flex-1 ">
                <Image className="self-stretch flex-1" alt="" src="" />
                <div className="flex flex-col gap-6 items-start justify-start">
                  <div className="flex flex-col gap-3 items-start justify-start">
                    <div className="text-[#6941c6] text-left">Name • Date</div>
                    <div className="flex flex-row gap-4 items-start justify-start self-stretch shrink-0 ">
                      <div className="text-[#1a1a1a] text-left flex-1">
                        Title
                      </div>
                      <div className="">
                        <svg
                          className=""
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 17L17 7M17 7H7M17 7V17"
                            stroke="#1A1A1A"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-[#667085] text-left ">
                      How do you create compelling presentations that wow your
                      colleagues and impress your managers?
                    </div>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start">
                    <div className="flex flex-row gap-0 items-start justify-start shrink-0 ">
                      <div className="bg-[#f9f5ff] rounded-2xl p-2 flex flex-row gap-0 items-center justify-center shrink-0 ">
                        <div className="text-[#6941c6] text-center  ">
                          Topic 1
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-0 items-start justify-start shrink-0 ">
                      <div className="bg-[#eef4ff] rounded-2xl p-2 flex flex-row gap-0 items-center justify-center shrink-0 ">
                        <div className="text-[#3538cd] text-center  ">
                          Topic 2
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 p-8 flex-1">
        <div className="flex flex-col gap-8 items-start justify-start">
          <div className="text-[#6941c6]">Day , Date</div>
          <div className="text-left text-4xl leading-8 font-bold  flex-1">
            Title
          </div>
        </div>
        <div className="flex items-center justify-center">
          <Image src={Train} alt="Image" />
        </div>
      </div>
    </div>
  );
}
