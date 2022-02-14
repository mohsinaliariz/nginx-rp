import { rewardItemType } from '../../../types'
import { RewardItemImageStyled, RewardItemNestedImageStyled, RewardItemsContainerStyled, RewardItemStyled } from './style'

type RewardItemsContainerProps = {
    items: rewardItemType[]
    startAnimation: boolean
}
export const RewardItemsContainer = (props: RewardItemsContainerProps) => {
    const { items, startAnimation = false } = props

    return (
        <RewardItemsContainerStyled itemCount={items.length} id="rp-desktop-listing">
            {items.map((item, index) => (
                <RewardItemStyled
                    key={index + 1}
                    className={`${startAnimation ? 'animate' : ''} item-${index + 1} ${item.secondary_image ? 'nested' : ''}`}
                    id="rp-desktop-item"
                >
                    <RewardItemImageStyled id="rp-desktop-item-image-box">
                        <img src={item.image} />
                    </RewardItemImageStyled>
                    {item.secondary_image && (
                        <RewardItemNestedImageStyled id="rp-desktop-item-nested-image-box">
                            <img src={item.secondary_image} />
                        </RewardItemNestedImageStyled>
                    )}
                </RewardItemStyled>
            ))}
        </RewardItemsContainerStyled>
    )
}
