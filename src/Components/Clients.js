import React, { useState } from 'react'
import "../Components/Clients.css"
import { motion } from 'framer-motion';
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
// import Item from "./Item";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
let Item = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 250px;
width: 100%;
background-color: #00008B;
color: #fff;
margin: 0 15px;
font-size: 4em;
`;
function Clients() {
  const [isHover, setIshover] = useState(false);
  function handlehovering(e) {

    setIshover(true);
    console.log(isHover);

  }
  function handleleavehovering(e) {
    setIshover(false);
    console.log(isHover);

  }
  const bounceTransition = {
    y: {
      duration: 18.4,
      yoyo: Infinity,
      ease: "easeOut"
    },
    backgroundColor: {
      duration: 0,
      yoyo: Infinity,
      ease: "easeOut",
      repeatDelay: 18.8
    }
  };


  return (
    <div className='client-cont' id='client'>

      <div className='about-client'>

        <p className='client-head-start'>Our   &nbsp;<span className='span-head'>Products</span></p>
        <div className='img-container'>
          <Carousel breakPoints={breakPoints}>
            <img className='img-client' src='client-logo/1.jpg' />
            <img className='img-client' src='client-logo/2.jpg' />
            <img className='img-client' src='client-logo/3.jpg' />
            <img className='img-client' src='client-logo/4.jpg' />
            <video className='img-client' autoplay controls>
              <source src="client-logo/5.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
             
            <video className='img-client' autoplay controls>
              <source src="client-logo/6.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <video className='img-client' autoplay controls>
              <source src="client-logo/7.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <video className='img-client' autoplay controls>
              <source src="client-logo/8.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <video className='img-client' autoplay controls>
              <source src="client-logo/9.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <video className='img-client' autoplay controls>
              <source src="client-logo/10.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Carousel>

        </div>
      </div>


    </div>
  )
}

export default Clients