import Logo from './Images/SINDICA-LOGO.svg'
import { useTransition, animated } from 'react-spring'
import React, { useState } from 'react'

function App() {

  return (
    <div className="h-screen bg-black">
      <section className="hero container max-w-screen-sm mx-auto p-10 flex">
        <img src={Logo} alt="Sindica Corporation - Logo" className="mx-auto"/>
      </section>
      <section className="text-emerald-500 text-center">
        <h1 className="text-4xl uppercase pb-5">Contact Us</h1>
      </section>
      <section className="text-white text-center">
        <p className="text-2xl pb-5">(831) 800-1311</p>
      </section>
      <section className="text-white text-center">
        <p className="text-2xl pb-5">info@sindica.net</p>
      </section>
      <section className="text-white text-center">
        <p className="text-2xl pb-5">133 Huges Rd, Watsonville, CA 95076</p>
      </section>
    </div>
  )
}

export default App
