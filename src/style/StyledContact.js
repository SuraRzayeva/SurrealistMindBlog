import Styled from 'styled-components'
import { Colors } from './GlobalStyle'

export const StyledContact = Styled.div`

padding-top: 100px;
animation: appear 3s 1 ease forwards;
min-height: 100vh;
background: ${Colors.black};

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
