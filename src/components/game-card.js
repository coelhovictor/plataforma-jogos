import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Container from './container';

const Title = styled.span`
    color: var(--color-gray);
    font-size: 16px;
    position: absolute;
    margin-left: 20px;
    margin-top: 20px;
`;

const Body = styled.div`
    width: 100%;
    height: 80%;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: .2;
`;

const Play = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-light-dark);
`;

const PlayText = styled.span`
    font-size: 22px;
`;

const Component = ({name, image, route}) => {
    return (
        <Container width="auto" height="250px">
            <Link to={route}>
                <Title><i className="fa fa-play"></i> {name}</Title>
                <Body style={{ backgroundImage: `url(${image})` }}>
                </Body>
                <Play>
                    <PlayText>JOGAR</PlayText>
                </Play>
            </Link>
        </Container>
    );
};

export default Component;