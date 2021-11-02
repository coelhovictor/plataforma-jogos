import React, { useEffect } from "react";
import styled from "styled-components";

import Container from '../../components/container';
import Back from '../../components/back';
import View from './view';

const Area = styled.div`
    width: 100%;
    height: auto;
    position: relative;
`;

const Page = () => {

    useEffect(() => {
        document.title = "Repetição | Plataforma de Jogos";
    });

    return (
        <Area>
            <Container width="100%" height="670px" isstatic={true}>
                <View />
            </Container>
            <Back />
        </Area>
    );
};

export default Page;