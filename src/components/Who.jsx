import React from 'react'
import styled from 'styled-components'
import { Box, MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';


const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;


const Right = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;
const Title = styled.h1`
  font-size: 74px;
  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;



const Who = () => {
  return (
    <Section>
      <Container>
        <Left>
        <Canvas camera={{fov: 25, position: [5,5,5]}}>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={1}/>
          <directionalLight position={[3,2,1]}/>
          <Box args={[1,1,1]} scale={1}>
            <meshNormalMaterial 
              color="#372557"
              attach="material"
            />
          </Box>
          </Canvas>
        </Left>
        <Right>
          <Title>Think Outside the square space</Title>
          <Subtitle>Who we are</Subtitle>
          <Desc>A creative group pf designer and developers with passion for the arts</Desc>
          <Button>See our work</Button>
        </Right>
      </Container>
    </Section>
  )
}

export default Who