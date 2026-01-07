import React, { useState, useEffect } from 'react'
import { Link } from "react-scroll"
import logo from "./icons/abc.png"
import wapps from "./icons/abc.svg";
import '../Components/Navbar.css'
function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);


  return (
    <nav className='navbar' id="navbar">


      <div className="navbar-container">
        <img className='logo' src={logo} />

        <div className='menu-icon' onClick={handleClick}>
         
          <i fill="white" className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item' onClick={()=>{ window.scrollTo({top: 0, behavior: 'smooth'});}}>
          
              <p className='nav-links' onClick={closeMobileMenu}>
                Home
              </p>
           
          </li>
          <li className='nav-item'>
            {/* <Link to='about' smooth={true} duration={1000}> */}
            <div   onClick={()=>{
              const id = 'about';
              const yOffset = -65; 
              const element = document.getElementById(id);
              const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
              console.log(y)
              
              window.scrollTo({top: y, behavior: 'smooth'});
            }} smooth={true} duration={1000}>
              <p

                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </p>

            </div>
          </li>
          <li className='nav-item'>
            {/* <Link to='services' smooth={true} duration={1000}> */}
            <div  onClick={()=>{
              const id = 'services';
              const yOffset = -65; 
              const element = document.getElementById(id);
              const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
              console.log(y)
              
              window.scrollTo({top: y, behavior: 'smooth'});
            }} smooth={true} duration={1000}>
              <p
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Services
              </p>
            </div>
          </li>
          {/* <li className='nav-item'>
            <Link to='client' smooth={true} duration={1000}>
              <p
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </p>
            </Link >
          </li> */}
          <li className='nav-item'>
            {/* <Link to='contact' smooth={true} duration={1000}> */}
            <div  onClick={()=>{
              const id = 'contact';
              const yOffset = -65; 
              const element = document.getElementById(id);
              const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
              console.log(y)
              
              window.scrollTo({top: y, behavior: 'smooth'});
            }} smooth={true} duration={1000}>
              <p
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </p>
            </div >
          </li>
          {/* <li className='nav-item'>
            <Link to='footer' smooth={true} duration={1000}>
              <p

                className='nav-links'
                onClick={closeMobileMenu}
              >
                Support
              </p>
            </Link>
          </li> */}
          {/* <li className='nav-item'>
            <Link>
             <Link to='client' smooth={true} duration={1000}> 
              <p
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Practise
              </p>
            </Link >
          </li> */}
          {/* <li className='nav-item' >

            <img className='w-app' onClick={() => window.open("https://api.whatsapp.com/send?phone=12672172223")} src={wapps} />

          </li> */}
      

        </ul>
      </div>

    </nav>
  )
}

export default Navbar