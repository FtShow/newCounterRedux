import React from 'react';
import styled from "styled-components";
type InputAreaType = {
    name?: string
    value?: number
    callback?: (e:any)=>void
}
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

export const InputArea: React.FC<InputAreaType> = ({value, name, callback}) => {
    return (
        <InputAreaBody>
            <span>{name}</span>
            <InputAreaStyle value={value} onChange={callback}/>
        </InputAreaBody>
    );
};
