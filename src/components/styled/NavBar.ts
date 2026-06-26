import styled from 'styled-components';
import { type INavBar } from '../../models/INavBar';

const NavContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
`

// hiding/revealing menu links 
const LinksContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    width: 100%;
`

const Link = styled.a`
    padding: 0rem 1.5rem;
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

const OptionsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
`

const OptionsButton = styled.button`

`

const LogoContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
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