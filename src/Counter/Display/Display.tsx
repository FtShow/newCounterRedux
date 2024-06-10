import React from 'react';
import styled from "styled-components";

type CountType = {
    count?: number
    correctValue?: boolean;
}


export const Display: React.FC<CountType> = ({count, correctValue = true}) => {
    const CounterDisplay = styled.span`
      font-size: 80px;
      text-align: center;
      color: ${correctValue ? "#ffffff" : "#rerere"};
    `
    return (
        <CounterDisplay>
            {count}
        </CounterDisplay>
    );
};
