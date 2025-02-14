import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function FloatingParticles() {
  const particles = useRef()
  const count = 2000
  
  // Use useMemo to prevent recreating positions array on every render
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for(let i = 0; i < count * 3; i += 3) {
      pos[i] = (Math.random() - 0.5) * 20     // x
      pos[i + 1] = (Math.random() - 0.5) * 20 // y
      pos[i + 2] = (Math.random() - 0.5) * 20 // z
    }
    return pos
  }, [])

  // Create geometry attributes using useMemo
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    return geo
  }, [positions])

  useFrame((state) => {
    if (particles.current) {
      particles.current.rotation.x += 0.0003
      particles.current.rotation.y += 0.0005
    }
  })

  return (
    <points ref={particles}>
      <primitive object={geometry} />
      <pointsMaterial
        size={0.02}
        color="#8b5cf6"
        sizeAttenuation
        transparent
        opacity={0.8}
      />
    </points>
  )
}

export default FloatingParticles;