import styled, { keyframes } from 'styled-components'

const moveCenter = (itemCount) => {
    return keyframes`
    from {
        column-gap: 20px;
        row-gap: 5px;
        margin: auto;
        height: 100%;
        opacity: 1;
    }
    to {
        column-gap: 0px;
        row-gap: 0px;
        margin: auto;
        height: ${itemCount < 5 ? '100%' : '50%'};
        opacity: 0;
    }
    `
}

type MobileRewardItemsContainerStyledProps = {
    itemCount: number
}

export const MobileRewardItemsContainerStyled = styled.div<MobileRewardItemsContainerStyledProps>`
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    column-gap: 20px;
    row-gap: 5px;
    justify-content: center;
    align-items: center;

    &.animate {
        -webkit-animation: ${moveCenter((props) => props.itemCount)} 1.7s infinite ease-in-out both alternate;
        animation: ${moveCenter((props) => props.itemCount)} 1.7s infinite ease-in-out both alternate;
    }
`

export const MobileRewardItemStyled = styled.div`
    background: white;
    height: 100px;
    padding: 15px;
    border-radius: 50%;
    width: 100px;
    position: relative;

    &.nested {
        background: #f5f5f5;
    }
`

export const MobileRewardItemImageStyled = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 50%;

    img {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
`

export const MobileRewardItemNestedImage = styled.div`
    position: absolute;
    background: white;
    padding: 10px;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    overflow: hidden;
    top: -25px;
    left: -22px;

    img {
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
`
