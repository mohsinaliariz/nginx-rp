import styled, { keyframes } from 'styled-components'

export const popOut = keyframes`
from {
    -webkit-transform: scale(0);
    transform: scale(0);
}
80% {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
to {
    -webkit-transform: scale(1);
    transform: scale(1);
}
`

type ButtonStyledProps = {
    invisible?: boolean
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
    padding: 18px 45px 20px 40px;
    margin-bottom: 30px;
    border: 0;
    border-radius: 35px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background-color: #0d274d;
    color: #ffffff;
    font-family: 'CiscoSans', sans-serif;
    font-size: 23px;
    width: 25%;
    cursor: pointer;
    ${(props) => (props.invisible ? 'visibility: hidden;' : '')}
    outline: none;
`

export const MainHeadingStyled = styled.p`
    font-size: 39px;
    color: #ffffff;
    margin: 25px 0;
`

export const SubHeadingStyled = styled.p`
    color: #0d274d;
    font-size: 22px;
    margin: 0;
    -webkit-animation: ${popOut} 0.6s ease;
    animation: ${popOut} 0.6s ease;
`
