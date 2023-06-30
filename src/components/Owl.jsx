import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Owl = () => {
  return (
    <>
      <div className="container-fluid " id="news-slider">
        <OwlCarousel className="owl-carousel" nav style={{position:"relative"}}>
          <div className="item" style={{ marginRight: "15px" }}>
            <div className="our-gallery">
              <img src="assets/img/02/1.jpg" />
              <div
                className="video-body"
                style={{
                  position: "absolute",
                  top: 0,
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  height: "220px",
                }}
              >
                <a
                  className="popup-video gsc-video-link thumbnail"
                  href="assets/img/02/1.jpg"
                  style={{ background: "none", border: "0px" }}
                >
                  <span className="icon-play">
                    <i className="fa fa-search-plus"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="item" style={{ marginRight: "15px" }}>
            <div className="our-gallery">
              <img src="assets/img/02/2.jpg" />
              <div
                className="video-body"
                style={{
                  position: "absolute",
                  top: 0,
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  height: "220px",
                }}
              >
                <a
                  className="popup-video gsc-video-link thumbnail"
                  href="assets/img/02/2.jpg"
                  style={{ background: "none", border: "0px" }}
                >
                  <span className="icon-play">
                    <i className="fa fa-search-plus"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="item" style={{ marginRight: "15px" }}>
            <div className="our-gallery">
              <img src="assets/img/02/3.jpg" />
              <div
                className="video-body"
                style={{
                  position: "absolute",
                  top: 0,
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  height: "220px",
                }}
              >
                <a
                  className="popup-video gsc-video-link thumbnail"
                  href="assets/img/02/3.jpg"
                  style={{ background: "none", border: "0px" }}
                >
                  <span className="icon-play">
                    <i className="fa fa-search-plus"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="item" style={{ marginRight: "15px" }}>
            <div className="our-gallery">
              <img src="assets/img/02/4.jpg" />
              <div
                className="video-body"
                style={{
                  position: "absolute",
                  top: 0,
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  height: "220px",
                }}
              >
                <a
                  className="popup-video gsc-video-link thumbnail"
                  href="assets/img/02/4.jpg"
                  style={{ background: "none", border: "0px" }}
                >
                  <span className="icon-play">
                    <i className="fa fa-search-plus"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="item" style={{ marginRight: "15px" }}>
            <div className="our-gallery">
              <img src="assets/img/02/5.jpg" />
              <div
                className="video-body"
                style={{
                  position: "absolute",
                  top: 0,
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  height: "220px",
                }}
              >
                <a
                  className="popup-video gsc-video-link thumbnail"
                  href="assets/img/02/5.jpg"
                  style={{ background: "none", border: "0px" }}
                >
                  <span className="icon-play">
                    <i className="fa fa-search-plus"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="item" style={{ marginRight: "15px" }}>
            <div className="our-gallery">
              <img src="assets/img/02/6.jpg" />
              <div
                className="video-body"
                style={{
                  position: "absolute",
                  top: 0,
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  height: "220px",
                }}
              >
                <a
                  className="popup-video gsc-video-link thumbnail"
                  href="assets/img/02/7.jpg"
                  style={{ background: "none", border: "0px" }}
                >
                  <span className="icon-play">
                    <i className="fa fa-search-plus"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="item" style={{ marginRight: "15px" }}>
            <div className="our-gallery">
              <img src="assets/img/02/7.jpg" />
              <div
                className="video-body"
                style={{
                  position: "absolute",
                  top: 0,
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  height: "220px",
                }}
              >
                <a
                  className="popup-video gsc-video-link thumbnail"
                  href="assets/img/02/6.jpg"
                  style={{ background: "none", border: "0px" }}
                >
                  <span className="icon-play">
                    <i className="fa fa-search-plus"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </OwlCarousel>
      </div>
    </>
  );
};

export default Owl;
