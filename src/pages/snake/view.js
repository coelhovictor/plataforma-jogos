import React, { useState, useEffect, useRef } from "react";
import useKey from 'react-use/esm/useKey'

import SwipeContent from '../../components/swipe-content';
import GameOptions from '../../components/game-options';
import Snake from './_snake';

import { 
    Area,
    Container,
    Score,
    Body,
    Row,
    Spot,
    Apple,
} from './styles';

const View = () => {

    const ImgsPath = "./imgs/";
    const Imgs = {
        apple: "apple.png"
    };

    const Direction = {
        RIGHT: "right",
        LEFT: "left",
        TOP: "top",
        BOTTOM: "bottom"
    }
    const Length = {
        row: 16,
        cell: 16
    };
    
    const [options, setOptions] = useState([]);

    const [score, _setScore] = useState(0);
    const scoreRef = useRef(score);
    const setScoreRef = (data) => {
        scoreRef.current = data;
        _setScore(data);
    };

    const [recorde, _setRecorde] = useState(0);
    const recordeRef = useRef(recorde);
    const setRecordeRef = (data) => {
        recordeRef.current = data;
        _setRecorde(data);
    };

    const [apple, _setApple] = useState(null);
    const appleRef = useRef(apple);
    const setAppleRef = (data) => {
        appleRef.current = data;
        _setApple(data);
    };


    const [snake, _setSnake] = useState(null);
    const snakeRef = useRef(snake);
    const setSnakeRef = (data) => {
        snakeRef.current = data;
        _setSnake(data);
    };

    const [currentTick, setCurrentTick] = useState(null);

    const [status, _setStatus] = useState(0);
    const statusRef = useRef(status);
    const setStatusRef = (data) => {
        statusRef.current = data;
        _setStatus(data);
    };

    const [direction, _setDirection] = useState(Direction.RIGHT);
    const directionRef = useRef(direction);
    const setDirectionRef = (data) => {
        directionRef.current = data;
        _setDirection(data);
    };

    const startGame = () => {
        if(statusRef.current === 1) return;

        reset();
        setStatusRef(1);

        let tick = setInterval(()=>{
            if(statusRef.current === 2) {
                clearInterval(tick);
                return;
            }
            moveSnake();
        }, 120);
        setCurrentTick(tick);
    }

    const restart = () => {
        reset();
        startGame();
    }

    const reset = () => {
        setStatusRef(0);
        setScoreRef(0);
        clearInterval(currentTick);
        setDirectionRef(Direction.RIGHT);
        setAppleRef({
            row: -1,
            cell: -1
        });
        setSnakeRef({
            head: {
                row: 9,
                cell: 4
            },
            body: [
                { row: 9, cell: 3 },
                { row: 9, cell: 2 },
            ]
        });
        randomApple();
    }

    const setupOptions = () => {
        let ops = [];
        for(let i = 0; i < Length.row; i++) {
            let inside = [];
            for(let iB = 0; iB < Length.cell; iB++) {
                inside.push(iB);
            }
            ops.push(inside);
        }
        setOptions(ops);
    }

    const changeDirection = (e, target) => {
        if(statusRef.current !== 1) return;

        if(e !== null) e.preventDefault();
        if(target === Direction.RIGHT && directionRef.current === Direction.LEFT) return;
        if(target === Direction.LEFT && directionRef.current === Direction.RIGHT) return;
        if(target === Direction.TOP && directionRef.current === Direction.BOTTOM) return;
        if(target === Direction.BOTTOM && directionRef.current === Direction.TOP) return;
        setDirectionRef(target);
    }

    const moveSnake = () => {
        let nSnake = {...snakeRef.current};
        let nHead = { row: snakeRef.current.head.row, cell: snakeRef.current.head.cell };
        let nBody = [];

        let blocked = false;
        let eatApple = false;
        let target = 0;

        switch (directionRef.current) {
            case Direction.RIGHT:
                target = nHead.cell + 1;
                if(isBodyPosition(nHead.row, target)) {
                    blocked = true;
                } else if(target >= Length.cell) {
                    nHead.cell = 0;
                } else {
                    nHead.cell = target;
                }
                eatApple = appleRef.current.row === nHead.row 
                        && appleRef.current.cell === nHead.cell;
                break;
            case Direction.LEFT:
                target = nHead.cell - 1;
                if(isBodyPosition(nHead.row, target)) {
                    blocked = true;
                } else if(target < 0) {
                    nHead.cell = Length.cell - 1;
                } else {
                    nHead.cell = target;
                }
                eatApple = appleRef.current.row === nHead.row 
                        && appleRef.current.cell === nHead.cell;
                break;
            case Direction.TOP:
                target = nHead.row - 1;
                if(isBodyPosition(target, nHead.cell)) {
                    blocked = true;
                } else if(target < 0) {
                    nHead.row = Length.row - 1;
                } else {
                    nHead.row = target;
                }
                eatApple = appleRef.current.row === nHead.row 
                        && appleRef.current.cell === nHead.cell;
                break;
            case Direction.BOTTOM:
                target = nHead.row + 1;
                if(isBodyPosition(target, nHead.cell)) {
                    blocked = true;
                } else if(target >= Length.row) {
                    nHead.row = 0;
                } else {
                    nHead.row = target;
                }
                eatApple = appleRef.current.row === nHead.row 
                        && appleRef.current.cell === nHead.cell;
                break;
            default:
                break;
        }

        if(blocked) {
            lose();
            return;
        }

        if(eatApple) {
            win();
            nSnake.body.push({ row: -1, cell: -1 });
        }

        for(let key in nSnake.body) {
            if(key === "0") {
                nBody[key] = { 
                    row: snakeRef.current.head.row, 
                    cell: snakeRef.current.head.cell 
                };
            } else {
                nBody[key] = { 
                    row: snakeRef.current.body[key - 1].row, 
                    cell: snakeRef.current.body[key - 1].cell 
                };
            }
        }

        nSnake.head = nHead;
        nSnake.body = nBody;
        setSnakeRef(nSnake);
    }

    const isBodyPosition = (row, cell) => {
        for(let key in snakeRef.current.body) {
            let item = snakeRef.current.body[key];
            if(item.row === row && item.cell === cell) {
                return true;
            }
        }
        return false;
    }

    const randomApple = () => {
        while(true) {
            let row = Math.floor(Math.random() * Length.row);
            let cell = Math.floor(Math.random() * Length.cell);

            if(row !== appleRef.current.row 
                && cell !== appleRef.current.cell 
                && !isBodyPosition(row, cell)) {

                setAppleRef({
                    row: row,
                    cell: cell
                })
                break;
            } else {
                continue;
            }
        }
    }

    const win = () => {
        randomApple();
        let nScore = scoreRef.current + 1;
        let recorde = recordeRef.current;
        setScoreRef(nScore);
        if(nScore > recorde) setRecordeRef(nScore);
    }

    const lose = () => {
        setStatusRef(2);
    }

    useKey("ArrowUp", (e)=>changeDirection(e, Direction.TOP));
    useKey("ArrowDown", (e)=>changeDirection(e, Direction.BOTTOM));
    useKey("ArrowLeft", (e)=>changeDirection(e, Direction.LEFT));
    useKey("ArrowRight", (e)=>changeDirection(e, Direction.RIGHT));

    useEffect(() => {
        setupOptions();
        setRecordeRef(0);
        reset();
    }, []);

    return (
        <SwipeContent
            swipeTop={(e)=>changeDirection(e, Direction.TOP)}
            swipeBottom={(e)=>changeDirection(e, Direction.BOTTOM)}
            swipeLeft={(e)=>changeDirection(e, Direction.LEFT)}
            swipeRight={(e)=>changeDirection(e, Direction.RIGHT)}>
            <Area>
                <GameOptions 
                    title="Snake"
                    play={()=>startGame()}
                    restart={()=>restart()}
                    stop={()=>reset()}/>
                <Container>
                    <Body>
                        {options.length > 0 && 
                            <>
                                {options.map((row, key) =>
                                    <Row key={key}>
                                        {options[key].map((item, itemKey) =>
                                            <Spot key={itemKey} even={(itemKey + key) % 2 === 0}>
                                                {key === appleRef.current.row && itemKey === appleRef.current.cell &&
                                                    <Apple src={ImgsPath + Imgs.apple}/>
                                                }
                                                {key === snakeRef.current.head.row && itemKey === snakeRef.current.head.cell &&
                                                    <Snake 
                                                        direction={directionRef.current}
                                                        props={snakeRef.current}
                                                        row={-1}
                                                        cell={-1}/>
                                                }
                                                {isBodyPosition(key, itemKey) &&
                                                    <Snake 
                                                        direction={directionRef.current}
                                                        props={snakeRef.current}
                                                        row={key}
                                                        cell={itemKey}/>
                                                }
                                            </Spot>
                                        )}
                                    </Row>
                                )}
                            </>
                        }
                    </Body>
                    <Score>
                        <div>
                            <b>{scoreRef.current}</b>
                            <span>SCORE</span>
                        </div>
                        <div>
                            <b>{recordeRef.current}</b>
                            <span>RECORDE</span>
                        </div>
                    </Score>
                </Container>
            </Area>
        </SwipeContent>
    );
};

export default View;