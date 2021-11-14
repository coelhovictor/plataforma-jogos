import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-bottom: 15px;
    position: absolute;
    bottom: 0; left: 0;
`;

const Item = styled.span`
    color: var(--color-gray);
    font-size: 18px;
    margin-left: 20px;
    
    @media (max-width:600px) {
        font-size: 16px !important;
    }  
`;

const Component = ({options}) => {
    return (
        <Container>
            {options.items.map((item, key) =>
                <Item key={key} title={item.title}><i className={item.icon}></i> {item.value}</Item>
            )}
        </Container>
    );
};

export default Component;