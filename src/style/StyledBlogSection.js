import Styled from 'styled-components'
import { Colors } from './GlobalStyle'
import Waves from '../assets/images/waves.jpg'
import Silence from '../assets/images/silence.jpg'
import Freedom from '../assets/images/freedom.jpg'

export const StyledBlogSection = Styled.div`

width: 100vw;
background: white;
margin-top: 400px;
position: relative;

.title {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;

}


.lineDiv {
    position: relative;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .circle {
        width: 9px;
        height: 9px;
        background: violet;
        border-radius: 50%;
        margin-bottom: 15px;
        position: absolute;
        bottom: 130%;
        transition: .3s ease all;
    }

    .line {
        width: 1px;
        height: 400px;
        background: ${Colors.black};
    }   
}

.lineDiv2 {
    margin-top: 0;
}

.blog-title {

    width: 100%;
    height: 30px;
    margin: 20px 0;
    p {
        width: 50%;
        margin-left: auto; 
        font-size: 40px;
        cursor: pointer;
        font-weight: 400;
    }

    .p-left {
        margin-left: unset;
        margin-right: auto;
        text-align: right;
    }
}

.image-div {
    position: absolute;
    width: 600px;
    height: 400px;
    z-index: -1;
    cursor: pointer;
    background-size: cover;
    opacity: .8;
    
  
}

.image1 {
    top: 7%;
    right: 0;
    background: url(${Silence}) no-repeat;
    background-size: cover;
    background-position: center;
}

.image2 {
    top: 27%;
    left: 0;
    background: url(${Freedom}) no-repeat;
    background-position: center;
    background-size: cover;
}


.image3 {
    top: 45%;
    right: 0;
    background: url(${Waves}) no-repeat;
    background-position: center;
    background-size: cover;

}

.quote-div {
    position: absolute;
    top: 20%;
    left: 100px;
    font-size: 30px;
    color: ${Colors.black};
}

.bottom-quote {
    width: 100%;
    height: 300px;
    position: absolute;
    bottom: 7%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .quote {
        p {
            font-size: 35px;
            color: ${Colors.black};
        }
    }
}
`
