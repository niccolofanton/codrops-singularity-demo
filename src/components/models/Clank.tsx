/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.2 clank.glb -t -T 
Files: clank.glb [1.45MB] > /Users/fant/work/personal-blog/public/models/clank-transformed.glb [106.61KB] (93%)
*/

import * as THREE from 'three'
import React from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    clank: THREE.Mesh
  }
  materials: {
    blinn1: THREE.MeshStandardMaterial
  }
  animations: any[]
}

export const ClankModel = React.forwardRef<THREE.Group, JSX.IntrinsicElements['group']>((props, ref) => {
  const { nodes, materials } = useGLTF('/models-transformed/clank-transformed.glb') as GLTFResult
  return (
    <group ref={ref} {...props} dispose={null}>
      <mesh geometry={nodes.clank.geometry} material={materials.blinn1}   />
    </group>
  )
})

useGLTF.preload('/models-transformed/clank-transformed.glb')
