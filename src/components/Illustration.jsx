import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import styled from "styled-components";
import Nerdbar from "./Nerdbar";

const Desc = styled.div`
  width: 200px;
  height: 160px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;
  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const Illustration = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Nerdbar />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
      <Desc>
      Notre équipe de designers talentueux excelle dans la création de designs captivants qui surpassent les normes du marché, tandis que notre approche collaborative assure l'implication du client tout au long du processus artistique, aboutissant à un résultat de projet réussi.
      </Desc>
    </>
  );
};

export default Illustration;