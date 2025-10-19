import React, { useState } from 'react'
import '../Navbar/Navbar.css'
import logo from '../../assets/Logo.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className='nav_page'>
      <img className='navbar_logo' src={logo} alt="logo" />

      <button
        className={`nav_toggle ${open ? 'open' : ''}`}
        aria-label="Toggle navigation"//هذا مجرد سطر يشرح ماذا يفعل هذا الزر يعني طريقة لكتابة الشرح بغير طريقة التعليقات مثلا هون هو بيهاجر للزر يلي اله كلاسنيم نافبات
        onClick={() => setOpen(v => !v)}
      ><span/>
        <span />
        <span />
      </button>

      <nav className={`nav_but ${open ? 'open' : ''}`}>
        <button onClick={() => setOpen(false)}><a href="/">Home</a></button>
        <button onClick={() => setOpen(false)}><a href="/TechSpace">Tech Space</a></button>
        <button onClick={() => setOpen(false)}><a href="/Compare">Compare</a></button>
      </nav>
    </header>
  )
}
