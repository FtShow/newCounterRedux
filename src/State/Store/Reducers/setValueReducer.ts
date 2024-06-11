const SET_START_VALUE = "SET_START_VALUE"
const SET_MAX_VALUE = "SET_MAX_VALUE"

export type reducerStateType = {
    setStartValue: number,
    setMaxValue: number,
    viewValue: number,
}
export const initialState: reducerStateType = {
    setStartValue: 0,
    setMaxValue: 4,
    viewValue: 0,
}

export const setterValueReducer = (state: reducerStateType = initialState, action: combineActionType):reducerStateType => {
    switch (action.type) {
        case SET_START_VALUE: {
            return {...state, setStartValue: action.payload.newValue}
        }
        case SET_MAX_VALUE: {
            return {...state, setMaxValue: action.payload.newValue}
        }
        default :
            return state
    }
}
type combineActionType = changeStartValue | changeMaxValue
type changeStartValue = ReturnType<typeof changeStartValueAC>
type changeMaxValue = ReturnType<typeof changeMaxValueAC>

export const changeStartValueAC = (newValue: number) => {
    return {
        type: SET_START_VALUE,
        payload: {
            newValue
        }
    } as const
}

export const changeMaxValueAC = (newValue: number) => {
    return {
        type: SET_MAX_VALUE,
        payload: {
            newValue
        }
    } as const
}
