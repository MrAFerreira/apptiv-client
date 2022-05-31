import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: Avenir;
    width:390px;
    min-height:844px;
    display:flex;
    flex-flow:column wrap;
    align-items:center;
}
h1, h2, h3, h4, h5, h6{
font-family: Faro Variable Trial;
}
h1{
font-size: 2rem;
font-weight: 1000;
line-height: 3rem;
}


`;

export default GlobalStyle;
