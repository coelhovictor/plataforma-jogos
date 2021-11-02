import React, { useState, useEffect } from "react";

import GameOptions from '../../components/game-options';

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

    const [status, setStatus] = useState(0);
    const [tasks, setTasks] = useState([]);
    const [scorePlayer, setScorePlayer] = useState(0);
    const [scoreCPU, setScoreCPU] = useState(0);
    const [scoreDraw, setScoreDraw] = useState(0);

    const startGame = () => {
        if(status != 0) return;

        reset();
        cpu();
    }

    const restart = () => {
        reset();
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
        var winner = bet(x, y, "X");
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
            var winner = bet(index[0], index[1], "O");
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

        var selectX = [];
        var selectO = [];
        for(var as in checks) {
            var value = checks[as];
            var countO = 0, countX = 0;
            for(var index in value) {
                var result = transform(value[index]);
                var option = options[result[0]][result[1]];
                if(option == "O") countO++;
                if(option == "X") countX++;
            }
            if(countX > 0 && countO == 0) {
                if(selectX.length == 0 || selectX[0] < countX) selectX = [countX, value];
            }
            if(countO > 0 && countX == 0) {
                if(selectO.length == 0 || selectO[0] < countO) selectO = [countO, value];
            }
        }

        var select = null;

        if(selectO.length > 0) {
            if(selectX.length > 0 && selectX[0] > 1 && selectX[0] > selectO[0]) {
                select = selectX[1];
            } else {
                select = selectO[1];
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
            if(countX >= 3) return 1;
            if(countO >= 3) return 2;
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

    useEffect(() => {
        setScorePlayer(0);
        setScoreCPU(0);
        setScoreDraw(0);
        reset();
    }, []);

    return (
        <>
            <GameOptions 
                    title="TicTacToe"
                    play={()=>startGame()}
                    restart={()=>restart()}
                    stop={()=>reset()}/>
            <Area>
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
                                                && <Option><i className="fa fa-times"></i></Option>}
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
            </Area>
        </>
    );
};

export default View;