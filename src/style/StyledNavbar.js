import Styled from 'styled-components'
import { Colors } from './GlobalStyle'

export const StyledNavbar = Styled.div`


width: 100%;
height: 80px;
display: flex;
position: fixed;
transition: .5s ease all;
z-index: 5000;

ul {
    list-style: none;
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 100px;
    color: ${Colors.black};
    cursor: pointer;
}

.logo {
    width: 60%;
    display: flex;
    align-items: center;
    padding-left: 100px;
    color: ${Colors.black};
}

:hover {
    background: white;
}

`
