import { useEffect, useRef } from 'react'
import themeConfigs from '../../configs'
import { SET_IS_MOBILE } from '../../constants'
import { useAnalyticsContext } from '../../context/AnalyticsContextProvider'
import { useRewardsContext } from '../../context/RewardsContextProvider'
import { GetRequests } from '../GetRequests/GetRequests'
import { Loader } from '../Loader/Loader'
import { RewardScreen } from '../RewardScreen/RewardScreen'

import { BackgroundImg, FooterLogo, PageWrapperStyled } from './style'

const PageWrapper = () => {
    const pageWrapperRef = useRef(null)
    const { background, logo } = themeConfigs
    const {
        state: { isLoading, isMobileOnly },
        dispatch
    } = useRewardsContext()
    const {
        state: { instance },
        dispatchAnalyticsEvent
    } = useAnalyticsContext()

    const { getItems } = GetRequests()

    useEffect(() => {
        if (pageWrapperRef.current && pageWrapperRef.current.clientWidth < 500) {
            dispatch({
                type: SET_IS_MOBILE,
                payload: true
            })
        }
        setTimeout(() => {
            getItems()
        }, 700)
    }, [])

    useEffect(() => {
        instance && dispatchAnalyticsEvent('REWARD_PICKER_PAGE_LOAD')
    }, [instance])

    return (
        <PageWrapperStyled id="rp-main-container" ref={pageWrapperRef} isMobileOnly={isMobileOnly}>
            <BackgroundImg src={background} id="rp-background-img" />
            {isLoading ? <Loader /> : <RewardScreen />}
            <FooterLogo id="rp-footer-logo" isMobileOnly={isMobileOnly}>
                <img src={logo} />
            </FooterLogo>
        </PageWrapperStyled>
    )
}

export default PageWrapper
