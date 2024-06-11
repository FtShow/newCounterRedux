import React from 'react';
import s from './counterStyle.module.css'
import {Display} from "./Display/Display";
import styled from "styled-components";
import {Button} from "./Button/Button";
import {SetterDisplay} from "./SetterDisplay/SetterDisplay";
import {useDispatch, useSelector} from "react-redux";
import {incrementValue, setCurrentValueAC} from "../State/Store/Reducers/incrementReducer";
import {AppRootStateType} from "../State/Store/store";

const CounterBody = styled.div`
  width: 400px;
  height: 250px;
  border-radius: 10px;
  border: 2px solid #292f04;
  background-color: rgba(5, 103, 114, 0.46);
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  margin: 30px;
  position: relative;
`
const ButtonBlock = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
`
const SetterBody = styled(CounterBody)``

const ParentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  
`


export const Counter = () => {
    const dispatch = useDispatch()
    const currentValue = useSelector<AppRootStateType, number>(state => state.incrementingValue.currentValue)
    const startValue = useSelector<AppRootStateType, number>(state => state.values.setStartValue)
    const maxValue = useSelector<AppRootStateType, number>(state => state.values.setMaxValue)
    const setCurrentValue = (value: number, )=>{
        dispatch(setCurrentValueAC(startValue))
    }
    const incCurrentValue=()=>{
        console.log('1212')
        dispatch(incrementValue())
    }
    return (
        <ParentContainer>
            <SetterBody>
                <SetterDisplay startValue={startValue} maxValue={maxValue}/>
                <ButtonBlock>
                    <Button name={'SET'} callback={setCurrentValue}/>
                    <Button name={'RESET'}/>
                </ButtonBlock>
            </SetterBody>
            <CounterBody>
                <Display count={currentValue}/>
                <Button name={'INC'} callback={incCurrentValue}/>

            </CounterBody>
        </ParentContainer>
    );
};
