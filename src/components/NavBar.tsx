import { useState } from 'react';
import { Logo, LinkContainer, Link, NavContainer, LogoContainer } from './styled/NavBar.ts';
import { useNavigate } from 'react-router-dom';
import { ABOUT_ROUTE, COLLAB_ROUTE, CONTACTS_ROUTE, DEFAULT_ROUTE, LOCATIONS_ROUTE, SHOP_T_ROUTE } from '../utils/consts.ts';

function NavBar() {

  const [isOpen, setIsOpen] = useState(true)
  const navigate = useNavigate()

  return (
    <NavContainer isOpen={isOpen}>
      <LogoContainer isOpen={isOpen}>
          <Logo alt='logo' onClick={() => setIsOpen(!isOpen)} />
      </LogoContainer>
      <LinkContainer isOpen={isOpen}>
        <Link><p onClick={() => navigate(DEFAULT_ROUTE)}>link 0</p></Link>
        <Link><p onClick={() => navigate(ABOUT_ROUTE)}>link 1</p></Link>
        <Link><p onClick={() => navigate(SHOP_T_ROUTE)}>link 2</p></Link>
        <Link><p onClick={() => navigate(COLLAB_ROUTE)}>link 3</p></Link>
        <Link><p onClick={() => navigate(LOCATIONS_ROUTE)}>link 4</p></Link>
        <Link><p onClick={() => navigate(CONTACTS_ROUTE)}>link 5</p></Link>
      </LinkContainer>
    </NavContainer>
  )
}

export default NavBar