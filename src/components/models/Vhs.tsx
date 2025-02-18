import DraggableRigidBody, { DraggableRigidBodyProps } from '../DraggableRigidBody';
import React, { useMemo, useRef } from 'react';
import { GroupProps, useFrame, useLoader } from '@react-three/fiber';
import { useGLTF, Instances, Instance } from '@react-three/drei';
import { generatedPositions } from '../ContainerModel';
import { GLTF } from 'three-stdlib';
import * as THREE from 'three';

type GLTFResult = GLTF & {
  nodes: {
    vhs: THREE.Mesh
  }
  materials: {
    ['Material.004']: THREE.MeshBasicMaterial
  }
}

type VhsModelProps = JSX.IntrinsicElements['group'] & {
  texturesSrc: string[];
  draggableRigidBodyProps: Partial<DraggableRigidBodyProps>;
  groupProps: GroupProps;
};

export const VhsModel = React.forwardRef<any, VhsModelProps>(({ texturesSrc, draggableRigidBodyProps, groupProps, ...props }, ref) => {
  const { nodes, materials } = useGLTF('/models-transformed/vhs-transformed.glb') as GLTFResult;
  const textures = useLoader(THREE.TextureLoader, texturesSrc);
  const instances = useRef<THREE.InstancedMesh>(null);
  const meshRefs = useMemo(() => texturesSrc.map(() => React.createRef<THREE.Group>()), [texturesSrc]);
  const geometry = useMemo(() => new THREE.BoxGeometry(1.05, 1.01, .5), []);
  const material = useMemo(() => new THREE.MeshStandardMaterial({ visible: false }), []);

  useFrame(() => {
    if (!instances.current) return;

    instances.current.children
      .filter(instance => !!(instance as any).instance)
      .forEach((instance, i) => {
        const p = new THREE.Vector3();
        const r = new THREE.Quaternion();

        if (meshRefs[i]?.current) {
          meshRefs[i].current?.getWorldPosition(p);
          meshRefs[i].current?.getWorldQuaternion(r);
        }

        instance.setRotationFromQuaternion(r);
        instance.rotateX(-Math.PI / 2);
        instance.position.set(p.x, p.y, p.z);
      });
  });

  return (
    <Instances ref={instances}>
      <bufferGeometry {...nodes.vhs.geometry} />
      <meshBasicMaterial {...materials['Material.004']} />
      {textures.map((texture, i) => (
        <React.Fragment key={`texture-${i}`}>
          <Instance rotation={[-Math.PI / 2, 0, 0]} scale={[2.236, 0.291, 1.2355]} />
          <DraggableRigidBody
            key={`cd${i}`}
            {...draggableRigidBodyProps}
            groupProps={{ position: generatedPositions[9 + 7 + i], ...groupProps }}
            rigidBodyProps={{ colliders: 'cuboid' }}
            enableSpringJoint={true}
            visibleComponentRef={meshRefs[i]}
            visibleMesh={
              <group ref={meshRefs[i]} {...props} dispose={null}>
                <mesh scale={[8.4 / 2, 4.7 / 2, 3 / 2]} geometry={geometry} material={material} />
                <mesh position={[0, -.14, .3]} scale={1.8} rotation={[0, 0, Math.PI / 2]}>
                  <planeGeometry args={[.64, 1.1]} />
                  <meshBasicMaterial map={texture} />
                </mesh>
              </group>
            }
          />
        </React.Fragment>
      ))}
    </Instances>
  );
});

useGLTF.preload('/models-transformed/vhs-transformed.glb');