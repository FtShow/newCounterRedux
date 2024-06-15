import React from 'react';
import {InputArea} from "./InputArea";
import {useDispatch} from "react-redux";
import {changeMaxValueAC, changeStartValueAC} from "../../State/Store/Reducers/setValueReducer";

type SetterDisplayProps = {
    startValue: number,
    maxValue: number
}


export const SetterDisplay: React.FC<SetterDisplayProps> = ({maxValue,startValue}) => {
    const dispatch = useDispatch()
    const setStartValue = (event: React.ChangeEvent<HTMLInputElement>)=>{
        dispatch(changeStartValueAC(+event.currentTarget.value))
    }
    const setMaxValue = (event: React.ChangeEvent<HTMLInputElement>)=>{
        dispatch(changeMaxValueAC(+event.currentTarget.value))
    }



//const dispatch = useDispatch()
    return (
        <div style={{display: "flex", flexDirection: 'row', justifyContent: 'space-around'}}>
            <InputArea value={startValue} callback={setStartValue}/>
            <InputArea value={maxValue} callback={setMaxValue}/>
        </div>
    );
};
