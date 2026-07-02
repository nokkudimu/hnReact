import styled from 'styled-components';
import { type INavBar } from '../../models/INavBar';

const NavContainer = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'isOpen',
})<INavBar>`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    height: 100px;
    width: ${({ isOpen }) => (isOpen === true ? "100%" : "10%")};
`
 
const LinksContainer = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'isOpen',
})<INavBar>`
    display: ${({ isOpen }) => (isOpen === true ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    position: relative;
    width: 80%;
`

const Link = styled.a`
    padding: 0rem 2rem;
    cursor: pointer;
    text-align: center;
    font-size: 1rem;
    text-decoration: none;
    color: black;
    transition: all 0.3s ease-in;

    p {
        width: max-content;
    }
    
`

const OptionsContainer = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'isOpen',
})<INavBar>`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: ${({ isOpen }) => (isOpen === true ? "10%" : "100%")};
`

const OptionsButton = styled.div`
    height: 25px;
    width: 25px;
    border: 2px solid black;
    border-radius: 50%;
    cursor: pointer;
`

const LogoContainer = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'isOpen',
})<INavBar>`
    display: ${({ isOpen }) => (isOpen === true ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    position: relative;
    width: 10%;
`

const Logo = styled.img`

`

export {
    NavContainer,
    LinksContainer,
    Link,
    OptionsContainer,
    OptionsButton,
    LogoContainer,
    Logo
}