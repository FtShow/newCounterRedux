import React from 'react';
import styled from "styled-components";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../State/Store/store";

type CountType = {
    count?: number
    correctValue?: boolean;
}


export const Display: React.FC<CountType> = ({count, correctValue = true}) => {
    //const currentValue = useSelector<AppRootStateType, number>(state => state.incrementingValue.currentValue)
    const CounterDisplay = styled.span`
      position: absolute;
      font-size: ${correctValue ? "80px": "100px"};
      text-align: center;
      color: ${correctValue ? "#ffffff" : "red"};
    `
    return (
        <CounterDisplay>
            {count}
        </CounterDisplay>
    );
};
