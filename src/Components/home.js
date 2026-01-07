import React from "react";
import imageOwn from "./icons/owner.jpeg";
import "./HeroSection.css";
import {
  FaBeer,
  FaFacebook,
  FaWhatsapp,
  FaPhone,
  FaPhoneAlt,
  FaInstagram,
} from "react-icons/fa";

function Home() {
  return (
    <div className="hero-container row" id="home">
      <div className="social-handler">
        <div className="div-one-social">
          <div style={{ paddingTop: "0px" }} className="contact-details">
            <FaPhoneAlt className="phone-icon"  fill="white" />
            <p
              style={{ color: "white" }}
              className="contact-details-text-new-nav"
            >
              +1 (215) 929-5487
            </p>
          </div>
        </div>

        <div className="div-two">
          <FaFacebook
            onClick={() => {
              window.open(
                "https://www.facebook.com/share/17prBJMKvS",
                "_blank"
              );
            }}
            className="socials-icons"
            size={23}
            fill="white"
          />

          <FaWhatsapp
            onClick={() => {
              window.open("https://wa.me/12159295487", "_blank");
            }}
            className="socials-icons"
            size={23}
            fill="white"
          />

          <FaInstagram
            onClick={() => {
              window.open("https://www.instagram.com/ttrendusa", "_blank");
            }}
            className="socials-icons"
            size={23}
            fill="white"
          />
        </div>
      </div>
      <div className="col">
        <div className="text-main-home row ">
          <h1 className="new-text">
            Get Job-Ready in USA with
            <span className="new-span"> Tech Trend</span>
          </h1>
        </div>
      </div>
      <div className="col">
        <div style={{ paddingTop: "10px" }} className="text-main-home row">
          <button
            className="primary"
            onClick={() => document.getElementById("floatingButtons").click()}
          >
            JOIN FREE DEMO
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
