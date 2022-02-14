import styled, { keyframes } from 'styled-components'

const dots5 = keyframes`
0% {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
    background: #ffffff;
}
25% {
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
    background: #d6d6d6;
}
50% {
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
    -webkit-transform: translateY(10px);
    transform: translateY(10px);
    background: #032c70;
}
100% {
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
    background: #0d274d;
}
`

export const DotsLoader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    height: 100%;
    width: 100%;

    span {
        width: 40px;
        height: 40px;
        margin-right: 15px;
        background: rgba(0, 0, 0, 0.25);
        border-radius: 50%;
        -webkit-animation: ${dots5} 0.7s infinite ease-in-out;
        animation: ${dots5} 0.7s infinite ease-in-out;
    }

    span:nth-child(1) {
        -webkit-animation-delay: 0.1s;
        animation-delay: 0.1s;
    }

    span:nth-child(2) {
        -webkit-animation-delay: 0.2s;
        animation-delay: 0.2s;
    }

    span:nth-child(3) {
        -webkit-animation-delay: 0.3s;
        animation-delay: 0.3s;
    }

    span:nth-child(4) {
        -webkit-animation-delay: 0.4s;
        animation-delay: 0.4s;
    }
`
