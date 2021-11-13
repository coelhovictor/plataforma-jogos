import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Back = styled.div`
    width: 100%;
    height: auto;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
    font-size: 14px;

    i {
        margin-right: 5px;
    }

`;


const Component = () => {
    return (
        <Back>
            <Link to="/" style={{ color: 'var(--color-gray)' }}>
                <i className="fas fa-undo-alt"></i>
                Voltar para o Início
            </Link>
        </Back>
    );
};

export default Component;