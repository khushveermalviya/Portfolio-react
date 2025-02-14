import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import SkillsDisplay from './SkillsDisplay'

function Details() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black">
      <div className="h-screen relative">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          gl={{ antialias: true, alpha: true }}
        >
          <color attach="background" args={['#000000']} />
          <fog attach="fog" args={['#000000', 5, 15]} />
          
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          
          <Suspense fallback={null}>
            <SkillsDisplay />
          </Suspense>
          
          <OrbitControls 
            enableZoom={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>

        {/* Overlay Text */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center pointer-events-none">
          <div className="text-center text-white p-4 mb-8">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              My Skills & Journey
            </h2>
            <p className="text-xl text-gray-300">
              Full Stack Developer & DevOps Engineer
            </p>
          </div>
          <div className="text-center text-white p-4">
            <h3 className="text-3xl font-bold mb-4">Experience</h3>
            <div className="mb-6">
              <h4 className="text-2xl font-semibold">Frontend Developer | MUJHACK X | Virtual | November 2024-December 2024</h4>
              <ul className="text-lg text-gray-300 list-disc list-inside">
                <li>Spearheaded website management tasks with precision and efficiency.</li>
                <li>Implemented timely updates to ensure optimal user experience and functionality.</li>
              </ul>
            </div>
            <div>
              <h4 className="text-2xl font-semibold">DevOps | CELEBAL TECHNOLOGY | Jaipur | August 2024-October 2024</h4>
              <ul className="text-lg text-gray-300 list-disc list-inside">
                <li>Made CI/CD Pipeline for continuous integration.</li>
                <li>Implemented timely updates to ensure optimal user experience and functionality.</li>
                <li>Worked on various DevOps tasks and projects.</li>
              </ul>
            </div>
            </div>
            </div>
            </div>
            </div>
         
  )
}

export default Details;