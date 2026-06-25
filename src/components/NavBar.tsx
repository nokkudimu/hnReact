import { useState } from 'react';
import { Logo, Links, Link, NavContainer, OptionsButton } from './styled/NavBar.ts';

function NavBar() {
    const [isOpen, setIsOpen] = useState(true)

  return (
    <NavContainer>
        <Logo alt='logo'/>
        <Links>
          <Link>link 1</Link>
          <Link>link 2</Link>
          <Link>link 3</Link>
          <Link>link 4</Link>
          <Link>link 5</Link>
          <Link>link 6</Link>       
        </Links>
        <OptionsButton>button</OptionsButton>
    </NavContainer>
  )
}

export default NavBar