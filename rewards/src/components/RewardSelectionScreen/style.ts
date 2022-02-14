import styled, { css } from 'styled-components'
import { ButtonStyled, MainHeadingStyled } from '../common/sharedStyles'

type RewardSelectionScreenStyledProps = {
    isMobileOnly?: boolean
    itemCount?: number
}

const mobileStyle = (itemCount) => {
    return css`
        row-gap: 5px;

        ${MainHeadingStyled} {
            font-size: 19px;
        }

        ${ButtonStyled} {
            font-size: 19px;
            padding-top: 10px;
            padding-bottom: 10px;
            width: 60%;
            margin-bottom: 0;
        }

        @media (min-height: 800px) {
            ${itemCount < 5 ? 'height: calc(100vh - 190px);' : null}
        }
    `
}

export const RewardSelectionScreenStyled = styled.div<RewardSelectionScreenStyledProps>`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;
    justify-items: center;
    height: calc(100vh - 120px);

    ${(props) => (props.isMobileOnly ? mobileStyle(props.itemCount || 0) : null)}
`
