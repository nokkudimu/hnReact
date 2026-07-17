import styled from 'styled-components';
import { type INavBar } from '../../models/INavBar';

const NavContainer = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'isOpen',
})<INavBar>`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 0;
    left: 0;
    height: 100px;
    width: 100%;
`
 
const LinkContainer = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'isOpen',
})<INavBar>`
    display: ${({ isOpen }) => (isOpen === true ? "flex" : "none")};
    justify-content: flex-end;
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

const LogoContainer = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'isOpen',
})<INavBar>`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    width: ${({ isOpen }) => (isOpen === true ? "20%" : "100%")};
`

const Logo = styled.img`
    cursor: pointer;
`

export {
    NavContainer,
    LinkContainer,
    Link,
    LogoContainer,
    Logo
}