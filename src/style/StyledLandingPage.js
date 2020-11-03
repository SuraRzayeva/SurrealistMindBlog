import Styled from 'styled-components'

export const StyledLandingPage = Styled.div`

min-height: 100vh;
border: 1px gray solid;
position: relative;

.hero {
    position: absolute;
    top: 30%;
    left: 100px;

    h1 {
        font-size: 70px;
        margin-bottom: 20px;
    }
    p {
        font-size: 30px;
    }
}
`
