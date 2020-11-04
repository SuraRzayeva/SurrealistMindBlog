import Styled from 'styled-components'
import { Colors } from './GlobalStyle'
import YellowStroke from '../assets/images/yellowstroke.jpg'
import Hands from '../assets/images/hands.jpg'
export const StyledLandingPage = Styled.div`

min-height: 100vh;
position: relative;
transition: .5s ease all;
animation: appear 3s 1 ease forwards;

.hero {
    position: absolute;
    top: 30%;
    left: 100px;
    color: ${Colors.black};
    z-index: 10;

    h1 {
        font-size: 90px;
        margin-bottom: 20px;
    }
    p {
        font-size: 25px;
    }
}


.image-1 {
    width: 550px;
    height: 670px;
    position: absolute;
    top: 64%;
    left: 0;
    background: url(${YellowStroke}) no-repeat;
    background-size: cover;
    background-position: center;

}

.image-2 {
    width: 550px;
    height: 600px;
    position: absolute;
    top: 50%;
    right: 0;
    background: url(${Hands}) no-repeat;
    background-size: cover;
    background-position: center;

}



@keyframes appear {
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
}


@keyframes disappear {
    from {
        opacity: 1;
    } to {
        opacity: 0;
    }
}
`
