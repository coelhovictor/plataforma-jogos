import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    padding-top: 15px;
    justify-content: space-between;
    position: absolute;
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
`;

const Component = ({title, play, restart, stop}) => {
    return (
        <Container>
            <Title><i className="fa fa-play"></i> {title}</Title>
            <Buttons>
                <ul>
                    <li onClick={play}><i className="fa fa-play"></i></li>
                    <li onClick={restart}><i className="fa fa-refresh"></i></li>
                    <li onClick={stop}><i className="fa fa-stop"></i></li>
                </ul>
            </Buttons>
        </Container>
    );
};

export default Component;