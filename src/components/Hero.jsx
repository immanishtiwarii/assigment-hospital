import React from "react";

const Hero = () => {
  return (
    <>
      <section
        className="height-85vh py-5 flex-center jarallax banner"
        data-dark-overlay="0"
        style={{ 
            background: "url('assets/img/banner.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="padding-40 text-white"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
