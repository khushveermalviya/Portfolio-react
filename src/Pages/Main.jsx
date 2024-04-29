import React from 'react'
import { TbBrandCpp } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { FaReact } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiExpress } from "react-icons/si"
import { VscAzureDevops } from "react-icons/vsc";
import { VscAzure } from "react-icons/vsc";
import { TbBrandVscode } from "react-icons/tb";
import { BiLogoMongodb } from "react-icons/bi"
import { FaGithubAlt } from "react-icons/fa";
import { DiLinux } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
function Main() {
  return (<>
  <div className='w-full content-start'>
    <h1 className='text-6xl text-center'>Skills</h1>
  </div>
    <div
    className='flex w-full h-screen  justify-around content-center flex-wrap'>
<div className='flex flex-col justify-center items-start'>
  <h1>Langauge</h1>
  <div className='flex justify-center items-center w-20 h-full'>
    <ul>
      <li className='flex w-full text-6xl'><TbBrandCpp /></li>
      <li className='flex w-full text-6xl'><DiJavascript /></li>
      <li className='flex w-full text-6xl'><SiJavascript /></li>
      <li className='flex w-full text-6xl'><FaJava /></li>
    </ul>
  </div>
</div>
<div className='flex flex-col justify-center items-center'>
  <h1>Frontend</h1>
  <div className='flex justify-center items-center w-20 h-full'>
    <ul>
      <li className='flex w-full text-6xl'><FaReact /></li>
      <li className='flex w-full text-6xl'>  <FaHtml5 /></li>
      <li className='flex w-full text-6xl'><SiTailwindcss /></li>
    
    </ul>
  </div>

</div>
<div className='flex flex-col justify-center items-center'>
  <h1>Backend</h1>
  <div className='flex justify-center items-center w-20 h-full'>
    <ul>
      <li className='flex w-full text-6xl'> <SiExpress /></li>
      <li className='flex w-full text-6xl'><BiLogoMongodb /></li>
      <li className='flex w-full text-6xl'><VscAzureDevops /></li>
      <li className='flex w-full text-6xl'> <VscAzure /></li>
    </ul>
  </div>
 
</div>
<div className='flex flex-col justify-center items-center'>
  <h1>Technology</h1>
  <div className='flex justify-center items-center w-20 h-full'>
    <ul>
      <li className='flex w-full text-6xl'><TbBrandVscode/></li>
      <li className='flex w-full text-6xl'><FaGithubAlt /></li>
      <li className='flex w-full text-6xl'> <DiLinux /></li>
    </ul>
  </div>
  
</div>

    </div>
    </>
  )
}

export default Main