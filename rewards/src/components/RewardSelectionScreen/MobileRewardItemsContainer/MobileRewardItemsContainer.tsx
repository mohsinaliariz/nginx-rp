import { rewardItemType } from '../../../types'
import {
    MobileRewardItemImageStyled,
    MobileRewardItemNestedImage,
    MobileRewardItemsContainerStyled,
    MobileRewardItemStyled
} from './style'

type MobileRewardItemsContainerProps = {
    items: rewardItemType[]
    startAnimation: boolean
}
export const MobileRewardItemsContainer = (props: MobileRewardItemsContainerProps) => {
    const { items, startAnimation = false } = props

    return (
        <MobileRewardItemsContainerStyled
            className={startAnimation ? 'animate' : undefined}
            itemCount={items.length}
            id="rp-mobile-listing"
        >
            {items.map((item, index) => (
                <MobileRewardItemStyled
                    key={index + 1}
                    className={item.secondary_image ? 'nested' : undefined}
                    id="rp-mobile-item"
                >
                    <MobileRewardItemImageStyled id="rp-mobile-item-image-box">
                        <img src={item.image} />
                    </MobileRewardItemImageStyled>
                    {item.secondary_image && (
                        <MobileRewardItemNestedImage id="rp-mobile-item-nested-image-box">
                            <img src={item.secondary_image} />
                        </MobileRewardItemNestedImage>
                    )}
                </MobileRewardItemStyled>
            ))}
        </MobileRewardItemsContainerStyled>
    )
}
