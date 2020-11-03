import Styled from 'styled-components'

export const StyledNavbar = Styled.div`


width: 100%;
border: 1px solid gray;
height: 50px;
display: flex;
position: fixed;
transition: .3s ease all;


ul {
    list-style: none;
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-right: 100px;
}

.logo {
    width: 60%;
    display: flex;
    align-items: center;
    padding-left: 100px;
}

:hover {
    background: white;
}

`
