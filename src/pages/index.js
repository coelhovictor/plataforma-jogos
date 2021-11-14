import React, { useEffect } from "react";
import styled from "styled-components";

import GameCard from '../components/game-card';

const Area = styled.div`
    width: 100%;
    height: auto;
    display: flex;

    @media(max-width: 800px) {
        flex-direction: column;
    }

`;

const Cards = styled.div`
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 80px;

    @media(max-width: 800px) {
        grid-gap: 40px;
    }
`;

const Home = () => {

    useEffect(() => {
        document.title = "Plataforma de Jogos";
    });

    return (
        <Area>
            <Cards>
                <GameCard name="Repetição" route="/repeticao" image="/imgs/simon.jpg"/>
                <GameCard name="TicTacToe" route="/tictactoe" image="/imgs/tictactoe.png"/>
                <GameCard name="Snake" route="/snake" image="/imgs/snake.png"/>
                <GameCard name="Combinar Cores" route="/combinar-cores" image="/imgs/combinar-cores.png"/>
            </Cards>
        </Area>
    );
};

export default Home;