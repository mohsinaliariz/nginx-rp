import { createContext, useContext, useReducer } from 'react'
import { RESET, SET_IS_MOBILE, SET_ITEMS, SET_LOADING, SET_REWARD, SET_SELECTION_STATE } from '../constants'
import { RewardsContextType, RewardsStateType } from '../types'

const initialState: RewardsStateType = {
    items: [],
    isRewardSelected: false,
    reward: null,
    isLoading: true,
    isMobileOnly: false
}

const RewardsContext = createContext<RewardsContextType>({
    state: {
        ...initialState
    },
    dispatch: () => undefined
})

const rewardsReducer = (state, action) => {
    switch (action.type) {
        case SET_ITEMS: {
            return {
                ...state,
                items: action.payload
            }
        }
        case SET_SELECTION_STATE: {
            return {
                ...state,
                isRewardSelected: action.payload
            }
        }
        case SET_REWARD: {
            return {
                ...state,
                reward: action.payload
            }
        }
        case SET_LOADING: {
            return {
                ...state,
                isLoading: action.payload
            }
        }
        case SET_IS_MOBILE: {
            return {
                ...state,
                isMobileOnly: action.payload
            }
        }
        case RESET: {
            return {
                ...initialState,
                isMobileOnly: state.isMobileOnly
            }
        }
        default: {
            return state
        }
    }
}

export const RewardsContextProvider = (props) => {
    const { children } = props
    const [state, dispatch] = useReducer(rewardsReducer, initialState)
    const value = { state, dispatch }
    return <RewardsContext.Provider value={value}>{children}</RewardsContext.Provider>
}

export const useRewardsContext = () => {
    const context = useContext(RewardsContext)
    if (context === undefined) {
        throw new Error('useRewardsContext must be used within a RewardsContextProvider')
    }
    return context
}
