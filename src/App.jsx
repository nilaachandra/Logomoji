import React from 'react'
import LogoMaker from './components/LogoMaker'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <div className='flex flex-col bg-[#fcfbe6]'>
      <LogoMaker/>
      <Footer/>
      </div>
    </>
  )
}

export default App