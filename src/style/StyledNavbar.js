import Styled from 'styled-components'
import { Colors } from './GlobalStyle'

export const StyledNavbar = Styled.div`


width: 100%;
height: 80px;
display: flex;
position: fixed;
z-index: 5000;

ul {
    list-style: none;
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 100px;
    color: ${(props) => (!props.aboutActive ? Colors.black : 'white')};
    cursor: pointer;
}

.logo {
    width: 60%;
    display: flex;
    align-items: center;
    padding-left: 100px;
}

a {
    text-decoration: none;
    color: ${(props) => (!props.aboutActive ? Colors.black : 'white')};
    border-bottom: 2px solid transparent;
    transition: .5s ease all;
}

a:hover {
    border-bottom: 2px violet solid;
    transition: .5s ease all;
}

:hover {
    background: ${(props) => (props.aboutActive ? Colors.black : 'white')};
}

`
