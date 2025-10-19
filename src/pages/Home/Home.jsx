import React from "react";
import "./Home.css";
import white_headphone from "../../assets/Headphone.png";
import yellow from "../../assets/yellow.png";
import green from "../../assets/green.png";
import pink from "../../assets/pink.png";
import model from "../../assets/Model.png";
import firstDetile from "../../assets/firstDetile.png";
import bag from "../../assets/bag.png";
import one from "../../assets/one.png";
import tow from "../../assets/tow.png";
import three from "../../assets/three.png";
import four from "../../assets/four.png";
import five from "../../assets/five.png";
import six from "../../assets/six.png";
import feature from "../../assets/Feature.png";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
export default function Home() {
  function setCenter(color) {
    document
      .querySelectorAll(".img")
      .forEach((img) => img.classList.remove("active"));
    document.getElementById(color).classList.add("active");
  }

  return (
    <div className="allpage">
      <Navbar />
      <div className="first">
    
          <h1 className="front-text">Resonance</h1>
             <img
          className="bigHeadphone"
          src={white_headphone}
          alt=" white big headphone"
        />
           <h1 className="back-text">Aura Pro II</h1>
          
     
      
      </div>
      <div className="second">
        <h4 className="parent-heading">Your Style. Your Sound.</h4>
        <p className="sub-heading">
          Studio-grade acoustics that dissolve distractions and awaken clarity.
        </p>
        <div className="headphoneimages">
          <img
            id="yellow"
            className="img yellowHeadphone"
            src={yellow}
            alt="Yellow Headphone"
          />
          <img
            id="green"
            className="img greenHeadphone active"
            src={green}
            alt="Green Headphone"
          />
          <img
            id="pink"
            className="img pinkHeadphone"
            src={pink}
            alt="Pink Headphone"
          />
        </div>
        <div className="color-button">
          <button
            className="yellow_but"
            onClick={() => setCenter("yellow")}
          ></button>
          <button
            className="green_but"
            onClick={() => setCenter("green")}
          ></button>
          <button
            className="pink_but"
            onClick={() => setCenter("pink")}
          ></button>
        </div>
        <p className="third_p">Choose a color that fits your flow.</p>
      </div>
      <div className="third">
        <div className="first_img1">
          <div>
            <p>
              Deep lows. Lush mids.
              <br />
              Airy highs. All perfectly
              <br /> in balance.
            </p>
          </div>
          <img className="model" src={model} alt="Headphone Model" />
        </div>
        <div className="first_img2">
          <p>
            Silence distractions. <br />
            Control everything <br />
            with a gentle tap.
          </p>
          <img className="firstDetile" src={firstDetile} alt="Headphone pice" />
        </div>
        <div className="first_img3">
          <p>
            Thoughtfully packed in
            <br /> plastic-free, high quality <br />
            materials.
          </p>
          <img className="bag" src={bag} alt="Headphone bag" />
        </div>
      </div>
      <div className="fourth">
        <h1>Every Detail matters</h1>
        <p>From the stitch to the signal, precision lives here.</p>
        <div className="Detile_images">
          <img src={one} />
          <img src={tow} />
          <img src={three} />
          <img src={four} />
          <img src={five} />
          <img src={six} />
        </div>
      </div>
      <div className="five">
        <h1>Dreamlike Sound</h1>
        <p>Starting at $320 — Available Now.</p>
        <button>Buy Now</button>
        <div className="empty_space"></div>
      </div>
      <Footer />
    </div>
  );
}
