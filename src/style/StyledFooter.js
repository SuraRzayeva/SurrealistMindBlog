import Styled from 'styled-components'
import { Colors } from './GlobalStyle'

export const StyledFooter = Styled.div`

width: 80%;
background: ${Colors.black};
height: 500px;
display: flex;

.column {
    width: 33.33%;
    height: 60%;
   display: flex;
   flex-direction: column;
   padding-left: 100px;
   justify-content: flex-end;

   ul {
       list-style: none;
       display: flex;
       li {
           margin-right: 10px;
           color: white;
           font-weight: 500;
           border-bottom: 1px transparent solid;
           transition: .5s ease all;
           cursor: pointer;
       }

       li:hover {
           border-bottom: 1px violet solid;
       }
   }

.section {
    .title {
        color: gray;
        margin-bottom: 10px;
        font-size: 14px;
    }
 
    .info {
        color: white;
        font-weight: 500;
    }

    .web {
        margin-top: 15px;
    }

    a {
        color: white;
        transition: .5s ease all;
        user-select: none;
    }

    a:hover {
        color: violet;
    }
}

.phone, .email{
    margin-bottom: 50px;
}



}

`
