import { useState } from 'react';
import { Logo, LinksContainer, Link, NavContainer, OptionsButton, LogoContainer, OptionsContainer } from './styled/NavBar.ts';

function NavBar() {

  const [isOpen, setIsOpen] = useState(true)
    
  return (
    <NavContainer isOpen={isOpen}>
      <LogoContainer isOpen={isOpen}>
          <Logo alt='logo' />
      </LogoContainer>
      <LinksContainer isOpen={isOpen}>
        <Link><p>link 1</p></Link>
        <Link><p>link 2</p></Link>
        <Link><p>link 3</p></Link>
        <Link><p>link 4</p></Link>
        <Link><p>link 5</p></Link>
        <Link><p>link 6</p></Link>
      </LinksContainer>
      <OptionsContainer isOpen={isOpen}>
          <OptionsButton onClick={() => setIsOpen(!isOpen)} />
      </OptionsContainer>
    </NavContainer>
  )
}

export default NavBar