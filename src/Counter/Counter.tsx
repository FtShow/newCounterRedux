import React from 'react';
import s from './counterStyle.module.css'
import {Display} from "./Display/Display";
import styled from "styled-components";
import {Button} from "./Button/Button";
import {SetterDisplay} from "./SetterDisplay/SetterDisplay";

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
    return (
        <ParentContainer>

            <SetterBody>
                <SetterDisplay/>
                <ButtonBlock>
                    <Button name={'SET'}/>
                    <Button name={'RESET'}/>
                </ButtonBlock>
            </SetterBody>
            <CounterBody>
                <Display count={0}/>
                <Button name={'INC'}/>

            </CounterBody>
        </ParentContainer>
    );
};
