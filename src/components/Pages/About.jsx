import React from 'react';
import aboutImg1 from "../../assets/about1.png";
import aboutImg2 from "../../assets/about2.png";


const About = () => {
  return (
    <>
    <div className="page-head">
      <h1>About Us</h1>
    </div>
    <div className='body about'>
      <div className='about-info'>
        <h2>Our Story</h2>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="about-img-contain">
        <div className="about-img" id='img1'>
          <img src={aboutImg1} />
        </div>
        <div className="about-img" id='img2'>
          <img src={aboutImg2} />
        </div>
      </div>
    </div>

    </>
  )
}

export default About