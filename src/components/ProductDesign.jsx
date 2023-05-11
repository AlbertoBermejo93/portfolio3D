import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import styled from "styled-components";
import Chips from "./Chips";

const Desc = styled.div`
  width: 200px;
  height: 130px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  bottom: 200px;
  right: 100px;
  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const ProductDesign = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Chips/>
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
      <Desc>
      Nos concepteurs de produits qualifiés produisent constamment des designs captivants qui bouleversent les tendances. Notre mission finale est d'élever les idées de nos clients et de les amener au niveau supérieur.
      </Desc>
    </>
  );
};

export default ProductDesign;