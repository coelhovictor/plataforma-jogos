import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Container from '../../components/container';
import View from './view';

const Area = styled.div`
    width: 100%;
    height: auto;
`;

const Title = styled.span`
    color: var(--color-gray);
    font-size: 16px;
    position: absolute;
    margin-left: 20px;
    margin-top: 20px;
`;

const Back = styled.div`
    width: 100%;
    height: auto;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
    font-size: 14px;
`;

const Page = () => {

    useEffect(() => {
        document.title = "TicTacToe | Plataforma de Jogos";
    });

    return (
        <Area>
            <Container width="100%" height="600px">
                <Title>TicTacToe</Title>
                <View />
            </Container>
            <Back>
                <Link to="/" style={{ color: 'var(--color-gray)' }}>Voltar para o Início</Link>
            </Back>
        </Area>
    );
};

export default Page;