import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import d1 from "./img/1.jpg";
import d2 from "./img/2.jpg";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Consult = () => {
  return (
    <>
      <section id="consult-doctors">
        <div className="doctors-section">
          <div className="consult-doctors">
            <h3>
              Consult with<span>Experienced Doctors</span>
            </h3>
            <p>
              Connect with our team of specialists for plan your treatment now!
            </p>
            <a href="#start" className="enquire-now1">
              {" "}
              Enquire Now{" "}
            </a>
          </div>

          <div className="doctors-img">
          <div id="expert" >
            <Carousel responsive={responsive} infinite={true} arrows={false} draggable={true} >
           
              <div className="item" style={{marginRight:"1rem",textAlign:"center"}}>
                <div className="dr-box">
                  <img src={d1} />
                  <h4>Dr Rohit Lamba </h4>
                  <span>
                    <strong>Head of the Department & Senior Consultant</strong>
                    <br />
                    Bone, Joint Replacement And Orthopaedics{" "}
                  </span>
                </div>
              </div>

              <div className="item" style={{marginRight:"1rem",textAlign:"center"}}>
                <div className="dr-box">
                  <img src={d2} />
                  <h4> Dr Saurabh Chandra </h4>
                  <span>
                    {" "}
                    <strong>Consultant</strong>
                    <br />
                    Bone, Joint Replacement And Orthopaedics{" "}
                  </span>
                </div>
              </div>
           
            </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Consult;
