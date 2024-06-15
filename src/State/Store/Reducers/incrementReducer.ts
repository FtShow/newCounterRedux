const INCREMENT_VALUE = "INCREMENT_VALUE"
const SET_CURRENT_VALUE = "SET_CURRENT_VALUE"
const RESET_VALUE = "RESET_VALUE"

export type incrementReducerStateType = {
    currentValue: number,
    memoValue: number,
    memoMaxValue: number
}
export const initialState: incrementReducerStateType = {
    currentValue: 0,
    memoValue: 0,
    memoMaxValue: 1
}

export const incrementingValueReducer = (state: incrementReducerStateType = initialState, action: combineActionType):
    incrementReducerStateType => {
    switch (action.type) {
        case INCREMENT_VALUE: {
            return {...state, currentValue: state.currentValue + 1}
        }
        case SET_CURRENT_VALUE: {
            return {
                ...state, currentValue: action.payload.newValue, memoValue: action.payload.newValue,
                memoMaxValue: action.payload.maxValue
            }

        }
        case RESET_VALUE: {
            return {...state, currentValue: state.memoValue}
        }

        default :
            return state
    }
}
type combineActionType = incrementValueType | changeMemoValueType | resetValueType
type incrementValueType = ReturnType<typeof incrementValue>
type changeMemoValueType = ReturnType<typeof setCurrentValueAC>
type resetValueType = ReturnType<typeof resetValueAC>

export const incrementValue = () => {
    return {
        type: INCREMENT_VALUE,
    } as const
}

export const setCurrentValueAC = (newValue: number, maxValue: number) => {
    return {
        type: SET_CURRENT_VALUE,
        payload: {
            newValue,
            maxValue,
        }
    } as const
}
export const resetValueAC = () => {
    return {
        type: RESET_VALUE,
    } as const
}