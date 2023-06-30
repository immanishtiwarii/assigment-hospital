import React from "react";

const Faqs = () => {
  return (
    <>
      <section className="faqs-b">
        <div id="faqs">
          <div className="why-choose">
            <h2>FAQ'S</h2>

            <div className="question">
              <h5>Q - Is Computer-navigated joint replacement safe?</h5>
              <div className="arrow"></div>
              <div className="answer">
                <p>
                  A - Yes, computer-navigated joint replacement is a completely
                  safe procedure with minimal to no post-surgical complications
                  as it offers added accuracy with zero human error{" "}
                </p>
              </div>
            </div>

            <div className="question">
              <h5>
                Q - How long does Computer-navigated joint replacement take?
              </h5>
              <div className="arrow"></div>
              <div className="answer">
                <p>
                  A - Computer-navigated joint replacement takes around 45
                  minutes, which is much faster as compared to the traditional
                  joint replacement surgery{" "}
                </p>
              </div>
            </div>

            <div className="question">
              <h5>
                Q - How long will it take to recover after Computer-navigated
                knee replacement?
              </h5>
              <div className="arrow"></div>
              <div className="answer">
                <p>
                  A - The time taken for recovery following a Computer-navigated
                  knee replacement is around 3 to 4 weeks. In some cases, it may
                  extend up to 6 weeks.{" "}
                </p>
              </div>
            </div>

            <div className="question">
              <h5>Q - Is computer navigated hip replacement painful?</h5>
              <div className="arrow"></div>
              <div className="answer">
                <p>
                  A - No, computer navigated hip replacement is not a painful
                  procedure as you will be under the influence of anesthesia.
                  Slight discomfort and soreness may be experienced after the
                  surgery which can be easily managed with prescribed pain
                  medication.{" "}
                </p>
              </div>
            </div>

            <div className="question">
              <h5>
                Q - For how long will I need to stay in the hospital after
                computer navigated knee replacement?
              </h5>
              <div className="arrow"></div>
              <div className="answer">
                <p>
                  A - Patients undergoing computer navigated knee replacement
                  are generally discharged within a day or two, depending on
                  their overall prognosis.{" "}
                </p>
              </div>
            </div>

            <a href="#start" className="enquire-now" style={{margin:"40px auto"}}>
              {" "}
              Enquire Now{" "}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faqs;
