import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #2a2e35;
        font-family: 'SF Pro Display', sans-serif;
    }

    button {
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        background: transparent;
        padding: 1rem 2rem;
        border: 3px solid #30BEE1;
        color: #fff;
        transition: all .25s linear;
        &:hover {
            background-color: #30BEE1;
            color: #2a2e35;
        }
    }

    h2 {
        font-weight: lighter;
        font-size: 3.5rem;
    }

    h3 {
        color: #fff;
    }

    h4 {
        font-weight: bold;
    }

    span {
        color: #30BEE1;
        font-weight: bold;
    }

    a {
        font-size: 1.1rem;
    }

    p {
        padding: 3rem 0;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }


`;

export default GlobalStyle;
