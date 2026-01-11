import React from "react";
import "../Components/About.css";
function About() {
  const bounceTransition = {
    y: {
      duration: 3.4,
      yoyo: Infinity,
      ease: "easeOut",
    },
    backgroundColor: {
      duration: 0,
      yoyo: Infinity,
      ease: "easeOut",
      repeatDelay: 34.8,
    },
  };
  return (
    <div id="services" className="about-cont">
      <div className="about-info">
        <p className="main-head">
          Featured <span className="span-head">Services</span>{" "}
        </p>
        <div className=" tech-main-conty">
          <div className="info-cont-text-tech ">
            <h3>Non Technical Tracks</h3>
            <ul style={{ margin: "5px", padding: "5px" }}>
              <li className="ptext">
                AI Enhanced Project management/ Scrum Master{" "}
              </li>
              <li className="ptext">
                Agile, Scrum, Waterfall (Beginner Friendly)
              </li>
              <li className="ptext">
                AI tools for charts, forecasting an planning
              </li>
              <li className="ptext">
                Risk Management, Stakeholder communication{" "}
              </li>
            </ul>
            {/* <p className="ptext" style={{ padding: "10px 0px 0px 0px" }}>
              Business Analyst
            </p>
            <p className="ptext" style={{ padding: "5px 0px 0px 0px" }}>
              Scrum master
            </p>

            <p className="ptext" style={{ padding: "5px 0px 0px 0px" }}>
              Project Manager
            </p>

            <p
              className="ptext ptext-small"
              style={{ padding: "15px 0px 0px 0px" }}
            >
              Learn leadership, agile and communication.
            </p> */}
          </div>
          <div   className="ml-5p info-cont-text-tech">
            <h3>Technical Tracks</h3>
            <ul style={{ margin: "5px", padding: "5px" }}>
              <li className="ptext">
                Manual and Auto testing fundamentals{" "}
              </li>
              <li className="ptext">
                Ai CodeGen for automated coding assistance 
              </li>
              <li className="ptext">
                Framework building(logging, reporting, utilities)
              </li>
              <li className="ptext">
                End to End projects workflow{" "}
              </li>
            </ul>
            {/* <p className="ptext" style={{ padding: "10px 0px 0px 0px" }}>
              Test & QA Automation
            </p>
            <p className="ptext" style={{ padding: "5px 0px 0px 0px" }}>
              AI-Powered Tools
            </p>

            <p className="ptext" style={{ padding: "5px 0px 0px 0px" }}>
              Framework Development
            </p>

            <p
              className="ptext ptext-small"
              style={{ padding: "15px 0px 0px 0px" }}
            >
              Build real automation skills employers need.
            </p> */}
          </div>
        </div>
        <div className="ftwo">
          <div className="main-container">
            <div className="info-cont-tex">
              <h3>Consulting</h3>
              <p className="ptext">
                Tech Trend provides consulting services to help clients navigate
                evolving IT environments. We assist with planning and
                implementing IT initiatives for successful engagements,
                leveraging our global delivery model, proprietary frameworks,
                and tools like Business Process Visualization (BPV) to align
                with the latest technology, business, and industry trends.
              </p>
            </div>
            <div className="info-cont-img img-one"></div>
          </div>

          <div className="main-container">
            <div className="info-cont-tex">
              <h3>Training</h3>
              <p className="ptext">
                Tech Trend offers holistic training services aligned with global
                standards to help professionals expand knowledge and stay
                competitive. We provide courses in Software Quality Assurance
                (Manual and Automation), Business Analysis, and Scrum Master,
                designed to build skills and meet industry requirements. Led by
                experienced executive-level trainers, our people-focused
                programs are delivered via Live Virtual Training, enabling
                remote learning with direct instructor access and capped classes
                for personalized support.
              </p>
            </div>
            <div className="info-cont-img img-two"></div>
          </div>
        </div>

        <div style={{ justifyContent: "center" }} className="ftwo ">
          <div className="main-container-last main-container">
            <div className="info-cont-tex">
              <h3>Placement</h3>
              <p className="ptext" style={{ padding: "10px 0px 0px 0px" }}>
                Tech Trend connects leading IT employers with skilled technology
                talent to meet business needs. We offer inspiring opportunities
                for professionals through a personalized approach, aligning
                skills, personality, and vision with each role. Focused on
                delivering top-quality experiences, we serve diverse needs in
                Quality Assurance and Project Management.
              </p>
            </div>
            <div className="info-cont-img img-five"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
