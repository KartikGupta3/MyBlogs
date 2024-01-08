import Nav from "./nav";
import Image from "next/image";
import TrainImage from "./Images/TrainImage.png";
export default function AllBlogs() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen flex flex-col justify-center">
      <Nav />
      <div className="flex flex-col gap-24 p-12">
        <div className="flex flex-col items-center justify-center gap-8">
          <div className="text-gray-400 font-bold font-raleway">OUR BLOGS</div>
          <div className="text-4xl font-vietnam font-bold">
            Find our all blogs from here
          </div>
        </div>
        <div className="grid grid-cols-3 gap-20 mx-auto">
          <div className="flex flex-col w-80 gap-4">
            <div className="">
              <Image className="rounded-2xl" alt="" src={TrainImage} />
            </div>
            <div className="flex gap-4">
              <div className="text-[#333333] text-left font-['Roboto-Bold',_sans-serif] text-xs font-bold">
                Travel
              </div>
              <div className="text-[#999999] text-left font-['Roboto-Medium',_sans-serif] text-xs font-medium">
                13 March 2023
              </div>
            </div>
            <div className="text-[#333333] text-left font-['Raleway-Bold',_sans-serif] text-2xl font-bold ">
              Train Or Bus Journey?Which one suits?
            </div>
            <div className="text-[#666666] text-left font-['Roboto-Regular',_sans-serif] text-base font-normal ">
              The choice between a train or bus journey depends on various
              factors such as the distance of the journey, the time available,
              the cost, and person
            </div>
            <button className="text-[#7c4ee4] text-left font-['Roboto-Bold',_sans-serif] text-lg font-bold  ">
              Read More...
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
