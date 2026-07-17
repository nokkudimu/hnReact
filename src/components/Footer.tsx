import { useState } from "react";
import { FooterContainer, LinkContainer, Link, InfoContainer, OptionsContainer, OptionsButton, MainContainer, EmptyContainer } from "./styled/Footer.ts";
import { useNavigate } from "react-router-dom";
import { ABOUT_ROUTE, COLLAB_ROUTE, CONTACTS_ROUTE, LOCATIONS_ROUTE, SHOP_T_ROUTE } from "../utils/consts.ts";

function Footer() {

  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <FooterContainer isOpen={isOpen}>
      <OptionsContainer isOpen={isOpen}>
        <OptionsButton onClick={() => setIsOpen(!isOpen)}/>  
      </OptionsContainer>
      <MainContainer isOpen={isOpen}>
        <EmptyContainer isOpen={isOpen} />
        <LinkContainer isOpen={isOpen}>
          <Link><p onClick={() => navigate(ABOUT_ROUTE)}>link 1</p></Link>
          <Link><p onClick={() => navigate(SHOP_T_ROUTE)}>link 2</p></Link>
          <Link><p onClick={() => navigate(COLLAB_ROUTE)}>link 3</p></Link>
          <Link><p onClick={() => navigate(LOCATIONS_ROUTE)}>link 4</p></Link>
          <Link><p onClick={() => navigate(CONTACTS_ROUTE)}>link 5</p></Link>
        </LinkContainer>
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
        <EmptyContainer isOpen={isOpen} />
      </MainContainer>    
    </FooterContainer>
  )
}

export default Footer