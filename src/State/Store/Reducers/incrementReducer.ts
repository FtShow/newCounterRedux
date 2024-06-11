const INCREMENT_VALUE = "INCREMENT_VALUE"
const MEMO_SET_VALUE = "MEMO_SET_VALUE"

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

        default :
            return state
    }
}
type combineActionType = incrementValueType | changeMemoValueType
type incrementValueType = ReturnType<typeof incrementValue>
type changeMemoValueType = ReturnType<typeof changeMemoValue>

export const incrementValue = () => {
    return {
        type: INCREMENT_VALUE,
    } as const
}

export const changeMemoValue = (newValue: number) => {
    return {
        type: MEMO_SET_VALUE,
        payload: {
            newValue
        }
    } as const
}
