const INCREMENT_VALUE = "INCREMENT_VALUE"
const SET_CURRENT_VALUE = "SET_CURRENT_VALUE"

export type incrementReducerStateType = {
    currentValue: number,
    memoValue: number,
}
export const initialState: incrementReducerStateType = {
    currentValue: 0,
    memoValue: 1,
}

export const incrementingValueReducer = (state: incrementReducerStateType = initialState, action: combineActionType):
    incrementReducerStateType => {
    switch (action.type) {
        case INCREMENT_VALUE: {
            return {...state, currentValue: state.currentValue+1}
        }
        case SET_CURRENT_VALUE: {
            return {...state, currentValue: action.payload.newValue, memoValue: action.payload.newValue}

        }

        default :
            return state
    }
}
type combineActionType = incrementValueType | changeMemoValueType
type incrementValueType = ReturnType<typeof incrementValue>
type changeMemoValueType = ReturnType<typeof setCurrentValueAC>

export const incrementValue = () => {
    return {
        type: INCREMENT_VALUE,
    } as const
}

export const setCurrentValueAC = (newValue: number) => {
    return {
        type: SET_CURRENT_VALUE,
        payload: {
            newValue
        }
    } as const
}
