import React from 'react';
import img1 from "./images/computer.png"
import img2 from "./images/mobile.png"
import { motion } from 'framer-motion';
import "../Components/About.css"
function About() {
  const bounceTransition = {
    y: {
      duration: 3.4,
      yoyo: Infinity,
      ease: "easeOut"
    },
    backgroundColor: {
      duration: 0,
      yoyo: Infinity,
      ease: "easeOut",
      repeatDelay: 34.8
    }
  };
  return (
    <div className='about-cont' >
      <div className='bkgrnd-image-one'>
        <motion.img src={img1} className="imgdata" transition={bounceTransition}
          animate={{
            y: ["-50%", "150%"],

          }} />
      </div>

      <div className='about-info'>

        <p className='main-head'>Featured  <span className='span-head'>Services</span> </p>
        <div className='ftwo'>
          <div className='ao'>
            <div className='card-comp-up'>
              <p className='card-head'>Consulting</p>

            </div>
            <div className='card-comp-down'>
              <p className='ptext'>Tech Trend provides consulting services to assist clients with their continually changing IT environments. We help clients with planning and Implementing IT initiatives for a successful engagement. We leverage our global delivery model, proprietary frameworks and tools, such as Business Process Visualization (BPV) to keep pace with latest technology advances, business and industry trends.</p>
              {/* <div   className='more-info'> <p className='abcde'>more info...</p> </div> */}
            </div>
          </div>
          <div className='ao'>
            <div className='card-comp-up'>
              <p className='card-head'>Training</p>

            </div>
            <div className='card-comp-down'>
              <p className='ptext'>Tech Trend provides holistic training services that meet global standards. In this competitive world, you need to continually strive to expand your knowledge and stay ahead of the curve.

                We provide training on technical courses like Software Quality Assurance (Manual and Automation), Business Analyst and Scrum Master, to set you apart from the rest. Our specifically designed courses can help you develop your skills and meet industry requirements. We have executive-level trainers, who possess broad experience in the industry and are always ready to transfer their knowledge to  aspiring IT professionals.

                All our technology training courses are people focused so our students can reach their true potential. Our courses are delivered through Live Virtual Training. This gives students the ability to learn from anywhere while also having direct access to their instructor. We cap our classes to ensure every student has plenty of time to ask questions and troubleshoot problems. </p>

            </div>
          </div>


        </div>
        <div className='ftwo'>
          <div className='ao'>
            <div className='card-comp-up'>
              <p className='card-head'>Placement
              </p>

            </div>
            <div className='card-comp-down' >
              <p className='ptext'>Tech Trend connects leading IT employers with the technology talent their business needs. We strive to provide professionals with opportunities that inspire them. We take a personalized approach, ensuring that skill, personality, and vision align with every role.

                With our focus consistently aimed at providing the highest quality experience for both employers and job seekers, we’re proud to service a wide range of technology needs in Quality Assurance and Project Management.</p>
              {/* <div className='more-info' > <p className='abcde' >more info...</p> </div> */}
            </div>
          </div>
          <div className='ao'>
            <div className='card-comp-up'>
              <p className='card-head'>Mentoring</p>

            </div>
            <div className='card-comp-down'>
              <p className='ptext'>We, at Tech Trend, understand the significance of mentorship and guidance. Therefore, we don’t just train people but we are also huge proponents of helping them get over the line. Since each student is different, we carefully customize our assistance plan as well. The primary purpose is to help IT professionals succeed and excel in their respective domains.

                Our mentorship ranges from resume review and building to interview tips and project based questions. Our instructors have once been in your shoes so they know exactly what it takes to eliminate any and all hurdles between you and success!</p>

            </div>

          </div>

        </div>

        {/*
         <div className='ftwo'>
          <div className='ao'>
            <div className='card-comp-up'>
              <p className='card-head'>Mission Statement</p>

            </div>
            <div className='card-comp-down'>
              <p className='ptext'>Lorem ipsum dolor sit amet,   ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
             <div className='more-info' > <p className='abcde'>more info...</p> </div> 
            </div>
          </div>
        <div className='ao'>
            <div className='card-comp-up'>
              <p className='card-head'>Mentoring</p>

            </div>
            <div className='card-comp-down'>
              <p className='ptext'>Lorem ipsum dolor sit amet,   ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
          <div className='more-info'> <p   className='abcde' >more info...</p> </div> 
          </div>  

        </div> */}

      </div>

      <div className='bkgrnd-image-two'>
        <motion.img src={img2} className="imgdata" transition={bounceTransition}
          animate={{
            y: ["300%", "0%"],

          }} />


      </div>




    </div>
  )
}


export default About