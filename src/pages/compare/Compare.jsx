import React from 'react'
import '../compare/Compare.css'
import Navbar from'../../components/Navbar/Navbar'
import Footer from'../../components/footer/Footer'
import green from '../../assets/green.png'
import earsphone from '../../assets/earesphones.png'
import { PiCpuThin } from "react-icons/pi";
import { PiSpeakerSimpleSlashThin } from "react-icons/pi";
import { PiUserSoundLight } from "react-icons/pi";
import { PiEqualizerLight } from "react-icons/pi";
import { TfiLayoutLineSolid } from "react-icons/tfi";
import { PiBatteryChargingLight } from "react-icons/pi";
import { TiMicrophoneOutline } from "react-icons/ti";
import { PiEar } from "react-icons/pi";
import { PiHandTapLight } from "react-icons/pi";
import { PiDrop } from "react-icons/pi";
export default function Compare() {
  return (
    <div className='compare_page'> 
      <Navbar/>
      <h1 className='title1'>Compare Resonance Models</h1>
      <p className='title2'>Get help choosing. Chat with a Specialist.</p>
      <div className='compare'>
        <div className='aura_Pro'>
            <div className='img_info1'>
                <h1>Aura Por II</h1>
                <img className='head' src={green} alt='green headphone'/>
                <p className='pric'>Startin at $320</p>
                <button>Buy Now</button>
            </div>

            <p className='info'><PiCpuThin className='icon'/><br/>
              R1 Chip<br/>
            <PiSpeakerSimpleSlashThin className='icon' /><br/>
 2x more Active Noise Cancellation<br/>
 <PiUserSoundLight className='icon' /><br/>
 Personalized Spatial Audio<br/>
 <PiEqualizerLight className='icon'/><br/>
 Lossless Audio<br/>
 <TfiLayoutLineSolid className='icon'/><br/>
 None<br/>
 <TfiLayoutLineSolid className='icon'/><br/>
 None<br/>
 <PiBatteryChargingLight className='icon'/><br/>
 Up to 17 hours of listening<br/>
  <TfiLayoutLineSolid className='icon'/><br/>
 None<br/>
 <TiMicrophoneOutline className='icon'/><br/>
 5 microphones total<br/></p>
        </div>
        <div className='flow'>
                   <div className='img_info1'>
                <h1>Flow II</h1>
                <img className='ear' src={earsphone} alt='green earsphone'/>
                <p className='pric'>Startin at $160</p>
                <button>Buy Now</button>
            </div>
            <p className='info'><PiCpuThin className='icon'/><br/>
R2 Chip<br/>
  <PiSpeakerSimpleSlashThin className='icon' /><br/>
Active Noise Cancellation<br/>
 <PiUserSoundLight className='icon' /><br/>
Personalized Spatial Audio<br/>
 <TfiLayoutLineSolid className='icon'/><br/>
None<br/>
<PiEar className='icon'/><br/>
Hearing Test and Hearing Protection<br/>
<PiHandTapLight className='icon'/><br/>
Touch sensor<br/>
 <PiBatteryChargingLight className='icon'/><br/>
Up to 6 hours of listening<br/>
<PiDrop className='icon'/><br/>
Water resistant<br/>
 <TiMicrophoneOutline className='icon'/><br/>
Dual beamforming microphones
            </p>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
