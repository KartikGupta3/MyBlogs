import Train from "./Images/TrainImage.png";
import Image from "next/image";

export default function ReadBlog() {
  return (
    <div className="flex flex-col gap-8 bg-gray-100 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mt-4 mb-2">Title</h1>
        <p className="text-lg text-gray-600 mb-4">Type of Blog:</p>

        <div className="flex justify-center">
          <Image src={Train} alt="Blog" className="" />
        </div>

        <div className="text-lg text-gray-800 leading-relaxed mt-4">
          Content goes here. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Vivamus vehicula, libero eget fermentum malesuada, sapien purus
          varius nunc, nec bibendum ex odio nec libero.
        </div>
      </div>
    </div>
  );
}
