import { Dispatch } from 'react'

export type rewardItemType = {
    name: string
    image: string
    secondary_image?: string
    count?: number
}

export type RewardsStateType = {
    items: rewardItemType[]
    isRewardSelected: boolean
    reward: rewardItemType
    isLoading: boolean
    isMobileOnly: boolean
}

export type RewardsDispatchActionType =
    | {
          type: 'SET_SELECTION_STATE'
          payload: boolean
      }
    | {
          type: 'SET_REWARD'
          payload: rewardItemType
      }
    | {
          type: 'SET_ITEMS'
          payload: rewardItemType[]
      }
    | {
          type: 'SET_LOADING'
          payload: boolean
      }
    | {
          type: 'SET_IS_MOBILE'
          payload: boolean
      }
    | {
          type: 'RESET'
      }

export type RewardsContextType = {
    state: RewardsStateType
    dispatch: Dispatch<RewardsDispatchActionType>
}
