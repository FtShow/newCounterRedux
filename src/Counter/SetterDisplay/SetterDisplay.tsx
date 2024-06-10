import React from 'react';
import styled from "styled-components";
import {InputArea} from "./InputArea";
import {useSelector} from "react-redux";
// const startValue = useSelector<any, number>(set)
export const SetterDisplay = () => {
    return (
        <div style={{display: "flex", flexDirection: 'row', justifyContent: 'space-around'}}>

            <InputArea/>
            <InputArea/>
        </div>
    );
};
