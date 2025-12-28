import React from 'react'
import logo from "./icons/abc.png"
import "../Components/Footer.css"
function Footer() {
        return (
                <div className='footer-main' id='footer'>
                        <div className='ab-ab'>
                                <div className="footer-first-container">

                                        <div className='eval'>
                                                <p className='heading-cont-one'>Office Address</p>
                                                <p className='body-cont-one'>   199 Hollybrooke Dr, Langhorne, PA 19047</p>
                                       
                                        </div>
                                  

                                        
                                </div>
                                <div className='endfooter'>
                                      
                                        <div className='end-footer-real'>
                                                {/* <img className='logo-footer' src={logo} /> */}
                                                <p className='abcd'>© 2023 Tech Trends. All Rights Reserved</p>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Footer