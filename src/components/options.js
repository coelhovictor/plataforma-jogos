import React from "react";
import styled, { keyframes } from "styled-components";

import Option from './option';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: ${(props)=>props.show ? 'flex' : 'none'};
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, .5);
    position: absolute;
    top: 0; left: 0;
`;

const Body = styled.div`
    width: 300px;
    height: auto;
    border-radius: 5px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);
    background-color: var(--color-dark);
    overflow: hidden;
`;

const Header = styled.div`
    width: 100%;
    height: 40px;
    border-bottom: 1px solid var(--color-dark-gray);
    line-height: 45px;
    text-align: right;
    
    span {
        float: left;
        margin-left: 15px;
    }

    b {
        color: var(--color-gray);
        font-size: 20px;
        margin-right: 15px;
        cursor: pointer;
    }
`;

const Content = styled.div`
    height: auto;
    padding: 15px;
`;

const Component = ({showStatus, hide, options, status}) => {
    return (
        <Container show={showStatus}>
            <Body>
                <Header>
                    <span>Opções</span>
                    <b onClick={hide}><i class="fa fa-close"></i></b>
                </Header>
                <Content>
                    {status == 0 &&
                        <>
                            {options.map((option, key) => 
                                <Option key={key} option={option}/>
                            )}
                        </>
                    }
                    {status != 0 &&
                        <span>O jogo está em andamento!</span>
                    }
                </Content>
            </Body>
        </Container>
    );
};

export default Component;