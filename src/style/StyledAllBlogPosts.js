import Styled from 'styled-components'
import { Colors } from './GlobalStyle'
import Waves from '../assets/images/waves.jpg'

export const StyledAllBlogPosts = Styled.div`

width: 100vw;
background: white;
padding-top: 100px;
position: relative;
// opacity: ${(props) => (props.blogActive ? '1' : '0')};

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
    top: -300px;
    left: 0;
    background: url(${Waves}) no-repeat;

}

.imageRight {
    top: -300px;
    right: 0;
    background: url(${Waves}) no-repeat;
}
.image1 {
    top: -250px;
    background: url(${Waves}) no-repeat;
}

.image2 {
    top: -300px;
    background: url(${Waves}) no-repeat;
}

.image3 {
    top: -350px;
    background: url(${Waves}) no-repeat;
}

.image4 {
    top: -450px;
    background: url(${Waves}) no-repeat;
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
