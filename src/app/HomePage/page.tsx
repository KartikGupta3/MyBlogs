import Image from "next/image";
export default function HomePage() {
  return (
    <div className="bg-[#ffffff] p-12 flex flex-col gap-4">
      <div className="bg-[#ffffff] flex flex-col items-center justify-center">
        <div className="border-solid border-[rgba(0,0,0,0.34)] border-t border-b flex flex-row items-center justify-center w-full">
          <div className="text-[#1a1a1a] text-left font-['Inter-Bold',_sans-serif] font-bold text-4xl md:text-6xl lg:text-8xl">
            THE BLOGS
          </div>
        </div>
      </div>
      <div className="bg-[#ffffff] flex flex-col">
        <div className="bg-[#ffffff] flex flex-col gap-16 lg:p-12">
          <div className="flex flex-col gap-8">
            <div className="text-[#1a1a1a] text-center md:text-left">
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
              <div className="flex flex-col gap-8 items-start justify-center flex-1 ">
                <div className="flex flex-col gap-6 items-start justify-start self-stretch shrink-0 md:flex-row">
                  <Image className="self-stretch flex-1" alt="" src="" />
                  <div className="flex flex-col gap-6 items-start justify-start flex-1 ">
                    <div className="flex flex-col gap-3 items-start justify-start self-stretch shrink-0 ">
                      <div className="text-[#6941c6] text-left ">
                        Name • Date
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start self-stretch shrink-0 ">
                        <div className="text-[#1a1a1a] text-left font-textlg-semibold-font-family text-textlg-semibold-font-size leading-textlg-semibold-line-height font-textlg-semibold-font-weight  self-stretch">
                          Title
                        </div>
                        <div className="text-[#667085] text-left ">
                          Linear helps streamline software projects, sprints,
                          tasks, and bug tracking. Here’s how to get...
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 items-start justify-start self-stretch shrink-0 ">
                      <div className="flex flex-row gap-0 items-start justify-start shrink-0 ">
                        <div className="bg-[#f0f9ff] rounded-2xl p-2 flex flex-row gap-0 items-center justify-center shrink-0 ">
                          <div className="text-[#026aa2] text-center  ">
                            Topic 1
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-0 items-start justify-start shrink-0 ">
                        <div className="bg-[#fdf2fa] rounded-2xl p-2 flex flex-row gap-0 items-center justify-center shrink-0 ">
                          <div className="text-[#c11574] text-center  ">
                            Topic 2
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-6 items-start justify-start self-stretch shrink-0 md:flex-row">
                  <Image className="self-stretch flex-1" alt="" src="" />
                  <div className="flex flex-col gap-6 items-start justify-start flex-1 ">
                    <div className="flex flex-col gap-3 items-start justify-start self-stretch shrink-0 ">
                      <div className="text-[#6941c6] text-left ">
                        Name • Date
                      </div>
                      <div className="flex flex-col gap-2 items-start justify-start self-stretch shrink-0 ">
                        <div className="text-[#1a1a1a] text-left">Title</div>
                        <div className="text-[#667085] text-left ">
                          The rise of RESTful APIs has been met by a rise in
                          tools for creating, testing, and manag...
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-2 items-start justify-start self-stretch shrink-0 ">
                      <div className="flex flex-row gap-0 items-start justify-start shrink-0 ">
                        <div className="bg-[#ecfdf3] rounded-2xl p-2 flex flex-row gap-0 items-center justify-center shrink-0 ">
                          <div className="text-[#027a48] text-center  ">
                            Topic 1
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row gap-0 items-start justify-start shrink-0 ">
                        <div className="bg-[#fdf2fa] rounded-2xl p-2 flex flex-row gap-0 items-center justify-center shrink-0 ">
                          <div className="text-[#c11574] text-center  ">
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
        <div className="bg-[#ffffff] flex flex-col gap-16 items-center justify-start self-stretch shrink-0 ">
          <div className="flex flex-col gap-8 items-start justify-start self-stretch shrink-0 md:flex-row">
            <div className="flex flex-col gap-8 items-start justify-start self-stretch flex-1 md:flex-row">
              <Image
                className="flex-1  h-[250px] overflow-hidden"
                alt=""
                src=""
              />
              <div className="flex flex-col gap-6 items-start justify-start flex-1 ">
                <div className="flex flex-col gap-3 items-start justify-start self-stretch shrink-0 ">
                  <div className="text-[#6941c6] text-left">Name • Date</div>
                  <div className="flex flex-row gap-4 items-start justify-start self-stretch shrink-0 ">
                    <div className="text-[#1a1a1a] text-left flex-1">Title</div>
                    <div className="pt-1 flex flex-col gap-0 items-start justify-start shrink-0 ">
                      <svg
                        className="shrink-0 w-6 h-6  overflow-visible"
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
                    A grid system is a Topic 1 tool used to arrange content on a
                    webpage. It is a series of vertical and horizontal lines
                    that create a matrix of intersecting points, which can be
                    used to align and organize page elements. Grid systems are
                    used to create a consistent look and feel across a website,
                    and can help to make the layout more visually appealing and
                    easier to navigate.
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-start justify-start self-stretch shrink-0 ">
                  <div className="flex flex-row gap-0 items-start justify-start shrink-0 ">
                    <div className="bg-[#f9f5ff] rounded-2xl p-2 flex flex-row gap-0 items-center justify-center shrink-0 ">
                      <div className="text-[#6941c6] text-center  ">
                        Topic 1
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row gap-0 items-start justify-start shrink-0 ">
                    <div className="bg-[#fdf2fa] rounded-2xl p-2 flex flex-row gap-0 items-center justify-center shrink-0 ">
                      <div className="text-[#c11574] text-center  ">
                        Topic 2
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#ffffff]">
            <div className="flex flex-row gap-3.5">
              <div className="text-[#1a1a1a] text-left font-serif text-lg leading-6 font-normal ">
                © 2024
              </div>
              <div className="flex flex-row gap-3.5">
                <div className="text-[#1a1a1a] text-left font-serif text-lg leading-6 font-normal ">
                  LinkedIn
                </div>
                <div className="text-[#1a1a1a] text-left font-serif text-lg leading-6 font-normal ">
                  Email
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
