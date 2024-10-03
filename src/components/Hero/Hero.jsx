import React from "react";
import MountainPng from "../../assets/moon-surface-hd.png";

const Hero = () => {
  return (
    <div className=" bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="text-white space-y-4 lg:pr-36">
          <h1 data-aos="fade-up" className="text-5xl font-bold uppercase">EXPLORE THE UNIVERSE</h1>
                <p data-aos="fade-up" data-aos-delay="300">
                    Experience the wonders of space exploration like never before. 
                    Embark on a journey around our planet and witness breathtaking views of Earth from above. 
                  Join us for a once-in-a-lifetime adventure beyond the skies!
               </p>
            <button 
              data-aos="fade-up"
              data-aos-delay="500"
              className="primary-button"
             >
              LEARN MORE
            </button>
          </div>
          <div></div>
        </div>
      </div>
      <img
        src={MountainPng}
        alt=""
        className="absolute right-0 bottom-0 w-full brightness-50 z-10"
      />

      <div className="absolute bottom-0 z-30 right-0 w-full bg-gradient-to-b from-transparent from-10% to-primary to-90% h-[20px] sm:h-[50px] md:[60px]"></div>
    </div>
  );
};

export default Hero;

