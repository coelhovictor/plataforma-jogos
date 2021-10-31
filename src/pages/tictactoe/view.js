import React, { useState, useEffect } from "react";

import GameOptions from '../../components/game-options';

import { 
    Area,
    Container,
    Header,
    Body,
    Indicator,
    Option,
    Row,
} from './styles';

const View = () => {

    const [options] = useState([["A", "B", "C"], ["D", "E", "F"], ["G", "H", "F"]]);
    const [betsX] = useState([[], [], []]);
    const [betsO] = useState([[], [], []]);

    useEffect(() => {
    }, []);

    return (
        <>
            <GameOptions 
                    title="TicTacToe"/>
            <Area>
                <Container>
                    {/*<Header>
                        <Indicator active={true}>
                            <span style={{ marginLeft: '10px' }}><i className="fa fa-times"></i></span>
                            <b style={{ float: 'right', marginRight: '10px' }}>0</b>
                        </Indicator>
                        <Indicator>
                            <b style={{ marginLeft: '10px' }}>0</b>
                            <span style={{ float: 'right', marginRight: '10px' }}>O</span>
                        </Indicator>
                    </Header>*/}
                    <Body>
                        <tbody>
                            {options.map((row, key) =>
                                <Row key={key}>
                                    {options[key].map((item, itemKey) =>
                                        <>
                                            {betsX[key].includes(item) 
                                                && <Option><i className="fa fa-times"></i></Option>}
                                            {betsO[key].includes(item) 
                                                && <Option key={item}><i className="far fa-circle"></i></Option>}
                                            {!betsX[key].includes(item)
                                                && !betsO[key].includes(item) 
                                                && <Option key={item}></Option>}
                                        </>
                                    )}
                                </Row>
                            )}
                        </tbody>
                    </Body>
                </Container>
            </Area>
        </>
    );
};

export default View;