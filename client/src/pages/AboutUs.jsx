import React from "react";
import Counts from "../components/Counts";
import Weare from "../components/Weare";
import Testimonials from "../components/Testimonials";
import ExpertTeam from "../components/ExpertTeam";

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-gray-300 h-auto flex flex-col justify-center items-center p-6 md:h-80 md:p-0">
        {/* Left Image */}
        <img
          src="/src/Images/Background/Mask-Group.png"
          alt="Left Prop"
          className="hidden md:block absolute left-4 top-1/2 transform -translate-y-1/2 h-24 w-32 lg:h-50 lg:w-60"
        />

        {/* Center Content */}
        <div className="flex bg-white rounded-2xl p-2 z-10 mb-4 md:mb-0"  >
          <div>HOME :</div> <div className="text-orange-400"> ABOUT US</div>
        </div>
        <div className="text-xl md:text-2xl font-semibold z-10">About Us</div>

        {/* Right Image */}
        <img
          src="/src/Images/Background/Overlay-About.png"
          alt="Right Prop"
          className="absolute right-0 bottom-0 h-32 md:h-60"
        />

        {/* Decorative Lines */}
        <img
          src="/src/Images/Background/line-About-1.png"
          alt="Left Line"
          className="hidden md:block absolute left-10 top-1/3 transform -translate-y-1/2"
        />
        <img
          src="/src/Images/Background/line-About-2.png"
          alt="Right Line"
          className="hidden md:block absolute right-10 top-2/3 transform -translate-y-1/2"
        />
      </div>

      {/* About Section */}
      <div className="flex flex-col items-center mt-12 px-4 lg:px-20">
        <div className="flex flex-col lg:flex-row lg:items-start w-full">
          {/* Left Image */}
          <div className="flex justify-center lg:w-1/2">
            <img
              className="rounded-full h-32 w-32 md:h-48 md:w-48 lg:h-auto lg:w-auto"
              src="/src/Images/Group-Image-About.png"
              alt="About Us Image"
            />
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-8">
            <h2 className="text-2xl font-semibold">About Us</h2>
            <h3 className="font-bold text-xl mt-4">
              <span className="text-cyan-400">Training</span> Tailored For Your
              Success With <span className="text-cyan-400">Libex</span>
            </h3>
            <p className="mt-4 text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
              magni sequi necessitatibus dolore sed, omnis iste quaerat optio
              exercitationem magnam eos nulla dolor veniam quod in tempora
              quisquam commodi facere Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Repudiandae, commodi! Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Animi, repellendus.
            </p>
            <div className="font-semibold mt-4 space-y-2">
              <div>• Flexible Course Plan</div>
              <div>• Expert Mentors</div>
            </div>
          </div>
        </div>

        {/* Second Image */}
        
      </div>

      <div className="flex justify-center">
        
        {/* Future Proof Section */}
        <div className="mt-20 px-4 lg:px-20 w-1/2">
          <h2 className="text-2xl font-semibold text-center">
            Future-Proof Your Career With Us
          </h2>
          <div className="mt-8 text-sm md:text-base space-y-6">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat
              soluta aspernatur, nulla obcaecati laborum numquam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis ipsa alias excepturi eos voluptates quam nihil corrupti
              quibusdam quae qui, a dolor sunt eaque, provident aperiam assumenda
              ipsum eligendi magnam?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              quisquam in soluta debitis molestias maiores a doloremque fuga
              provident dignissimos?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui odio
              placeat asperiores velit a quasi.
            </p>
          </div>
        </div>
        <div className="mt-10 flex justify-center items-center h-1/2 w-1/3">
            <img
              src="/src/Images/Group-Image-2-About.png"
              alt="Group Image"
              className="h-1/2 w-1/3"
          />
        </div>
      </div>
      <Counts />
      {/* Training Section */}
      <div className="bg-blue-100 mt-20 p-6">
        <div className="flex justify-center">
        <img className="rounded-xl" src="/Images/training.jpeg" alt="" />
        </div>
        <div className="w-full flex flex-col justify-center">
        <div className="flex flex-col justify-center">
         <h2 className="text-orange-400 font-semibold text-center text-lg">
            ONLINE TRAINING AND INTERNSHIP PROGRAMME
          </h2>
          <p className="text-gray-400 mt-4 text-sm md:text-base">
          Libex ensures that students are not only skilled but also job-ready. We provide resume-building workshops, mock interviews, and career counseling as part of our comprehensive support system. 
          </p>
          <p className="mt-4 text-sm md:text-base">
            Graduates of Libex have gone on to secure positions in top companies
            worldwide, attributing their success to the platform's unique blend
            of theory and practice.
          </p>
          <p className="mt-4 text-sm md:text-base">
            Join Libex today to unlock your potential, stay ahead in the
            tech-driven world, and achieve the career success you deserve.
          </p>
         </div>
        </div>
      </div>

      {/* Additional Components */}
      <Weare />
      <Testimonials />
      <ExpertTeam />
    </div>
  );
};

export default AboutUs;
