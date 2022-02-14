import styled, { css } from 'styled-components'
import { MainHeadingStyled, SubHeadingStyled } from '../common/sharedStyles'
import {
    RewardItemNestedImageStyled,
    RewardItemsContainerStyled,
    RewardItemStyled
} from '../RewardSelectionScreen/RewardItemsContainer/style'
import { RewardSelectionScreenStyled } from '../RewardSelectionScreen/style'

const mobileStyle = css`
    ${MainHeadingStyled} {
        font-size: 26px;
    }
    ${SubHeadingStyled} {
        font-size: 20px;
    }
    ${RewardItemsContainerStyled} {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    ${RewardItemStyled} {
        position: relative;
        width: 180px;
        height: 180px;
    }
    .nested-reward {
        ${RewardItemNestedImageStyled} {
            width: 120px;
            height: 120px;
        }
    }
`

export const RewardSelectedScreenStyled = styled(RewardSelectionScreenStyled)`
    grid-template-rows: auto auto 1fr auto;

    ${(props) => (props.isMobileOnly ? mobileStyle : null)}
`
