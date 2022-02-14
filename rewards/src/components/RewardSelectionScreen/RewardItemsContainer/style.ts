import styled, { css, keyframes } from 'styled-components'
import { popOut } from '../../common/sharedStyles'

export const RewardItemNestedImageStyled = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    width: 140px;
    height: 140px;
    background-color: #ffffff;
    overflow: hidden;
    border-radius: 50%;
    left: -53%;
    top: -3%;
    opacity: 1;

    img {
        width: 95%;
        height: 80%;
        object-fit: contain;
    }
`

const oneItem = css`
    .item-1 {
        width: 250px;
        height: 250px;
        left: 0;
        right: 0;
        margin: auto;
        top: 0;
        bottom: 0;
        -webkit-animation: ${popOut} 0.6s ease;
        animation: ${popOut} 0.6s ease;
    }

    .nested-reward {
        left: 12%;
        background-color: #f5f5f5;

        ${RewardItemNestedImageStyled} {
            width: 150px;
            height: 150px;
            left: -45%;
            top: -3%;
        }
    }
`
const twoItems = css`
    .item-1 {
        width: 250px;
        height: 250px;
        bottom: 39.5%;
        left: 50.25%;
    }

    .item-2 {
        width: 210px;
        height: 210px;
        bottom: 15%;
        left: 20%;
    }
`
const threeItems = css`
    ${twoItems}
    .item-3 {
        width: 160px;
        height: 160px;
        bottom: 8.75%;
        left: 74.5%;
    }
`
const fourItems = css`
    ${threeItems}
    .item-4 {
        width: 160px;
        height: 160px;
        bottom: 62%;
        left: 29%;
    }
`
const fiveItems = css`
    ${fourItems}
    .item-5 {
        width: 155px;
        height: 155px;
        bottom: 4.75%;
        left: 48.75%;
    }
`
const sixItems = css`
    ${fiveItems}
    .item-6 {
        width: 175px;
        height: 175px;
        bottom: 66%;
        left: 4%;
    }
`

const itemsPositioning = (itemCount) => {
    switch (itemCount) {
        case 1:
            return oneItem
        case 2:
            return twoItems
        case 3:
            return threeItems
        case 4:
            return fourItems
        case 5:
            return fiveItems
        case 6:
            return sixItems
        default:
            return ''
    }
}

type RewardItemsContainerStyledProps = {
    itemCount: number
}

export const RewardItemsContainerStyled = styled.div<RewardItemsContainerStyledProps>`
    position: relative;
    width: 100%;

    ${(props) => itemsPositioning(props.itemCount)}
`

const moveCenter = keyframes`
to {
    bottom: 50%;
    left: 50%;
    -webkit-transform: translate(-20%, 50%);
    transform: translate(-20%, 50%);
    opacity: 0;
}
`

export const RewardItemStyled = styled.div`
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: #ffffff;
    border-radius: 50%;

    &.nested {
        background-color: #f5f5f5;
    }

    &.animate {
        -webkit-animation: ${moveCenter} 1.7s infinite ease-in-out both alternate;
        animation: ${moveCenter} 1.7s infinite ease-in-out both alternate;
    }
`

export const RewardItemImageStyled = styled.div`
    background: transparent;
    object-fit: contain;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 95%;
        height: 80%;
        margin: 15px 0;
        object-fit: contain;
    }
`
