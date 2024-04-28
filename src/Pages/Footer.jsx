import {Suspense} from 'react'
import { Canvas } from "@react-three/fiber";
import Loader from '../Components/Loader';

function Footer() {
  return (
    <>
    <Canvas className='w-full h-full bg-transparent' 
    camera={{near: 0.1, far: 1000}}
    >
    <Suspense  fallback={<Loader />}>
<directionalLight/>
<ambientLight/>
<pointLight/>
<spotLight/>
<hemisphereLight/>
    </Suspense>
    </Canvas>
    </>
  )
}

export default Footer