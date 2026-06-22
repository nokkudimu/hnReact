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
// changing the direction of an options arrow 180 degrees
// need to create a svg arrow
const OptionsButton = styled.div<INavBar>`

`
// hiding/revealing menu links 
const Menu = styled.div<INavBar>`

`

export {
    NavContainer,
}