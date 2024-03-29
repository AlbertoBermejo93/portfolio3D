import React from 'react'
import styled from 'styled-components'

const Section = styled.div`
    display:flex;
    justify-content:center;

    @media only screen and (max-width: 768px ) {
        width: 100%;
    }
`;
const Container = styled.div`
    width: 1400px;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0px;

    @media only screen and (max-width: 768px ) {
        width: 100%;
        padding: 10px;
    }
`;
const Links = styled.div`
    display:flex;
    align-items: end;
    gap: 50px;
`;
const Logo = styled.img`
    display:flex;
    align-items: end;
    height:50px;
`;
const List = styled.ul`
    display:flex;
    gap:20px;
    list-style:none;

    @media only screen and (max-width: 768px ) {
        display: none;
    }
`;
const ListItem = styled.li`
   
`;

const ListLink = styled.a`
    text-decoration: none;
`;
const Icons = styled.div`
    display:flex;
    align-items: center;
    gap: 20px;
    
`;
const Icon = styled.img`
    widht: 20px;
    cursor:pointer;
`;
const Button = styled.button`
    widht: 100px;
    padding: 10px;
    background-color: #da4ea2;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const Navbar = () => {
  return (
    <Section>
        <Container>
            <Links>
            <Logo src="./img/WhiteLogo.png"/>
            <List>
                <ListItem><a href="#Home">Accueil</a></ListItem>
                <ListItem><a href="#Studio">Studio</a></ListItem>
                <ListItem><a href="#Work">Services</a></ListItem>
                
            </List>
            </Links>
            <Icons>
                <Icon scr="./img/search.png"></Icon>
                <Button><a href="#Contact">Contact</a></Button>
            </Icons>
        </Container>
    </Section>
  )
}

export default Navbar