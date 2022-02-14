import { useCallback, useState } from 'react'
import { useRewardsContext } from '../../context/RewardsContextProvider'
import { ButtonStyled, MainHeadingStyled } from '../common/sharedStyles'
import { GetRequests } from '../GetRequests/GetRequests'
import { RewardSelectionScreenStyled } from './style'
import { MobileRewardItemsContainer } from './MobileRewardItemsContainer/MobileRewardItemsContainer'
import { RewardItemsContainer } from './RewardItemsContainer/RewardItemsContainer'
import { useAnalyticsContext } from '../../context/AnalyticsContextProvider'

export const RewardSelectionScreen = () => {
    const {
        state: { items, isMobileOnly }
    } = useRewardsContext()
    const { dispatchAnalyticsEvent } = useAnalyticsContext()
    const { getReward } = GetRequests()
    const [startAnimation, setAnimation] = useState(false)

    const handleRewardSelection = useCallback(() => {
        setAnimation(true)
        setTimeout(() => {
            getReward()
        }, 1500)
        dispatchAnalyticsEvent('REWARD_PICKER_GET_STARTED')
    }, [])

    return (
        <RewardSelectionScreenStyled isMobileOnly={isMobileOnly} itemCount={items.length || 0} id="rp-listing-screen">
            <MainHeadingStyled id="rp-listing-screen-heading">Click below for your chance to win!</MainHeadingStyled>
            {items.length &&
                (isMobileOnly ? (
                    <MobileRewardItemsContainer items={items} startAnimation={startAnimation} />
                ) : (
                    <RewardItemsContainer items={items} startAnimation={startAnimation} />
                ))}
            <ButtonStyled onClick={handleRewardSelection} invisible={startAnimation} id="rp-listing-screen-button">
                Get Started
            </ButtonStyled>
        </RewardSelectionScreenStyled>
    )
}
