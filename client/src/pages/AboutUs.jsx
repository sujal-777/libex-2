import React from "react";
import Counts from "../components/Counts";
import Weare from "../components/Weare";
import Testimonials from "../components/Testimonials";
import ExpertTeam from "../components/ExpertTeam";

const AboutUs = () => {
  return (
    <div>
      <div className="relative bg-gray-300 h-80 flex justify-center items-center flex-col">
        {/* Left Image */}
        <img
          src="/public/Images/Background/Mask-Group.png" // Replace with your left-side image URL
          alt="Left Prop"
          className="absolute left-8 top-1/2 transform -translate-y-1/2 h-50 w-60"
        />

        {/* Center Content */}
        <div className="flex bg-white rounded-2xl p-2 z-10">
          <div>HOME :</div> <div className="text-orange-400"> ABOUT US</div>
        </div>
        <div className="text-2xl font-semibold z-10">AboutUs</div>

        {/* Right Image */}
        <img
          src="/public/Images/Background/Overlay-About.png" // Replace with your right-side image URL
          alt="Right Prop"
          className="absolute right-0 bottom-0 h-60"
        />

        {/* Decorative Lines */}
        <img
          src="/public/Images/Background/line-About-1.png" // Replace with your left-line image URL
          alt="Left Line"
          className="absolute left-10 top-1/3 transform -translate-y-1/2"
        />
        <img
          src="/public/Images/Background/line-About-2.png" // Replace with your right-line image URL
          alt="Right Line"
          className="absolute right-10 top-2/3 transform -translate-y-1/2"
        />
      </div>

      <div className="flex justify-center mt-32">
        <div className="flex flex-col justify-center w-2/3">
          <div className="flex">
            <div>
              <img
                className="rounded-full h-80 w-80 m-10 "
                src="https://images.unsplash.com/photo-1719937206491-ed673f64be1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8"
                alt="img"
              />
            </div>
            <div className="w-1/2">
              <div className="text-2xl font-semibold">About Us</div>
              <div className="font-bold text-2xl">
                <span className="text-cyan-400">Training</span> Tailored For
                Your Success With <span className="text-cyan-400">Libex</span>
              </div>
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                magni sequi necessitatibus dolore sed, omnis iste quaerat optio
                exercitationem magnam eos nulla dolor veniam quod in tempora
                quisquam commodi facere Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Repudiandae, commodi! Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Animi, repellendus.
              </div>
              <div className="font-semibold m-5">
                <div>Flexible Course Plan</div>
                <div>Expert Mentors</div>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <div className="w-1/2 mt-10">
              <div className="text-2xl font-semibold">
                Future-Proof Your Career With Us
              </div>
              <div className="my-10">
                <div className="pb-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quaerat soluta aspernatur, nulla obcaecati laborum numquam.
                </div>
                <div className="pb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis ipsa alias excepturi eos voluptates quam nihil
                  corrupti quibusdam quae qui, a dolor sunt eaque, provident
                  aperiam assumenda ipsum eligendi magnam?
                </div>
                <div className="pb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati quisquam in soluta debitis molestias maiores a
                  doloremque fuga provident dignissimos?
                </div>
                <div className="pb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
                  odio placeat asperiores velit a quasi.
                </div>
              </div>
            </div>
            {/* <div></div> */}
            <Counts />
          </div>

          <div className="bg-blue-100 w-auto h-auto z-0">
            <div className="mt-40 flex justify-center w-full">
              <img className="max-w-fit" src="src/img1.png" alt="" />
            </div>

            <div>
              <div className="flex justify-center mt-10">
                <div className="flex flex-col justify-center w-full md:w-5/6  p-5">
                  <div className="text-orange-400 font-semibold mb-4 text-center">
                    ONLINE TRAINING AND INTERNSHIP PROGRAMME
                  </div>
                  <div className="text-gray-400">
                    <div className="mb-4">
                      Libex ensures that students are not only skilled but also
                      job-ready. We provide resume-{" "}
                      <span className="text-black">
                        building workshops, mock interviews, and career
                        counseling as part of our comprehensive support system.
                      </span>
                    </div>
                    <div className="absolute">
                      <img
                        src="/public/Images/Background/Mask-Group-2.png" // Replace with your left-side image URL
                        alt="Left Prop"
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 h-80 w-70 z-10"
                      />
                      <img
                        src="/public/Images/Background/Overlay+Blur-Purple.png" // Replace with your right-side image URL
                        alt="Right Prop"
                        className="absolute right-0 top-1/2 h-auto w-auto z-10"
                      />
                    </div>
                    <div className="mb-4">
                      Graduates of Libex have gone on to secure positions in top
                      companies worldwide, attributing their success to the
                      platform's unique blend of theory and practice.
                    </div>
                    <div className="mb-4">
                      Our commitment to quality is reflected in our consistently
                      high student satisfaction rates and testimonials from
                      alumni who credit Libex with transforming their careers.
                      With a mission to democratize education,{" "}
                      <span className="text-black">
                        Libex makes high-quality training accessible to learners
                        across the globe.
                      </span>
                    </div>
                    <div>
                      Join Libex today to unlock your potential, stay ahead in
                      the tech-driven world, and achieve the career success you
                      deserve.{" "}
                      <span className="text-black">
                        Together, we build a brighter future, one skill at a
                        time.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Weare />

          <Testimonials />

          <ExpertTeam />
        </div>
      </div>
    </div>
    // </div>
  );
};

export default AboutUs;
