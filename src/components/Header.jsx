import React from "react";

const Header = () => {
  return (
    <>
      <div className="find-boxht">
        <a href="#start" className="navigation-mobile-link">
          <img
            className="mx-auto"
            src="assets/img/nav6.png"
            alt=""
            data-ll-status="loading"
          />
          <span className="f-12">
            <b>Enquire Now</b>
          </span>
        </a>
        <a href="tel:+918929501684" className="navigation-mobile-link">
          <img
            className="mx-auto"
            src="assets/img/nav8.png"
            alt=""
            data-ll-status="loading"
          />
          <span className="f-12">
            <b>Call Now</b>
          </span>
        </a>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 titel">
            <div className="logo-top">
              <a href="#" target="_blank">
                <img
                  src="../assets/img/logo.png"
                  className="bg-white box-logo"
                />
              </a>
            </div>

            <div className="phone-top">
              <a href="tel:+918929501684" target="_blank">
                <img src="assets/img/phone.png" style={{ width: "25px" }} />{" "}
                +91-8929501684
              </a>
            </div>
          </div>{" "}
        </div>{" "}
      </div>
    </>
  );
};

export default Header;
