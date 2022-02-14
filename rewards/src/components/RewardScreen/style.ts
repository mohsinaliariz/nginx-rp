import styled, { css } from 'styled-components'

const mobileSpacing = css`
    padding: 20px 20px 0;
    @media (max-height: 630px) {
        padding: 0;
    }
`

type RewardScreenStyledProps = {
    isMobileOnly?: boolean
}

export const RewardScreenStyled = styled.div<RewardScreenStyledProps>`
    height: ${(props) => (props.isMobileOnly ? null : 'calc(100vh - 120px)')};
    width: ${(props) => (props.isMobileOnly ? null : 'calc(100vw - 120px)')};

    ${(props) => (props.isMobileOnly ? mobileSpacing : null)}
`
