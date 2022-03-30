import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  html{
    scroll-behavior: smooth;
  }

  body {
    margin: 0px;
    padding: 0px;
    font-family: sans-serif;
  }

  p, h1, h2, h3, h4 {
    margin-bottom: 0;
  }

  button { 
    cursor: pointer;
  }

  ul, li {
    list-style-type: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
