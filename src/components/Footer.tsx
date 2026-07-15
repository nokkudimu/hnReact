import { useState } from "react";
import { FooterContainer, LinkContainer, Link, EmptyContainer, InfoContainer, OptionsContainer, OptionsButton, MainContainer } from "./styled/Footer.ts";

function Footer() {

  const [isOpen, setIsOpen] = useState(true);

  return (
    <FooterContainer isOpen={isOpen}>
      <OptionsContainer isOpen={isOpen}>
        <OptionsButton onClick={() => setIsOpen(!isOpen)}/>  
      </OptionsContainer>
      <MainContainer isOpen={isOpen}>
        <LinkContainer isOpen={isOpen}>
          <Link><p>link 1</p></Link>
          <Link><p>link 2</p></Link>
          <Link><p>link 3</p></Link>
        </LinkContainer>
        <LinkContainer isOpen={isOpen}>
          <Link><p>link 4</p></Link>
          <Link><p>link 5</p></Link>
          <Link><p>link 6</p></Link>
        </LinkContainer>
        <EmptyContainer isOpen={isOpen}/> 
        <InfoContainer isOpen={isOpen}>
          <p>info 1</p>
          <p>info 2</p>
          <p>info 3</p>
          <p>info 4</p>
          <p>info 5</p>
          <p>info 6</p>
          <p>info 7</p>
          <p>info 8</p>
        </InfoContainer>
      </MainContainer>    
    </FooterContainer>
  )
}

export default Footer