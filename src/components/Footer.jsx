import React from 'react'
import {RiTwitterXLine, RiFacebookFill, RiGithubFill, RiInstagramFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <div className='mt-4 p-4'>
    <div className="icons text-sm flex justify-center items-center gap-2">
            <a href='https://twitter.com/nilaacodes' target='_blank'><RiTwitterXLine size={30}/></a>
            <a href=''  target='_blank'><RiFacebookFill size={30}/></a>
            <a href='https://github.com/nilaachandra' target='_blank'><RiGithubFill size={30}/></a>
            <a href='https://www.instagram.com/niillaaa.a/' target='_blank'><RiInstagramFill size={30}/></a>
        </div>
        <div className="tags flex items-center flex-col text-base">
          <h1 className='text-center'><span>©️2024</span> <span className=''>LogoMoji || All Rights Reserved</span> </h1>
          <p className='text-center'>Developed with &#9829; <a href='https://twitter.com/nilaacodes' target='_blank' className='hover:underline text-blue-700'>Nilaa Laishram</a></p>
          <div className='flex lg:flex-row flex-col gap-1'>
          <p className='text-center'>Wanna Support Me? </p>
          <a href='https://buymeacoffee.com/nilaacodes' className='hover:underline text-blue-700'>Buy me a Coffee to support my work!</a>
          </div>
        </div>
        </div>
  )
}

export default Footer