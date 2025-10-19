import React from 'react'
import './Footer.css'
import logo from '../../assets/Logo.png'
import { FaMeta } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { PiDiscordLogoLight } from "react-icons/pi";
export default function Footer() {
  return (
    <div className='footer_page'>
      <h1 className='footer_heading'>Sound. Presence. Purpose.</h1>
      <p className='footer_p1'>Focused on crafting immersive audio experiences. </p>
<p className='footer_p2'>We believe sound should not just be heard—it should move you.</p>
<div className='footer_but'>
<button>Aura Pro II</button>
<button>Flow II</button>
</div>
<div className='last_line'><img src={logo}/> 
<p>© 2025 Resonance. All rights reserved. <PiDiscordLogoLight /> <FaXTwitter /> <FaMeta /> </p>

 </div>
    </div>
  )
}
