import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    padding-top: 15px;
    justify-content: space-between;
    position: absolute;
    top: 0; left: 0;
`;

const Title = styled.span`
    color: var(--color-gray);
    font-size: 16px;
    margin-left: 20px;
`;

const Buttons = styled.nav`
    width: auto;
    height: 40px;
    margin-right: 20px;
    font-size: 24px;
    line-height: 45px;
    color: var(--color-gray);

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }

    li {
        display: inline;
        float: left;
        padding-left: 10px;
        padding-right: 10px;
        transition: color .2s;
        cursor: pointer;
    }

    li:hover {
        color: var(--color-white);
    }

    @media (max-width:600px) {
        font-size: 22px;
    }  
`;

const Component = ({title, play, restart, stop, options}) => {
    return (
        <Container>
            <Title title={title}><i className="fa fa-play"></i> {title}</Title>
            <Buttons>
                <ul>
                    <li onClick={play} title="Iniciar"><i className="fa fa-play"></i></li>
                    <li onClick={restart}  title="Reiniciar"><i className="fa fa-refresh"></i></li>
                    <li onClick={stop}  title="Parar"><i className="fa fa-stop"></i></li>
                    {options && <li onClick={options} title="Opções"><i className="fa fa-bars"></i></li>}
                    <Link to="/">
                        <li title="Voltar" id="option-exit" style={{ color: 'var(--color-gray)', display: 'none' }}>
                            <i className="fa fa-close"></i>
                        </li>
                    </Link>
                </ul>
            </Buttons>
        </Container>
    );
};

export default Component;