import { PerspectiveCamera } from '@react-three/drei'
import React, { Suspense } from 'react'
import Computer from '../components/Computer'
import { Canvas } from '@react-three/fiber'
import CanvasLoader from '../components/CanvasLoader'
import {Leva, useControls} from 'leva';
import { useMediaQuery } from 'react-responsive'
import Target from '../components/Target'
import HeroCamera from '../components/HeroCamera'
import Button from '../components/Button'
import Style from '../components/Style'
import Site from '../components/Site'
const Hero = () => {
  const isMobile = useMediaQuery( {maxWidth: 768} )
  const isTablet = useMediaQuery( {maxWidth: 1024, minWidth:768} )

  return (
    <section className="min-h-screen w-full flex flex-col relative " id="home">
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
            <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">Hi, I'm Francesco <span className="waving-hand">👋</span></p>
            <p className="hero_tag text-gray_gradient">
                Creative Developer
            </p>
        </div>
        <div className="w-full h-full absolute inset-0 ">
        <Canvas className="w-full h-full ">
            <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0,0,30]}/>
            <HeroCamera>
            <Computer position={[0.0, isMobile ? -1 : isTablet ? -2.5 : -8.1, isMobile? 5 : 0.5]}
            rotation={[-3.0, -1.6, -3.4]}
            scale={isMobile ? 1.5 : isTablet ? 2.1 : 3.4}/>
            </HeroCamera>
              <group>
              <Target position={[isMobile ? -4 : isTablet ? -4 : -11, isMobile ? 3 : isTablet ? 0.5 : -2, 0]} scale={isMobile ? 0.3 : isTablet ? 0.4 : 0.5} />
             <Style position={[isMobile ? 4 : isTablet ? -4 : 15, isMobile ? -8 : isTablet ? 0.5 : 0, 0]} scale={isMobile ? 0.00035 : isTablet ? 0.4 : 0.0005}/>
             
            </group>
            <ambientLight intensity={1}/>
            <directionalLight position={[11,14,-7]} intensity={4.5}/>
            </Suspense>
        </Canvas>
        </div>
        <div className="absolute bottom-2 left-0 right-0 w-full z-10 c-space">
        <a href="#contact" className="w-fit">
        <Button name="Let's work" isBeam
        containerClass="sm:w-fit w-full sm:min-w-96"  />
        </a>

        </div>
    </section>
  )
}

export default Hero