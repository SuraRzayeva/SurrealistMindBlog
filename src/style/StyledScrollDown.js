import Styled from 'styled-components'
import { Colors } from './GlobalStyle'
export const StyledScrollDown = Styled.div`


position: absolute;
top: 80%;
left: 50%;
transform: translateX(-50%);
transition: .5s ease all;

.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .circle {
        width: 9px;
        height: 9px;
        background: violet;
        border-radius: 50%;
        margin-bottom: 15px;
        position: absolute;
        bottom: 110%;
        transition: .5s ease all;
    }
    
    p {
        transform: rotate(-90deg);
   
    }
    
    .line {
        width: 1px;
        height: 70px;
        background: ${Colors.black};
        margin-top: 30px;
    }
}

:hover .circle{
    top: unset;
    bottom: -15px;
    transition: .5s ease all;
}

`
