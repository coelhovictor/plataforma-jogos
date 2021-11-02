import React, { useState, useEffect } from "react";

import GameOptions from '../../components/game-options';

import { 
    Area,
    Container,
    Header,
    Options,
    Option,
    Footer,
    Buttons,
    Button,
    Score
} from './styles';

const View = () => {

    const [options] = useState(["1", "B", "2", "D", "5", "F", "7", "H", "9"]);
    const [settings] = useState([]);

    const [status, setStatus] = useState(0);
    const [locked, setLocked] = useState(true);
    const [score, setScore] = useState(0);
    const [currentSequence, setCurrentSequence] = useState([]);
    const [currentBetIndex, setCurrentBetIndex] = useState(0);
    const [currentBless, setCurrentBless] = useState(-1);
    const [tasks, setTasks] = useState([]);

    const startGame = () => {
        if(status != 0) return;

        reset();
        sequence(0);
    }

    const restart = () => {
        if(status == 0) return;

        reset();
        sequence(0);
    }

    const reset = () => {

        for(var task in tasks) {
            clearInterval(tasks[task]);
        }
        if(tasks.length > 0) {
            setTasks([]);
        }

        setLocked(true);
        setStatus(0);
        setScore(0);
        setCurrentBless(-1);
        setCurrentBetIndex(0);
    }

    const sequence = (level) => {
        setStatus(1);
        setCurrentBetIndex(0);
        currentSequence.length = 0;
        setLocked(true);
        var count = 0;
        var timer = setInterval(() => {
            if(count >= (2 + (level * 2))) {
                clearInterval(timer);
                var timer2 = setInterval(() => {
                    setStatus(2);
                    setLocked(false);
                    setCurrentSequence(currentSequence);
                    clearInterval(timer2);
                }, 1000);
                tasks.push(timer2);
            } else {
                var sortedIndex = sortIndex();
                bless(sortedIndex);
                count++;
            }
        }, 2000);
        tasks.push(timer);
    }

    const sortIndex = () => {
        var got = false;
        var target = 0;
        while(!got) {
            var value = Math.floor(Math.random() * 8);
            if(currentSequence.length > 0) {
                var last = currentSequence[ currentSequence.length - 1 ];
                if(last != value) {
                    target = value;
                    got = true;
                }
            } else {
                target = value;
                got = true;
            }
        }
        currentSequence.push(target);
        return target;
    }

    const bless = (index) => {
        setCurrentBless(index);
        var timer = setInterval(() => {
            setCurrentBless(-1);
            clearTimeout(timer);
        }, 500);
        tasks.push(timer);
    }

    const bet = (index) => {
      if(locked) return;
      
      setLocked(true);
      var timer = setInterval(() => {
            setLocked(false);
          
            var answer = currentSequence[currentBetIndex]; 
            if(answer == index) {
                var next = currentBetIndex + 1;
                setCurrentBetIndex(next);
                if(next == currentSequence.length) {
                    win();
                }
            } else {
                lose();
            }
            
            clearTimeout(timer);
      }, 500);
      tasks.push(timer);
      
    }

    const win = () => {
        setScore(score + 1);
        setLocked(true);
        setStatus(4);
        var timer = setInterval(() => {
            sequence(score + 1);
            clearInterval(timer);
        }, 2000);
        tasks.push(timer);
    }
    
    const lose = () => {
        setScore(0);
        setLocked(true);
        setStatus(3);
        var timer = setInterval(() => {
            reset();
            clearInterval(timer);
        }, 2000);
        tasks.push(timer);
    }

    useEffect(() => {
        reset();
    }, []);

    return (
        <>
            <GameOptions 
                title="Repetição" 
                play={()=>startGame()}
                restart={()=>restart()}
                stop={()=>reset()}/>
            <Area>
                <Container>
                    <Header>
                        {status == 0 && "AGUARDANDO"}
                        {status == 1 && "DECORANDO"}
                        {status == 2 && "VAI!"}
                        {status == 3 && "ERROU!!"}
                        {status == 4 && "ACERTOU!!"}
                    </Header>
                    <Options>
                        {options.map((item, key) =>
                            <div key={key}>
                                {currentBless == key && <Option bless={true} onClick={() => bet(key)}>{item}</Option>}
                                {currentBless != key && <Option bless={false} onClick={() => bet(key)}>{item}</Option>}
                            </div>
                        )}
                    </Options>
                    <Footer>
                        <Buttons>
                            {status != 0 && 
                                <>
                                    <Button inative={true}><i className="fa fa-play"></i></Button>
                                    <Button onClick={() => startGame()}><i className="fa fa-refresh"></i></Button>
                                    <Button onClick={() => reset()}><i className="fa fa-stop"></i></Button>
                                </>
                            }
                            {status == 0 && 
                                <>
                                    <Button onClick={() => startGame()}><i className="fa fa-play"></i></Button>
                                    <Button inative={true}><i className="fa fa-refresh"></i></Button>
                                    <Button inative={true}><i className="fa fa-stop"></i></Button>
                                </>
                            }
                        </Buttons>
                        <Score>
                            <b>{score}</b>
                            <span>SCORE</span>
                        </Score>
                    </Footer>
                </Container>
            </Area>
        </>
    );
};

export default View;