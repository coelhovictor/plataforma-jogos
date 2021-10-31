import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Area = styled.div`
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Code = styled.h1`
    font-size: 48px;
`;

const Back = styled.div`
    width: 100%;
    height: auto;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
    font-size: 14px;
`;

const NotFound = () => {

    useEffect(() => {
        document.title = "Não encontrado | Plataforma de Jogos";
    });

    return (
        <Area>
            <Code>404</Code>
            <span>PÁGINA NÃO ENCONTRADA</span>
            <Back>
                <Link to="/" style={{ color: 'var(--color-gray)' }}>Voltar para o Início</Link>
            </Back>
        </Area>
    );
};

export default NotFound;