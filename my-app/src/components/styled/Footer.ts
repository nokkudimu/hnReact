import styled from "styled-components";
import { type IFooter } from "../../models/IFooter";

const FooterContainer = styled.div<IFooter>`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
`

export {
    FooterContainer,
}