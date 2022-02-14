import { useRewardsContext } from '../../context/RewardsContextProvider'
import { RewardSelectedScreen } from '../RewardSelectedScreen/RewardSelectedScreen'
import { RewardSelectionScreen } from '../RewardSelectionScreen/RewardSelectionScreen'
import { RewardScreenStyled } from './style'

export const RewardScreen = () => {
    const {
        state: { isRewardSelected, isMobileOnly }
    } = useRewardsContext()

    return (
        <RewardScreenStyled id="rp-reward-screen" isMobileOnly={isMobileOnly}>
            {isRewardSelected ? <RewardSelectedScreen /> : <RewardSelectionScreen />}
        </RewardScreenStyled>
    )
}
