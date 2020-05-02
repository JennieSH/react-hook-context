import styled from "styled-components";

const Nav = styled.nav`
    padding: 10px 20px;
    text-align: center;
    background: ${props => props.color.navBg};
    h1{
        margin: 10px 0;
    }
`;

export default Nav