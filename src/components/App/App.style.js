import styled from "styled-components";

const AppStyle = styled.div`
    background: ${ props => props.color.appBg };
    margin: 0;
    max-width: 100%;
    min-height: 100vh;
    color: #eee;
`;

export default AppStyle