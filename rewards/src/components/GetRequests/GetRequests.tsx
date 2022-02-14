import { useCallback } from 'react'
import { SET_ITEMS, SET_LOADING, SET_REWARD, SET_SELECTION_STATE } from '../../constants'
import { useRewardsContext } from '../../context/RewardsContextProvider'

export const GetRequests = () => {
    const { dispatch } = useRewardsContext()
    const {
        rewardPickerConfig: { apiURL, collection }
    } = (window as any).self

    const getItems = useCallback(() => {
        dispatch({
            type: SET_LOADING,
            payload: true
        })
        fetch(`${apiURL}/rewards/${collection}`, {
            method: 'GET'
        })
            .then((response) => {
                response.json().then((jsonResponse) => {
                    const { message } = jsonResponse
                    dispatch({
                        type: SET_ITEMS,
                        payload: message
                    })
                    dispatch({
                        type: SET_LOADING,
                        payload: false
                    })
                })
            })
            .catch((err) => console.log(err))
    }, [apiURL, collection])

    const getReward = useCallback(() => {
        fetch(`${apiURL}/rewards/${collection}/claim`, {
            method: 'GET'
        })
            .then((response) => {
                response.json().then((jsonResponse) => {
                    const { message, err } = jsonResponse
                    if (!err) {
                        dispatch({
                            type: SET_REWARD,
                            payload: message
                        })
                        dispatch({
                            type: SET_SELECTION_STATE,
                            payload: true
                        })
                    }
                })
            })
            .catch((err) => console.log(err))
    }, [apiURL, collection])

    return {
        getItems,
        getReward
    }
}
