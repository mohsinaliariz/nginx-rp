import styled, { css } from 'styled-components'
import { popOut } from '../common/sharedStyles'
import { DotsLoader } from '../Loader/style'

type PageWrapperStyledProps = {
    isMobileOnly?: boolean
}

export const PageWrapperStyled = styled.section<PageWrapperStyledProps>`
    position: relative;
    height: inherit;
    width: inherit;
    padding: ${(props) => (props.isMobileOnly ? null : '60px')};
    text-align: center;

    ${(props) =>
        props.isMobileOnly
            ? css`
                  ${DotsLoader} {
                      span {
                          width: 25px !important;
                          height: 25px !important;
                      }
                  }
              `
            : null}
`
export const BackgroundImg = styled.img`
    position: absolute;
    object-fit: cover;
    z-index: -1;
    left: 0;
    right: 0;
    top: 0;
    margin: auto;
    height: 100%;
    width: 100%;
`
export const FooterLogo = styled.div<PageWrapperStyledProps>`
    position: absolute;
    bottom: 6.25%;
    right: 5.5%;

    img {
        width: ${(props) => (props.isMobileOnly ? '55px' : '100px')};
    }
`

export const MobileAlertContainerStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        font-size: 18px;
        color: white;
        -webkit-animation: ${popOut} 0.4s ease;
        animation: ${popOut} 0.4s ease;
    }
`
