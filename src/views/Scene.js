import React from 'react';

const Scene = () => {
    return(
        <mesh>
            <boxBufferGeometry attach="geometry" args={[1,1,1]}/>
            <meshNormalMaterial attach="material"/>
        </mesh>
    );
};