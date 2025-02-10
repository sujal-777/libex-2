import React from "react";

function Weare() {
  return (
    <div className="relative flex justify-center mt-52">
      <div className="flex flex-col md:flex-row justify-center items-center w-full gap-10 p-10 mx-auto relative z-10">
        <div className="flex items-center w-full md:w-1/2 h-full">
          <img
            className="overflow-hidden h-full w-full rounded-full object-cover"
            src="/Images/16.png"
            alt="Course"
          />
        </div>
        <div className="mt-10 w-full md:w-4/5">
          <div className="text-4xl font-bold mb-4 text-start text-orange-400">
            Who We Are
          </div>
          <div>
            <div className="text-3xl mb-2 text-start font-bold">
              We Offer The <span className="text-cyan-500">Best Career</span>
              <img
                src="/Images/line-About-3.png"
                alt="orange-line"
                className="relative left-1/3 z-0 w-auto h-4"
              />
            </div>
            <hr className="mb-4" />
            <div className="w-full">
              <div className="flex m-4 flex-col md:flex-row">
                <div className="bg-orange-100 rounded-full h-16 p-3 my-4 w-20 flex items-center justify-center">
                  <img src="/l1.png" alt="" />
                </div>
                <div className="ml-4 text-start">
                  <div className="font-semibold">Industry Expert Instructor</div>
                  <div className="text-gray-400">
                    Learn from Industry expert Instructors through courses in Web
                    Development, UI/UX Design, Data Science, Artificial Intelligence,
                    and more.
                  </div>
                </div>
              </div>
              <hr className="mb-4" />
              <div className="flex m-4 flex-col md:flex-row">
                <div className="bg-cyan-100 rounded-full h-16 p-3 w-20 my-4 flex items-center justify-center">
                  <img src="/l2.png" alt="" />
                </div>
                <div className="ml-4 text-start">
                  <div className="font-semibold">Up-to-Date Course Content</div>
                  <div className="text-gray-400">
                    Learn from Industry expert Instructors through courses in Web
                    Development, UI/UX Design, Data Science, Artificial Intelligence,
                    and more.
                  </div>
                </div>
              </div>
              <hr className="mb-4" />
              <div className="flex m-4 flex-col md:flex-row">
                <div className="bg-violet-100 rounded-full h-16 p-3 w-16 my-4 flex items-center justify-center">
                  <img src="l3.png" alt="" />
                </div>
                <div className="ml-4 text-start">
                  <div className="font-semibold">Comprehensive Learning Paths</div>
                  <div className="text-gray-400">
                    Our courses are designed to provide comprehensive learning paths
                    that help you achieve your career goals.
                  </div>
                </div>
              </div>
              <hr className="mb-4" />
            </div>
          </div>
          <img
            src="/Images/about-shape-2.png"
            className="left-1/4  h-auto w-auto z-0"
          />
        </div>
      </div>
          <div className="absolute top-3/4 right-0 transform -translate-y-1/2 z-0">
              <img
                src="/Images/blog-shape-3-1.png.png"
                alt="star-img"
                className="h-32 w-32"
              />
            </div>
      </div>
    // </div>
  );
}

export default Weare;