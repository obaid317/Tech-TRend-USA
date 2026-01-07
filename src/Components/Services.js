import React, { useEffect } from "react";
import "./Services.css";
function Services() {
  let urll = "https://nabidh.ae/#/comm/landing";

  // useEffect(() => {
  //   window.scrollBy(0, 100);
  //   console.log('hhh')
  //   // Update the document title using the browser API
  //   // document.title = `You clicked ${count} times`;
  // },[]);
  return (
    <div>
      <div className="serv-main" id="about">
        <div className="main-services-container">
          <div className="services-content">
            <p className="service-heading">
              Tech <span className="head-end">Trend</span>{" "}
            </p>
            <p className="services-text" style={{ marginTop: "10px" }}>
              Tech Trend delivers world-class, AI-powered holistic training to
              empower professionals in a competitive IT landscape. Our tailored
              courses in Software Quality Assurance (Manual and Automation),
              Scrum Master, and Project Management build essential skills to
              meet industry demands. Led by experienced executive trainers, our
              student-focused programs via Live Virtual Training offer flexible
              remote access, direct instructor support, and capped classes for
              personalized growth.{" "}
            </p>
          </div>
        </div>
        <div className="teacher-section-main">
          <div className="  services-content">
            <p className="service-heading-dup">
              <span className="head-end">Meet Our Expert</span>
              {" Instructor's"}
            </p>
            <div className="teacher-info">
              <div className="teacher-main    ">
                <div className="center-div-pp">
                  {" "}
                  <div className="sqa-pic"></div>
                </div>
                <h3>Muhammad Usman</h3>
                <h6>Senior QA Lead </h6>
                <p className="font-teacher-desc">
                  QA Engineer Lead with 9+ years of experience driving quality
                  across SDLC using automation tools like Selenium, Cypress, and
                  Playwright. Skilled in Python, Java/JavaScript, CI/CD (GitHub,
                  Jenkins), and AI-powered testing. Proven track record of
                  building scalable test frameworks, improving coverage, and
                  accelerating releases with high quality.
                </p>
              </div>
              <div className="teacher-main  ">
                <div className="center-div-pp">
                  <div className="pmo-pic"></div>
                </div>
                <h3>Usman Naqvi</h3>
                <h6>Senior Project Manager </h6>
                <p className="font-teacher-desc">
                  Seasoned Project Management expert with nearly 14 years of
                  experience in information technology, including a decade in
                  leadership and project management. Proficient in all facets of
                  project management, including agile and waterfall
                  methodologies, risk assessment, resource allocation,
                  stakeholder engagement, DevOps pipelines, cloud architecture
                  integration, API-driven development, and AI-enhanced
                  analytics.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
