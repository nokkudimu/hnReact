import { useState } from 'react';
import { NavContainer } from './styled/NavBar.ts';

function NavBar() {
    const [isOpen, setIsOpen] = useState(true)

  return (
    <NavContainer>
        NavBar
    </NavContainer>
  )
}

export default NavBar