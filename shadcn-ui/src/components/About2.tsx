import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import images and videos at the top
// import bgVideo from "./../../images/videos/large_view.mp4";
// import webDesignImg from "./../../images/services/Website_Designing.png";
// import appDevImg from "./../../images/services/app-dev-removebg-preview.png";
// import smmImg from "./../../images/services/smm-1.png";
// import seoImg from "./../../images/services/seo.png";
// import ss1 from "../ss1.mp4";
// import ai from "../ai1.jpg";
import ss1 from "../ss1.mp4";
import ai from "../ai1.jpg";
import hero from "../tpc vide 1.mp4";
import kk11 from "../kk11.png";
import kk10 from "../kk10.png";
import kk19 from "../kk19.png";
import kk8 from "../kk8.png";
import kk7 from "../kk7.png";
import kk12 from "../kk12.png";
import kk13 from "../kk13.png";
import kk18 from "../kk18.png";
import ll2 from "../ll2.png";
import ll1 from "../ll1.png";

class About2 extends React.Component {
  render() {
    return (
      <>
        <div className="container-ser container pt-5 pb-0">
          <div className="service-content-web">
            {/* Left side - Image */}
            <div className="service-image">
              <video className="search-video" autoPlay loop muted playsInline>
                <source src={ss1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <img src={ll1} alt="Web Design" className="layer" />
            </div>

            {/* Right side - Text */}
            <div className="service-text">
              <div className="service-title-wrapper">
                <h2 className="service-title">Branding</h2>
                <p className="service-description">
                  Build a strong and memorable identity for your business with
                  our expert branding solutions, from logo design to complete
                  brand strategy. complete brand strategy online.
                </p>
              </div>
              <Link
                to="/graphic-designing"
                className="service-btn bg-black text-white px-4 py-2 rounded-lg hover:bg-green-400 transition"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>

        <div className="container-ser container pt-5">
          <div className="service-content-web1">
            {/* Left side - Image */}
            <div className="service-image">
              <video className="search-video" autoPlay loop muted playsInline>
                <source src={hero} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <img src={ll2} alt="Web Design" className="layer" />
            </div>

            {/* Right side - Text */}
            <div className="service-text">
              <div className="service-title-wrapper">
                <h2 className="service-title">Web Development</h2>
                <p className="service-description">
                  Patterns Company specializes in delivering bespoke Web
                  Development Services Int Hyderabad tailored to your unique
                  needs and aspirations.
                </p>
              </div>
              <Link
                to="/web-development"
                className="service-btn bg-black text-white px-4 py-2  rounded-lg hover:bg-green-400 transition"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="container-ser container pt-5">
          <div className="service-content-web1"> */}
        {/* Left side - Image */}
        {/* <div className="service-image">
              <video className="search-video" autoPlay loop muted playsInline>
                <source src={hero} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <img src={kk8} alt="Web Design" className="layer" />
            </div> */}

        {/* Right side - Text */}
        {/* <div className="service-text">
              <div className="service-title-wrapper">
                <h2 style={{color:'white'}} className="service-title">App Development</h2>
                <p className="service-description">
                  Patterns Company specializes in delivering bespoke Web
                  Development Services Int Hyderabad tailored to your unique
                  needs and aspirations.
                </p>
              </div>
              <Link
                to="/web-development"
                className="service-btn bg-black text-white px-4 py-2  rounded-lg hover:bg-green-400 transition"
              >
                Read More
              </Link>
            </div>
          </div>
        </div> */}

        <div className="container-ser container pt-5">
          <div className="service-content">
            <div className="service-image">
              <video className="search-video" autoPlay loop muted playsInline>
                <source src={hero} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <img src={kk13} alt="W" className="layer" />
            </div>

            <div className="service-text">
              <div className="service-title-wrapper1s">
                <h2 className="service-title">App Development</h2>
                <p className="service-description">
                  Transforming ideas into seamless digital solutions through
                  expert app development Services in Hyderabad at Patterns
                  Company.
                </p>
              </div>

              <Link
                to="/app-development"
                className="service-btn bg-black text-white px-4 py-2 rounded-lg hover:bg-green-400 transition"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>

        <div className="container-ser container pt-5">
          <div className="service-content-social">
            {/* Left side - Image */}
            <div className="service-image">
              <video className="search-video" autoPlay loop muted playsInline>
                <source src={ss1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <img src={kk19} alt="Social Media Marketing" className="layer" />
            </div>

            {/* Right side - Text */}
            <div className="service-text">
              <div className="service-title-wrapper">
                <h2 className="service-title">Digital Marketing</h2>
                <p className="service-description">
                  Transforming businesses through strategic campaigns across
                  multiple digital channels.
                </p>
              </div>
              <Link
                to="/digital-marketing"
                className="service-btn bg-black text-white px-4 py-2 rounded-lg hover:bg-green-400 transition"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>

        {/* <div className="container-ser container pt-5">
          <div className="service-content-Engine"> */}
        {/* Left side - Image */}
        {/* <div className="service-image">
              <video className="search-video" autoPlay loop muted playsInline>
                <source src={ss1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <img src={kk11} alt="SEO" className="layer" />
            </div> */}

        {/* Right side - Text */}
        {/* <div className="service-text">
              <div className="service-title-wrapper">
                <h2 className="service-title">Search Engine Optimization</h2>
                <p className="service-description">
                  Improve search visibility and drive organic traffic with our
                  expert SEO services.
                </p>
              </div> */}
        {/* <Link
                to="/digital-marketing"
                className="service-btn bg-black text-white px-4 py-2 rounded-lg hover:bg-green-400 transition"
              >
                Read More
              </Link>
            </div>
          </div>
        </div> */}
        <div className="container-ser container pt-5 ">
          <div className="service-content-Engine1">
            {/* Left side - Image */}
            <div className="service-image">
              <video className="search-video" autoPlay loop muted playsInline>
                <source src={ss1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <img src={kk18} alt="SEO" className="layer" />
            </div>

            {/* Right side - Text */}
            <div className="service-text">
              <div className="service-title-wrapper">
                <h2 className="service-title">AI Development</h2>
                <p className="service-description">
                  Boost your brand presence with engaging social media
                  strategies and content.
                </p>
              </div>
              <Link
                to="/ai-development"
                className="service-btn bg-black text-white px-4 py-2 rounded-lg hover:bg-green-400 transition "
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default About2;
