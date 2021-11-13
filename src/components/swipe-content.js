import React, { useState } from "react";
import styled from "styled-components";

const Area = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const Component = ({ swipeTop, swipeLeft, swipeBottom, swipeRight, children }) => {

    const [startingX, setStartingX] = useState(0);
    const [startingY, setStartingY] = useState(0);
    const [movingX, setMovingX] = useState(0);
    const [movingY, setMovingY] = useState(0);

    const touchStart = (event) => {
        setStartingX(event.touches[0].clientX);
        setStartingY(event.touches[0].clientY);
    }

    const touchMove = (event) => {
        window.scrollTo(0, 1);
        setMovingX(event.touches[0].clientX);
        setMovingY(event.touches[0].clientY);
    }

    const touchEnd = (event) => {
        if(startingX+100 < movingX) {
            if(swipeRight) swipeRight(event);
        } else if(startingX-100 > movingX) {
            if(swipeLeft) swipeLeft(event);
        }
        if(startingY+100 < movingY) {
            if(swipeBottom) swipeBottom(event);
        } else if(startingY-100 > movingY) {
            if(swipeTop) swipeTop(event);
        }
    }

    return (
        <Area 
            onTouchStart={(evt)=>touchStart(evt)}
            onTouchMove={(evt)=>touchMove(evt)}
            onTouchEnd={(evt)=>touchEnd(evt)}>
                {children}
        </Area>
    );
};

export default Component;