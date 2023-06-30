import React, { useState } from "react";

const Overview = () => {
  const [activeTab, setActiveTab] = useState("whc-cs");

  const openCity = (event, tabName) => {
    setActiveTab(tabName);
  };
  return (
    <>
      <section id="overview">
        <h2>Computer Assisted Navigation for Joint Replacement</h2>
        <p style={{ textAlign: "center" }}>
          A state-of-the-art modality that offers added precision with real time
          image guidance.
        </p>
        <div className="about-section">
          <div className="tab">
            <button
              className={`tablinks ${activeTab === "whc-cs" ? "active" : ""}`}
              onClick={(event) => openCity(event, "whc-cs")}
              id="defaultOpen"
            >
              {" "}
              Overview
            </button>
            <button
              className={`tablinks ${activeTab === "whc-cs1" ? "active" : ""}`}
              onClick={(event) => openCity(event, "whc-cs1")}
            >
              {" "}
              Procedure{" "}
            </button>

            <button
              className={`tablinks ${activeTab === "whc-cs3" ? "active" : ""}`}
              onClick={(event) => openCity(event, "whc-cs3")}
            >
              {" "}
              Types{" "}
            </button>
            <button
              className={`tablinks ${activeTab === "whc-cs4" ? "active" : ""}`}
              onClick={(event) => openCity(event, "whc-cs4")}
            >
              {" "}
              Indications{" "}
            </button>
          </div>

          {activeTab === "whc-cs" && (
            <div id="whc-cs" className="tabcontent">
              <div className="about-d">
                <div className="top-ab">
                  <div style={{ display: "block" }}>
                    <p>
                      A computer-assisted navigation system is a phenomenal
                      modality that has revolutionized joint replacement by
                      enabling doctors to perform the procedure with added
                      precision and accuracy. The technique has made it possible
                      to eliminate the most common cause of premature joint
                      implant failure, i.e mal-alignment. The results achieved
                      through computer-assisted navigation are far more accurate
                      as compared to conventional joint replacement, completely
                      negated as computer navigation allows real-time,
                      patient-specific information.{" "}
                    </p>
                    <a href="#start" className="enquire-now">
                      {" "}
                      Enquire Now{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="about-img">
                <img src="assets/img/bg.png" alt="" />
              </div>
            </div>
          )}

          {activeTab === "whc-cs1" && (
            <div id="whc-cs1" className="tabcontent">
              <p style={{ paddingTop: "25px" }}>
                Computer-assisted navigation system comprises 3 main components
                - A computer platform, a tracking system and a rigid body
                marker.{" "}
              </p>

              <p>
                <strong>Computer platform -</strong> It controls the
                coordination of data taken from the surgical site, interprets it
                and generates the results on the screen. The computer is
                specially programmed to assess the 3-D shape and position of the
                instruments and probe.{" "}
              </p>

              <p>
                <strong>Tracking system -</strong> This consists of
                high-definition optical cameras, an electromagnetic coil and an
                ultrasonic probe. The optical cameras help to pick up infrared
                light coming from the trackers, which is then recognized by the
                active emitters{" "}
              </p>

              <p>
                <strong>Rigid body marker -</strong> The markers or trackers are
                attached to the bone and can be active or passive. The former
                emits light from a source and is powered by a battery. The
                latter reflects infrared light. Different markers are used to
                trace the movement of the bones and instruments respectively.{" "}
              </p>

              <p>
                <strong>Working</strong>{" "}
              </p>

              <ul style={{ paddingTop: "10px" }}>
                <li>
                  The surgery is performed under the influence of anaesthesia
                  and is minimally invasive.{" "}
                </li>
                <li>
                  Doctors start by strategically positioning tiny transmitters
                  on the affected leg.{" "}
                </li>
                <li>
                  The patient's leg is then moved in certain positions. The
                  alignment of the affected joint in thesepositions is recorded
                  by the optical camera and the data is transmitted to the
                  computer This data is analyzed and interpreted by the computer
                  and then used to generate an anatomic model of the knee or hip
                  joint.{" "}
                </li>
                <li>
                  The information is provided throughout the surgery, thereby
                  enabling real-time assistance while the procedure is being
                  carried out. This helps the surgeons to guide the tools more
                  precisely, allowing accurate bone cuts, positioning of
                  implants and ligament balancing.{" "}
                </li>
              </ul>
            </div>
          )}

          {activeTab === "whc-cs2" && (
            <div id="whc-cs2" className="tabcontent">
              <ul style={{ paddingTop: "25px" }}>
                <li>
                  The surgery is performed under the influence of anaesthesia
                  and is minimally invasive.{" "}
                </li>
                <li>
                  Doctors start by strategically positioning tiny transmitters
                  on the affected leg.{" "}
                </li>
                <li>
                  The patient's leg is then moved in certain positions. The
                  alignment of the affected joint in these
                </li>{" "}
                <li>
                  positions is recorded by the optical camera and the data is
                  transmitted to the computer This data is analyzed and
                  interpreted by the computer and then used to generate an
                  anatomic model of the knee or hip joint.{" "}
                </li>
                <li>
                  The information is provided throughout the surgery, thereby
                  enabling real-time assistance while the procedure is being
                  carried out. This helps the surgeons to guide the tools more
                  precisely, allowing accurate bone cuts, positioning of
                  implants and ligament balancing.{" "}
                </li>
              </ul>
            </div>
          )}

          {activeTab === "whc-cs3" && (
            <div id="whc-cs3" className="tabcontent">
              <ul style={{ paddingTop: "25px" }}>
                <li>
                  <strong>Computer-assisted knee replacement -</strong> Also
                  known as computer-assisted total knee arthroplasty, the
                  technique uses infra-red technology for precisely positioning
                  the prosthetics components for replacing damaged knee joints{" "}
                </li>
                <li>
                  <strong>Computer-assisted hip replacement - </strong> Also
                  known as computer-assisted total hip arthroplasty, the
                  technique uses infra-red technology for precisely positioning
                  the prosthetics components for replacing damaged hip joints{" "}
                </li>
              </ul>
            </div>
          )}

          {activeTab === "whc-cs4" && (
            <div id="whc-cs4" className="tabcontent">
              <p style={{ paddingTop: "25px" }}>
                Computer-navigated joint replacement is an option for people who
                are suffering from chronic hip and joint pain that is:{" "}
              </p>

              <ul>
                <li>Becoming worse with time </li>
                <li>Not responding to any non-surgical treatment </li>
                <li>
                  Interfering with the patient's ability to indulge in normal
                  day-to-day activities.{" "}
                </li>
              </ul>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Overview;
