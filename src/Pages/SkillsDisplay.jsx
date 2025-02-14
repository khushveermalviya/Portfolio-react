import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Text } from '@react-three/drei'
import * as THREE from 'three'

function ParticleField() {
  const particles = useRef()
  const count = 1000
  
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)
  
  for(let i = 0; i < count; i++) {
    const i3 = i * 3
    positions[i3] = (Math.random() - 0.5) * 10
    positions[i3 + 1] = (Math.random() - 0.5) * 10
    positions[i3 + 2] = (Math.random() - 0.5) * 10
    
    colors[i3] = Math.random()
    colors[i3 + 1] = Math.random()
    colors[i3 + 2] = Math.random()
  }
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    for(let i = 0; i < count; i++) {
      const i3 = i * 3
      particles.current.geometry.attributes.position.array[i3 + 1] += Math.sin(time + i) * 0.002
    }
    particles.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        vertexColors
        transparent
        opacity={0.5}
        sizeAttenuation
      />
    </points>
  )
}

function SkillCube() {
  const skills = [

  ]
  
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshPhysicalMaterial
          color="#8b5cf6"
          metalness={0.8}
          roughness={0.2}
          opacity={0.7}
          transparent
        />
        {skills.map((skill, index) => (
          <Text
            key={index}
            position={[
              index < 2 ? 0 : index < 4 ? 1.1 : -1.1,
              index % 2 === 0 ? 1.1 : -1.1,
              index < 2 ? 1.1 : 0
            ]}
            rotation={[0, index < 2 ? 0 : Math.PI / 2, 0]}
            fontSize={0.2}
            color="white"
            anchorX="center"
            anchorY="middle"
          >
            {skill}
          </Text>
        ))}
      </mesh>
    </Float>
  )
}

export default function SkillsDisplay() {
  return (
    <group>
      <ParticleField />
      <SkillCube />
    </group>
  )
}