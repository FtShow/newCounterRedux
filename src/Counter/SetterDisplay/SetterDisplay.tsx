import React from 'react';
import styled from "styled-components";
import {InputArea} from "./InputArea";

export const SetterDisplay = () => {
    return (
        <div style={{display: "flex", flexDirection: 'row', justifyContent: 'space-around'}}>

            <InputArea/>
            <InputArea/>
        </div>
    );
};
