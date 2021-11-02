import React, { useState, useEffect } from "react";

import GameOptions from '../../components/game-options';
import Options from '../../components/options';

import { 
    Area,
    Container,
    Body,
    Option,
    Row,
    Column,
    Indicator,
    Score,
} from './styles';

const View = () => {

    const [options, setOptions] = useState([
        ["N", "N", "N"], 
        ["N", "N", "N"], 
        ["N", "N", "N"]
    ]);
    const [checks] = useState([
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]);
    const [settings] = useState([
        {
            display: "Símbolo",
            current: 0,
            options: [
                { display: "X", value: 0 },
                { display: "O", value: 1 }
            ]
        },
        {
            display: "Começar jogando",
            current: 1,
            options: [
                { display: "Sim", value: 0 },
                { display: "Não", value: 1 }
            ]
        }
    ]);

    const [status, setStatus] = useState(0);
    const [tasks, setTasks] = useState([]);
    const [scorePlayer, setScorePlayer] = useState(0);
    const [scoreCPU, setScoreCPU] = useState(0);
    const [scoreDraw, setScoreDraw] = useState(0);
    const [showOptions, setShowOptions] = useState(false);

    const startGame = () => {
        if(status != 0) return;

        reset();
        if(startPlaying() == 0) {
            setStatus(2); 
            return;
        }
        cpu();
    }

    const restart = () => {
        reset();
        if(startPlaying() == 0) {
            setStatus(2); 
            return;
        }
        cpu();
    }

    const reset = () => {

        for(var task in tasks) {
            clearInterval(tasks[task]);
        }
        if(tasks.length > 0) {
            setTasks([]);
        }

        clear();
    }

    const clear = () => {
        setStatus(0);
        setOptions([
            ["N", "N", "N"], 
            ["N", "N", "N"], 
            ["N", "N", "N"]
        ]);
    }

    const player = (x, y) => {
        if(status != 2) return;
        if(options[x][y] != "N") return;
        var winner = bet(x, y, symbol() == 0 ? "X" : "O");
        if(winner != 0) {
            finish(winner);
            return;
        }
        cpu();
    }
 
    const cpu = () => {
        setStatus(1);

        var timer = setInterval(() => {
            var index = chooseIndex();
            var winner = bet(index[0], index[1], symbol() != 0 ? "X" : "O");
            if(winner != 0) {
                finish(winner);
            } else {
                setStatus(2);
            }

            clearInterval(timer);
        }, 500);
        tasks.push(timer);
    }

    const chooseIndex = () => {
        var target = [];

        var selectGood = [];
        var selectBad = [];
        for(var as in checks) {
            var value = checks[as];
            var optionGood = 0, optionBad = 0;
            for(var index in value) {
                var result = transform(value[index]);
                var option = options[result[0]][result[1]];
                if(option == "O") optionGood++;
                if(option == "X") optionBad++;
            }
            if(optionGood > 0 && optionBad == 0) {
                if(selectGood.length == 0 || selectGood[0] < optionGood) selectGood = [optionGood, value];
            }
            if(optionBad > 0 && selectGood == 0) {
                if(selectBad.length == 0 || selectBad[0] < optionBad) selectBad = [optionBad, value];
            }
        }

        var select = null;

        if(selectGood.length > 0) {
            if(selectBad.length > 0 && selectBad[0] > 1 && selectBad[0] > selectGood[0]) {
                select = selectBad[1];
            } else {
                select = selectGood[1];
            }
        }

        if(select != null) {
            for(var one in select) {
                var index = transform(select[one]);
                var option = options[index[0]][index[1]];
                if(option == "N") {
                    target = index; 
                    break;
                }
            }
        }

        while(target.length == 0) {
            var x = Math.floor(Math.random() * 3);
            var y = Math.floor(Math.random() * 3);
            if(options[x][y] == "N") {
                target = [x, y];
                break;
            }
        }
        return target;
    }

    const bet = (x, y, option) => {
        var next = [];
        next.push(...options);
        next[x][y] = option;
        setOptions(next);

        return checkWinner();
    }

    const checkWinner = () => {
        var countN = 0;

        for(var as in checks) {
            var target = checks[as];
            var countX = 0, countO = 0;
            for(var index in target) {
                var result = transform(target[index]);
                var option = options[result[0]][result[1]];
                if(option == "X") countX++;
                if(option == "O") countO++;
                if(option == "N") countN++;
            }
            if(countX >= 3) return symbol() == 0 ? 1 : 2;
            if(countO >= 3) return symbol() == 1 ? 1 : 2;
        }

        if(countN == 0) return 3;

        return 0;
    }

    const transform = (value) => {

        var target = value;
        var x = 0, y = 0;
        while((target - 2) > 0) {
            x++;
            target -= (2 * x) + x;
            y += target;
            if(x > 0 && target > 3) {
                y -= (target - 3);
            }

        }
        if(x == 0) {
            y = target;
        }

        return [x, y];
    }

    const finish = (target) => {
        switch (target) {
            case 1:
                setStatus(4);
                setScorePlayer(scorePlayer + 1);
                break;
            case 2:
                setStatus(5);
                setScoreCPU(scoreCPU + 1);
                break;
            default:
                setStatus(6);
                setScoreDraw(scoreDraw + 1);
                break;
        }
        var timer = setInterval(() => {
            clear();
            clearInterval(timer);
        }, 1500);
        tasks.push(timer);
    }

    const symbol = () => { return settings[0].current; }
    const startPlaying = () => { return settings[1].current; }

    useEffect(() => {
        setScorePlayer(0);
        setScoreCPU(0);
        setScoreDraw(0);
        reset();
    }, []);

    return (
        <>
            <Area>
                <GameOptions 
                    title="TicTacToe"
                    play={()=>startGame()}
                    restart={()=>restart()}
                    stop={()=>reset()}
                    options={()=>setShowOptions(true)}/>
                <Container>
                    <Indicator>
                        {status == 0 && <span>Aguardando iniciar</span>}
                        {status == 1 && <span>Vez de <b>CPU</b></span>}
                        {status == 2 && <span>Vez de <b>PLAYER</b></span>}
                        {status == 4 && <span><b>PLAYER</b> ganhou!</span>}
                        {status == 5 && <span><b>CPU</b> ganhou!</span>}
                        {status == 6 && <span>Deu <b>EMPATE</b>!</span>}
                    </Indicator>
                    <Body>
                        <tbody>
                            {options.map((row, key) =>
                                <Row key={key}>
                                    {options[key].map((item, itemKey) =>
                                        <Column onClick={()=>player(key, itemKey, 1)} key={itemKey}>
                                            {item == "X"
                                                && <Option><i className="fa fa-times" style={{ fontSize: '60px' }}></i></Option>}
                                            {item == "O"
                                                && <Option><i className="far fa-circle"></i></Option>}
                                        </Column>
                                    )}
                                </Row>
                            )}
                        </tbody>
                    </Body>
                    <Score>
                        <div>
                            <b>{scorePlayer}</b>
                            <span>PLAYER</span>
                        </div>
                        <div>
                            <b>{scoreDraw}</b>
                            <span>EMPATE</span>
                        </div>
                        <div>
                            <b>{scoreCPU}</b>
                            <span>CPU</span>
                        </div>
                    </Score>
                </Container>
                <Options 
                    showStatus={showOptions} 
                    hide={()=>setShowOptions(false)} 
                    options={settings}
                    status={status}/>
            </Area>
        </>
    );
};

export default View;