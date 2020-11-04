import { createGlobalStyle } from 'styled-components'

export const Colors = {
  black: '#111',
}

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    background: ${(props) => (props.aboutActive ? Colors.black : 'white')};
}
`
