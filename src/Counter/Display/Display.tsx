import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../State/Store/store";

type CountType = {
    count?: number
    correctValue?: boolean;
}


export const Display: React.FC<CountType> = ({count, correctValue = true}) => {
    const currentValue = useSelector<AppRootStateType, number>(state => state.incrementingValue.currentValue)
    const CounterDisplay = styled.span`
      font-size: 80px;
      text-align: center;
      color: ${correctValue ? "#ffffff" : "#rerere"};
    `
    return (
        <CounterDisplay>
            {currentValue}
        </CounterDisplay>
    );
};
