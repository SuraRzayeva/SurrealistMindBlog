import Styled from 'styled-components'
import { Colors } from './GlobalStyle'
import Waves from '../assets/images/waves.jpg'
import Silence from '../assets/images/silence.jpg'
import Freedom from '../assets/images/freedom.jpg'

export const StyledAllBlogPosts = Styled.div`

width: 100vw;
background: white;
padding-top: 100px;
position: relative;
animation: appear 3s 1 ease forwards;
transition: .5s ease all;

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
        bottom: 90%;
        transition: .3s ease all;
    }

    .line {
        width: 1px;
        height: 400px;
        background: ${Colors.black};
        margin-top: 30px;
    }   
}

.lineDiv2 {
    margin-top: 0;
}

.blog-title {
    position: relative;
    width: 100%;
    height: 30px;
    margin: 20px 0;

    a {
        color: ${Colors.black};
        text-decoration: none;
        transition: .5s all ease;
    }

    a:hover {
        color: violet;
    }

    p {
        width: 50%;
        margin-left: auto; 
        font-size: 40px;
        cursor: pointer;
        font-weight: 400;
    }

    .date {
        font-size: 15px;
    }

    .p-left {
        margin-left: unset;
        margin-right: auto;
        text-align: right;
    }

 
.image-div {
    position: absolute;
    width: 600px;
    height: 500px;
    z-index: -1;
    cursor: pointer;
    background-size: cover;
    opacity: .8;

}

.imageLeft {
    left: 0;
}

.imageRight {
    right: 0;
}

.image1 {
    top: -250px;
    background: url(${Silence}) no-repeat;
    background-size: cover;
    background-position: center;
}

.image2 {
    top: -300px;
    background: url(${Freedom}) no-repeat;
    background-size: cover;
    background-position: center;
}

.image3 {
    top: -350px;
    background: url(${Waves}) no-repeat;
    background-size: cover;
    background-position: center;
}

.image4 {
    top: -450px;
    background: url(${Waves}) no-repeat;
    background-size: cover;
    background-position: center;
}

}


.quote-div {
    position: absolute;
    top: 15%;
    left: 100px;
    font-size: 30px;
    color: ${Colors.black};
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
