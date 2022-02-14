import { useCallback } from 'react'
import { RESET } from '../../constants'
import { useAnalyticsContext } from '../../context/AnalyticsContextProvider'
import { useRewardsContext } from '../../context/RewardsContextProvider'
import { ButtonStyled, MainHeadingStyled, SubHeadingStyled } from '../common/sharedStyles'
import { GetRequests } from '../GetRequests/GetRequests'
import {
    RewardItemImageStyled,
    RewardItemNestedImageStyled,
    RewardItemsContainerStyled,
    RewardItemStyled
} from '../RewardSelectionScreen/RewardItemsContainer/style'
import { RewardSelectedScreenStyled } from './style'

export const RewardSelectedScreen = () => {
    const {
        state: { reward, isMobileOnly },
        dispatch
    } = useRewardsContext()
    const { dispatchAnalyticsEvent } = useAnalyticsContext()
    const { getItems } = GetRequests()

    const handleReset = useCallback(() => {
        dispatch({
            type: RESET
        })
        setTimeout(() => {
            getItems()
        }, 500)
        dispatchAnalyticsEvent('REWARD_PICKER_RESET', { reward: reward.name })
    }, [reward])

    return (
        <RewardSelectedScreenStyled isMobileOnly={isMobileOnly} id="rp-selected-reward-screen">
            <MainHeadingStyled id="rp-selected-reward-heading">Congratulations!</MainHeadingStyled>
            <SubHeadingStyled id="rp-selected-reward-subheading">You&apos;ve won {reward.name}!</SubHeadingStyled>
            <RewardItemsContainerStyled itemCount={1} id="rp-selected-reward-item">
                <RewardItemStyled className={`item-1 ${reward.secondary_image ? 'nested-reward' : ''}`}>
                    <RewardItemImageStyled id="rp-selected-reward-item-image">
                        <img src={reward.image} />
                    </RewardItemImageStyled>
                    {reward.secondary_image && (
                        <RewardItemNestedImageStyled id="rp-selected-reward-item-nested-image">
                            <img src={reward.secondary_image} />
                        </RewardItemNestedImageStyled>
                    )}
                </RewardItemStyled>
            </RewardItemsContainerStyled>
            <ButtonStyled onClick={handleReset} id="rp-selected-reward-screen-button">
                Reset
            </ButtonStyled>
        </RewardSelectedScreenStyled>
    )
}
