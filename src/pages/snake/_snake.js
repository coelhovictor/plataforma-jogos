import React from "react";
import styled from 'styled-components';

const SnakeBody = styled.div`
    width: ${(props)=>props.size}%;
    height: ${(props)=>props.size}%;
    border-radius: 50%;
    background-color: var(--color-light-blue);
`;

const Component = ({ props, row, cell, direction }) => {
    
    const indexOf = (row, cell) => {
        for(let key in props.body) {
            let item = props.body[key];
            if(item.row === row && item.cell === cell) return key;
        }
        return -1;
    }

    const sizeOf = (index) => {
        return 100 - ((index + 1) * 1.5);
    }

    let index = parseInt(indexOf(row, cell));
    let size = sizeOf(index);

    return (
        <SnakeBody size={size}/>
    );
};

export default Component;