import React, { useEffect } from 'react'
import { motion } from 'framer-motion';
import img1 from "./images/internet.png"
import "./Services.css";
function Services() {
  let urll = "https://nabidh.ae/#/comm/landing";
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
      repeatDelay: 3.8
    }
  };
  // useEffect(() => {
  //   window.scrollBy(0, 100);
  //   console.log('hhh')
  //   // Update the document title using the browser API
  //   // document.title = `You clicked ${count} times`;
  // },[]);
  return (
    <div>
      <div className='serv-main' id='about'  >
      {/* <div className='serv-main'   > */}
        <div className='bkgrnd-img-one'>
          <motion.img src={img1} height={216} width={196} transition={bounceTransition}
            animate={{
              y: ["120%", "0%"],

            }} />
        </div>

        <div className='main-services-container'>
          <div className='services-content'>
            <p className='service-heading' >Tech   <span className='head-end'>Trend</span> </p>
            <p className='services-text' style={{ "marginTop": "10px" }}>
              Tech Trend provides holistic training services that meet global standards.
              In this competitive world, you need to continually strive to expand your knowledge and stay ahead of the curve.
            </p>
            <p className='services-text' style={{ "marginTop": "10px" }}>
              We provide training on technical courses like Software Quality Assurance (Manual and Automation),
              Business Analyst and Scrum Master, to set you apart from the rest.
              Our specifically designed courses can help you develop your skills and meet industry requirements.
              We have executive-level trainers, who possess broad experience in the industry and are always ready to transfer their knowledge to  aspiring IT professionals.
            </p><p className='services-text' style={{ "marginTop": "10px" }}>
              All our technology training courses are people focused so our students can reach their true potential.
              Our courses are delivered through Live Virtual Training.
              This gives students the ability to learn from anywhere while also having direct access to their instructor. We cap our classes to ensure every student has plenty of time to ask questions and troubleshoot problems.
            </p>
          </div>

          {/* <div className='services-image'>
          <div className='image-text'>
            <p className='img-par'> <span className='twelve' >3</span> <br /> Years of Delivering Quality meat around the world.</p>
          </div>
        </div> */}
        </div>
        <div className='bkgrnd-img-one'></div>

      </div>
      <div id='services'>

      </div>
    </div>
  )
}

export default Services