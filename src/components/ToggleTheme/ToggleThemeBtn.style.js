import styled from "styled-components";

const Button = styled.button`
    background: ${props => props.color.btn};
    border: 0;
    padding: 6px 20px;
    cursor: pointer;
    outline: none;
    color: #fff;
`;

export default Button