import React, { useEffect } from "react";
import styled from "styled-components";

import Container from '../components/container';
import GameCard from '../components/game-card';
import Scoreleaders from '../components/scoreleaders';

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
    /*margin-right: 5%;

    @media(max-width: 1200px) {
        width: 50%;
    }

    @media(max-width: 800px) {
        width: 100%;
        margin-right: 0px;
        margin-bottom: 60px;
    }*/

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
            </Cards>
        </Area>
    );
};

export default Home;