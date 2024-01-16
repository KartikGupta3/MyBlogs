import Image from "next/image";
import Train from "@/components/Images/TrainImage.png";
export default function AllBlogs() {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-center">
      <div className="flex flex-col gap-24 p-12">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="font-vietnam font-bold text-xl md:text-2xl lg:text-4xl">
            Find All My Blogs From Here
          </div>
        </div>
        <div className="grid grid-cols-3 gap-20 mx-auto">
          <div className="flex flex-col w-64 gap-4 md:w-80">
            <div className="">
              <Image className="rounded-2xl" alt="" src={Train} />
            </div>
            <div className="flex gap-4">
              <div className="text-[#333333] text-left font-['Roboto-Bold',_sans-serif] text-xs font-bold">
                Name
              </div>
              <div className="text-[#999999] text-left font-['Roboto-Medium',_sans-serif] text-xs font-medium">
                Date
              </div>
            </div>
            <div className="text-[#333333] text-left font-['Raleway-Bold',_sans-serif] font-bold text-base md:text-2xl">
              Title
            </div>
            <div className="text-[#666666] text-left font-['Roboto-Regular',_sans-serif] text-base font-normal ">
              The choice between a train or bus journey depends on various
              factors such as the distance of the journey, the time available,
              the cost, and person
            </div>
            <button className="text-left font-['Roboto-Bold',_sans-serif] font-bold text-base md:text-lg">
              Read More...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
