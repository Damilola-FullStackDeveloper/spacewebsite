import React from 'react'
import sateliteImg from "../../assets/satelite2.jpeg"

const Banner2 = () => {
  return (
    <div className="bg-black text-white pb-12 relative z-50">
       <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center"> 
            <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-l-2 border-l-sky-800 border-b-sky-800">
                <p data-aos="fade-up" className="text-sky-800 uppercase">Our Mission</p>
                <h1 
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="uppercase text-5xl">Rapidcast</h1>
                <p data-aos="fade-up"
                   data-aos-delay="500">
                    At Rapidcast,
                    our mission is to revolutionize global communication 
                    through advanced satellite technology. 
                    We strive to deliver real-time data transmission and connectivity solutions to the most remote corners of the world.
                    Our cutting-edge innovations empower industries to operate efficiently, regardless of geographical limitations.
                    We are committed to bridging the digital divide and ensuring seamless communication for everyone, everywhere. 
                    Together, we envision a future where connectivity knows no bounds.</p> 
                <button
                 data-aos="fade-up"
                 data-aos-delay="700"
                 className="primary-button"
                 >
                  Learn More
                </button>
            </div>
            <div data-aos="zoom-in">
                <img src={sateliteImg} alt="" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Banner2

