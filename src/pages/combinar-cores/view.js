import React, { useState, useEffect } from "react";

import GameOptions from '../../components/game-options';

import { 
    Area,
    Container,
} from './styles';

const View = () => {

    const [status, setStatus] = useState(0);

    const startGame = () => {
    }

    const restart = () => {
    }

    const reset = () => {
    }

    useEffect(() => {
        reset();
    }, []);

    return (
        <>
            <Area>
                <GameOptions 
                    title="Combinar Cores"
                    play={()=>startGame()}
                    restart={()=>restart()}
                    stop={()=>reset()}/>
                <Container>
                </Container>
            </Area>
        </>
    );
};

export default View;