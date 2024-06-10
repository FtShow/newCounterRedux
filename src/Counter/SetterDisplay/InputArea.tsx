import React from 'react';
import styled from "styled-components";
const InputAreaStyle = styled.input.attrs({type: "number"})`
    width: 30%;
  height: 50px;
  margin: 5px;
  font-size: 50px;
`
const InputAreaBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`

export const InputArea = () => {
    return (
        <InputAreaBody>
            <span>{'props'}</span>
            <InputAreaStyle/>
        </InputAreaBody>
    );
};