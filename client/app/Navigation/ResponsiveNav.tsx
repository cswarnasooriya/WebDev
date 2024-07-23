"use client"

import React, { useState } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'

const ResponsiveNav = () => {
    
    const [nav, setNav] = useState();

  return (
    <div>

      <Nav />
      <MobileNav />

    </div>
  )
}

export default ResponsiveNav
