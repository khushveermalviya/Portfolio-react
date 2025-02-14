import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export default function BackgroundSphere() {
  const meshRef = useRef()

  useFrame(() => {
    meshRef.current.rotation.x += 0.001
    meshRef.current.rotation.y += 0.001
  })

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[3, 64, 64]} />
      <meshStandardMaterial 
        color="#1a1a1a"
        wireframe={true}
        transparent={true}
        opacity={0.3}
      />
    </mesh>
  )
}