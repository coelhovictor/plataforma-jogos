import React from "react";
import styled from "styled-components";

const Container = styled.div`
    background-color: var(--color-dark);
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

const Component = ({width, height, isstatic, game, children}) => {
    return (
        <Container style={{ width: width, height: height }} 
            isstatic={isstatic} id={game ? 'game-container' : ''}>
            {children}
        </Container>
    );
};

export default Component;