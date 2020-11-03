import Styled from 'styled-components'

export const StyledSocialMedia = Styled.div`

position: absolute;
right: 100px;
top: 30%;
z-index: 1000;

ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    position: relative;
    cursor: pointer;
    z-index: 100;

    li {
        margin-bottom: 20px;
        font-size: 13px;
        transition: .3s ease all;
    }


    .circle {
        width: 9px;
        height: 9px;
        background: black;
        border-radius: 50%;
        position: absolute;
        left: -20px;
        transform: scale(0);
        transition: .5s ease all;
        top: ${(props) => props.top};
    }

    :hover .circle {
        transform: scale(1);
    }

 
  
}



`
