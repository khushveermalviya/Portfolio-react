  import { Canvas } from '@react-three/fiber'
  import { Suspense } from 'react'
  import { OrbitControls } from '@react-three/drei'
import Nav from './Nav'
import FloatingParticles from './FloatingParticles'

function Body() {
  return (
    <div className="h-screen relative">
      <Nav />
      
      {/* 3D Background */}


      {/* Content Overlay */}
      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Full Stack Developer & DevOps Engineer
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Building scalable applications and automating deployment pipelines
          </p>
        </div>
      </div>
    </div>
  )
}

export default Body;