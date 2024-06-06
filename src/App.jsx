import React from 'react'
import LogoMaker from './components/LogoMaker'
import Footer from './components/Footer'
import { Analytics } from "@vercel/analytics/react"
const App = () => {
  return (
    <>
      <div className='flex flex-col bg-[#fcfbe6]'>
      <LogoMaker/>
      <Footer/>
      </div>
      <Analytics/>
    </>
  )
}

export default App