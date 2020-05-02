import styled from "styled-components";

const Form = styled.form`
    padding: 20px;
    @media  screen and (min-width:1024px) {
        display:flex;
        flex-direction: column;
        align-items: center;
    }

    input[type="text"]{
        width: 100%;
        padding: 10px;
        margin: 6px 0;
        box-sizing: border-box;
        background-color: ${props => props.color.bg};
        color: #edd7cc;
        border: 0;
        @media  screen and (min-width:1024px) {
            width:70%;
        }
        @media  screen and (min-width:1280px) {
            width:60%;
        }
    }
    
    button{
        margin: 10px auto;
        background-color: ${props => props.color.btn};
        border: 0;
        padding: 6px 20px;
        display: block;
        outline: none;
        cursor: pointer;
    }
` ;

export default Form