import styled, { css } from  "styled-components";

const BookListStyle = styled.div`
    margin: 20px;

    ul{
        padding: 0;
        list-style-type: none;
        @media  screen and (min-width:1024px) {
            margin: 0 8rem;
        }
        @media  screen and (min-width:1280px) {
            margin: 0 12rem;
        }
    }
    li{
        background: ${props => props.color.listBg};
        border-radius: 4px;
        padding: 10px;
        cursor: pointer;
        margin: 10px 0;

        &:hover {
            opacity: 0.7;
            text-decoration: line-through;
            border: 1px solid #e3d7d1;
        }
    }

    ${props => props.empty && css`
        text-align: center;
    `}
    
`;

export default BookListStyle