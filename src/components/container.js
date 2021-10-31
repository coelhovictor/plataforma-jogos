import React from "react";
import styled, { keyframes } from "styled-components";

const FlashBorder = keyframes`
    0% {
        border-color: var(--color-blue);
    }
    25% {
        border-color: var(--color-blue-secondary);
    }
    50% {
        border-color: var(--color-blue-three);
    }
    750% {
        border-color: var(--color-blue-secondary);
    }
    100% {
        border-color: var(--color-blue);
    }
`;

const Container = styled.div`
    background-color: var(--color-dark-blue);
    border: 2px solid var(--color-blue);
    border-radius: 5px;
    animation: ${FlashBorder} 1s linear infinite;
    overflow: hidden;

    :hover {
        animation: none;
    }
`;

const Component = ({width, height, children}) => {
    return (
        <Container style={{ width: width, height: height }}>
            {children}
        </Container>
    );
};

export default Component;