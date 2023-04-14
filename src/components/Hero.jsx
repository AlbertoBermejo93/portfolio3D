import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display:flex;
  flex-direction: column;
  align-item: center;
  justify-content:space-between;
`
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content; space-between;
`
const Left = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content; space-between;
`
const Right = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content; space-between;
`

const Hero = () => {
  return (
    <Section>
      <Navbar/>
      <Container>
        <Left>
          <Title>Think.Make.Solve.</Title>
          <WhatWeDo>
            <Line src="./img/line.png"/>
            <Subtitle>What we Do</Subtitle>
          </WhatWeDo>
        </Left>
        <Right></Right>
      </Container>
    </Section>
  )
}

export default Hero