import Styled from 'styled-components'
import Me from '../assets/images/me.jpg'
import { Colors } from './GlobalStyle'

export const StyledAboutMe = Styled.div`

padding-top: 100px;
animation: appear 3s 1 ease forwards;
min-height: 150vh;
width: 100vw;
position: relative;
background: ${Colors.black};

.img-div {
    background: url(${Me}) no-repeat;
    position: absolute;
    top: 50px;
    left: 10%;
    width: 500px;
    height: 500px;
    background-size: cover;
}

.text-div {
    width: 40%;
    position: absolute;
    top: 200px;
    left: 50%;
    background: ${Colors.black};
    padding: 30px;

    p {
        color: white;
        line-height: 30px;
        margin-bottom: 30px;
    }
}

.quote {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: 30px;
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
