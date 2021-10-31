import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Container from './container';

const Area = styled.div`
    width: 35%;
    height: auto;

    @media(max-width: 1200px) {
        width: 40%;
    }

    @media(max-width: 800px) {
        width: 100%;
    }

`;

const Title = styled.div`
    width: 100%;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-dark);
`;

const TitleText = styled.span`
    font-size: 18px;
`;

const Item = styled.div`
    width: 100%;
    height: 65px;
    display: flex;
    border-top: 2px solid var(--color-dark);
`;

const Left = styled.div`
    width: 60%;
    height: 100%;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    b {
        font-size: 16px;
        font-weight: 300;
    }

    span {
        font-size: 12px;
        color: var(--color-gray);
    }
`;

const Right = styled.div`
    width: 40%;
    height: 100%;
    padding-right: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    span {
        font-size: 18px;
        color: var(--color-gray);
    }

    @media(max-width: 600px) {
        span {
            font-size: 16px;
        }
    }
`;

const Component = () => {
    return (
        <Area>
            <Container width="100%" height="auto">
                <Title>
                    <TitleText>SCORELEADERS</TitleText>
                </Title>

                <Item>
                    <Left><b>coelho</b><span>#001</span></Left>
                    <Right><span>1.000</span></Right>
                </Item>

                <Item>
                    <Left><b>coelho</b><span>#001</span></Left>
                    <Right><span>1.000</span></Right>
                </Item>

            </Container>
        </Area>
    );
};

export default Component;