import React from "react";

const Aligment = () => {
  return (
    <>
      <section id="alignment">
        <h2>For A Near-Perfect Alignment</h2>

        <div className="near-perfect">
          <ul>
            <li>
              <div className="li-wrap">
                <div className="alignment-img">
                  <img src="assets/img/01/1.png" />
                </div>
                <div className="text-doc">
                  <h2>Better function in the knee</h2>
                </div>
              </div>
            </li>

            <li>
              <div className="li-wrap">
                <div className="alignment-img">
                  <img src="assets/img/01/2.png" />
                </div>
                <div className="text-doc">
                  <h2>Reduced risk of revision surgery</h2>
                </div>
              </div>
            </li>

            <li>
              <div className="li-wrap">
                <div className="alignment-img">
                  <img src="assets/img/01/3.png" />
                </div>
                <div className="text-doc">
                  <h2>Reduced risk of outliers (incorrect positioning)</h2>
                </div>
              </div>
            </li>

            <li>
              <div className="li-wrap">
                <div className="alignment-img">
                  <img src="assets/img/01/4.png" />
                </div>
                <div className="text-doc">
                  <h2>Reduced risk of fat embolus and blood loss</h2>
                </div>
              </div>
            </li>

            <li>
              <div className="li-wrap">
                <div className="alignment-img">
                  <img src="assets/img/01/5.png" />
                </div>
                <div className="text-doc">
                  <h2>Reduced incision risk size and soft tissue damage</h2>
                </div>
              </div>
            </li>
          </ul>

          <a href="#start" className="enquire-now" style={{margin:"40px auto"}}>
            {" "}
            Enquire Now{" "}
          </a>
        </div>
      </section>
    </>
  );
};

export default Aligment;
