import React, { useState } from "react";
import "../TechSpace/TechSpace.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import green from "../../assets/green.png";
import yellow from "../../assets/yellow.png";
import pink from "../../assets/pink.png";
export default function TechSpace() {
  const [imgsrc, setImgSrc] = useState(green);
  return (
    <div className="techSpase_page">
      <div className="first_sec">
        <h1>Color</h1>
        <div className="headphon">
          <img className="headphoneImg" src={imgsrc} />
          <span>
            <button
              className="yellow_btn"
              onClick={() => setImgSrc(yellow)}
            ></button>
            <button
              className="green_btn"
              onClick={() => setImgSrc(green)}
            ></button>
            <button
              className="pink_btn"
              onClick={() => setImgSrc(pink)}
            ></button>
          </span>
        </div>
      </div>
      <Navbar />
      <div className="secound_sec">
        <h1>Audio Technology</h1>
        <p>
          Custom-tuned 40mm Resonance™ drivers for deep bass.
          <br />
          Ultra-low distortion signal processing.
          <br />
          Adaptive Sound Sculpting™ — real-time EQ.
          <br />
          Spatial Audio Calibration with dynamic head tracking.
          <br />
          Natural Voice Isolation for calls, focus, and immersive listening.
          <br />
          Pressure-balancing acoustic vents for long-wear comfort.
        </p>
      </div>
      <div className="paragraf">
        <h1>Intelligence</h1>
        <p>
          Dual noise-targeting microphones.
          <br />
          Internal ear-position mic for personalized audio tuning.
          <br />
          Proximity & motion sensors to detect wear and usage.
          <br />
          Gesture-aware force sensor for effortless control.
          <br />
          Accelerometer-assisted voice capture for clarity on the move.
          <br />
        </p>
      </div>
      <div className="paragraf">
        <h1>Power</h1>
        <p>
          Custom-designed <strong>R2 Sound Core</strong> chip.
          <br />
          Advanced audio algorithms tuned for emotional clarity.
          <br />
          Onboard neural audio engine for Spatial Audio and Adaptive EQ.
          <br />
        </p>
      </div>
      <div className="paragraf">
        <h1>Controls</h1>
        <p>
          Tap once to play/pause or answer a call.
          <br />
          Tap twice to skip forward or end a call.
          <br />
          Tap three times to rewind.
          <br />
          Press and hold to access voice assistant.
          <br />
          Automatic mute when removed, smart resume when worn.
          <br />
        </p>
      </div>
      <div className="paragraf">
        <h1>Built for the Elements</h1>
        <p>
          Rated<strong> IPX4 </strong>for sweat and weather resistance.
          <br />
          Designed for long sessions, light activity, or relaxed stillness.
          <br />
        </p>
      </div>
      <div className="paragraf">
        <h1>Battery</h1>
        <p>
          Up to<strong> 36 hours </strong>total listening time with case.
          <br />
          Up to <strong>6.5 hours </strong>on a single charge.
          <br />
          Fast charge:<strong>10 minutes = 2 hours of play.</strong>
          <br />
          USB-C charging + Qi-compatible wireless charging.
          <br />
          LED status light + Find My compatible tone alert.
        </p>
      </div>
      <div className="paragraf">
        <h1>Connectivity</h1>
        <p>
          Bluetooth® 5.3 low-latency audio.
          <br />
          Multipoint connection with auto handoff.
          <br />
          Seamless pairing across all your devices.
        </p>
      </div>
      <div className="paragraf_def">
        <h1>Sustainability & Materials</h1>
        <p>
          100% recycled aluminum in internal frames.
          <br />
          Bio-based mesh ear padding.
          <br />
          Rare earth magnets sourced from reclaimed materials.
          <br />
          Plastic-free, fiber-based packaging.
          <br />
          Assembled in Zero Waste-certified facilities.
          <br />
        </p>
      </div>
      <Footer />
    </div>
  );
}
