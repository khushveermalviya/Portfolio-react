// App.jsx

import { motion } from 'framer-motion'
import {  useState, useEffect } from 'react'
import Body from './Pages/Body'
import Details from './Pages/Details.jsx'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects.jsx'

import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import FloatingParticles from './Pages/FloatingParticles.jsx'


function App() {





  return (
    
    <div className="relative min-h-screen">
    <div className="absolute inset-0">
    <Canvas
      camera={{ position: [0, 0, 10], fov: 75 }}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={['#000000']} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <FloatingParticles />
      </Suspense>
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <Body />
        <Skills />
        <Details />
<Projects/>
      </motion.div>
    </div>
  )
}

export default App

// components/BackgroundSphere.jsx


// components/Skills.jsx

// components/LoadingScreen.jsx
