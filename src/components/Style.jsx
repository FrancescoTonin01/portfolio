import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { Float } from '@react-three/drei'
const Style = (props) => { 
      const { nodes, materials } = useGLTF('/models/style.glb')
  return (
    <group {...props} >
        <Float         
        floatIntensity={1}        // Intensità fluttuazione
        rotationIntensity={5}   // Rotazione molto leggera
        speed={2}                 // Velocità del movimento 
        >
        <group rotation={[-Math.PI / 2, 0, -1.578]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[20.789, 136.746, 10.172]} rotation={[Math.PI / 2, 0, 0]} scale={0.4}>
            <group position={[326.27, 35.487, 1926.616]}>
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_7.geometry}
                material={materials['Material.002']}
              />
              <mesh
                castShadow
                receiveShadow
                geometry={nodes.Object_8.geometry}
                material={materials['Material.003']}
              />
            </group>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_5.geometry}
              material={materials['Material.005']}
              position={[-142.941, -32.748, -5922.869]}
              rotation={[-Math.PI / 2, Math.PI / 2, 0]}
              scale={100}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_10.geometry}
              material={materials['Material.001']}
              position={[-182.684, 35.487, 1926.616]}
            />
          </group>
        </group>
      </group>
      </Float>
      
    </group>
  )
}

useGLTF.preload('/models/style.glb')

export default Style;