import React, { useState, useEffect } from "react";
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

    const [options] = useState(["1", "B", "2", "D", "5", "F", "7", "H", "9"]);

    useEffect(() => {
    }, []);

    return (
        <Area>
            <Container>
                <Header>
                    <Indicator active={true}>

                    </Indicator>
                    <Indicator>
                        
                    </Indicator>
                </Header>
                <Body>
                    <tbody>
                        <Row>
                            <Option></Option>
                            <Option></Option>
                            <Option></Option>
                        </Row>
                        <Row>
                            <Option></Option>
                            <Option></Option>
                            <Option></Option>
                        </Row>
                        <Row>
                            <Option></Option>
                            <Option></Option>
                            <Option></Option>
                        </Row>
                    </tbody>
                </Body>
            </Container>
        </Area>
    );
};

export default View;