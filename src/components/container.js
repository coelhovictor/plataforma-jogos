import React from "react";
import styled, { keyframes } from "styled-components";

/*const FlashBorder = keyframes`
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
`;*/

const Container = styled.div`
    background-color: var(--color-dark-blue);
    border-bottom: 3px solid var(--color-blue);
    border-radius: 5px;
    animation: gradient-color 15s ease infinite;
    transition: transform .2s;
    overflow: hidden;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);

    :hover {
        transform: ${(props)=>props.isstatic ? 'scale(1)' : 'scale(1.05)'};
    }
`;

const Component = ({width, height, isstatic, children}) => {
    return (
        <Container style={{ width: width, height: height }} isstatic={isstatic}>
            {children}
        </Container>
    );
};

export default Component;