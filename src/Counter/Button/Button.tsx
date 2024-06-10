import React from 'react';
import styled from "styled-components";
type ButtonPropsType = {
    name?: string,
    callback?: ()=>{}
}

const StyledButton  = styled.button`
  display: block;
  max-width: 80%;
  height: 40px;
  margin: 30px;
  background-color: rgb(198, 223, 229);
  border-radius: 5px;
  border: none;
  box-sizing: border-box;
  &:hover{
    border: 3px solid black;
  }
`
export const Button: React.FC<ButtonPropsType> = ({name, callback}) => {
    return (
        <StyledButton>
            {name}
        </StyledButton>
    );
};
