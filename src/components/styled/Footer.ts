import styled from "styled-components";
import { type IFooter } from "../../models/IFooter";

const FooterContainer = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'isOpen'
})<IFooter>`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    height: max-content;
    width: 100%;
`

const LinkContainer = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'isOpen',
})<IFooter>`
    display: ${({ isOpen }) => (isOpen === true ? "flex" : "none")};
    align-items: center;
    position: relative;
    width: 50%;
`

const Link = styled.a`

    cursor: pointer;
    text-align: center;
    font-size: 1rem;
    text-decoration: none;
    color: black;
    
    transition: all 0.3s ease-in;

    p {
        margin: 1rem;
        width: max-content;
    }
`

const InfoContainer = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'isOpen',
})<IFooter>`
    display: ${({ isOpen }) => (isOpen === true ? "flex" : "none")};
    flex-direction: column;
    align-items: end;
    position: relative;
    width: 50%;

    p {
        font-size: 0.80rem;
        margin: 0px 1rem 0px 1rem;
        width: max-content;
    }
`

const OptionsContainer = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'isOpen',
})<IFooter>`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    height: 10%;
    width: 100%;
`

const OptionsButton = styled.div`
    height: 25px;
    width: 25px;
    border: 2px solid black;
    border-radius: 50%;
    cursor: pointer;
`

const MainContainer = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'isOpen',
})<IFooter>`
    display: ${({ isOpen }) => (isOpen === true ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    position: relative;
    height: 100%;
    width: 100%;    
`

const EmptyContainer = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'isOpen',
})<IFooter>`
    display: ${({ isOpen }) => (isOpen === true ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    position: relative;
    width: 2.5%;
`

export {
    FooterContainer,
    LinkContainer,
    Link,
    InfoContainer,
    OptionsContainer,
    OptionsButton,
    MainContainer,
    EmptyContainer
}