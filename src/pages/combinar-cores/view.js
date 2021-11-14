import React, { useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import uuid from "uuid/v4";

import GameOptions from '../../components/game-options';
import GameScore from '../../components/game-score';

import { 
    Area,
    Container,
    Body,
    Stack,
    Block
} from './styles';

const View = () => {

    const [status, setStatus] = useState(0);
    const [score, setScore] = useState(0);
    const [moves, setMoves] = useState(0);

    const Size = {
        columns: 5,
        rows: 4,
        max: 5
    };

    const startGame = () => {
        if(status === 1) return;
        reset();
        setStatus(1);
    }

    const restart = () => {
        reset();
        setStatus(1);
    }

    const reset = () => {
        setStatus(0);
        setMoves(0);
        if(status !== 0) setColumns(setupColumns());
    }

    const setupColumns = () => {
        let rows = Size.rows;
        let columnsSize = Size.columns;
        let random = randomItems(columnsSize, rows);

        let target = {};

        for(let i = 0; i < columnsSize; i++) {

            let items = [];

            for(let iB = 0; iB < rows; iB++) {
                items.push({ id: uuid(), type: random[(i * rows) + iB]});
            }

            target[uuid()] = {
                items: items,
                disabled: false,
                full: false
            };
        }

        return target;
    }

    const randomItems = (columns, max) => {
        let target = [];

        for(let x = 0; x < columns; x++) {
            for(let y = 0; y < max; y++) {
                target[(x * max) + y] = x + 1;
            }
        }
        target.sort(() => Math.random() - 0.5);
        return target;
    }

    const checkWinner = (nColumns) => {
        let allFull = true;
        for(let item in nColumns) {
            if(!nColumns[item].full) allFull = false;
        }
        if(allFull) {
            setStatus(2);
            setScore(score + 1);
        }
    }

    const checkFull = (items) => {
        if(items.length === Size.rows) {
            let count = 0;
            let last = 0;
            for(let item in items) {
                if(last === 0 || items[item].type === last) {
                    count++;
                } else {
                    count = 0;
                }
                last = items[item].type;
            }
            if(count === Size.rows) return last;
        }
        return 0;
    }

    const [columns, setColumns] = useState(setupColumns);
    
    const onDragEnd = (result, columns, setColumns) => {
      if (!result.destination) return;
      const { source, destination } = result;
      let nColumns = {};
    
      if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const sourceDisabled = (sourceItems.length - 1) === Size.max;
        const destItems = [...destColumn.items];
        const destDisabled = (destItems.length + 1) === Size.max;
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        const sourceFull = checkFull(sourceItems);
        const destFull = checkFull(destItems);
        nColumns = {
          ...columns,
          [source.droppableId]: {
            ...sourceColumn,
            items: sourceItems,
            disabled: sourceDisabled,
            full: sourceFull
          },
          [destination.droppableId]: {
            ...destColumn,
            items: destItems,
            disabled: destDisabled,
            full: destFull
          }
        };
      } else {
        const column = columns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        nColumns = {
          ...columns,
          [source.droppableId]: {
            ...column,
            items: copiedItems
          }
        };
      }
      setMoves(moves + 1);
      setColumns(nColumns);
      checkWinner(nColumns);
    };

    useEffect(() => {
        reset();
        setScore(0);
    }, []);

    return (
        <>
            <Area>
                <GameOptions 
                    title="Combinar Cores"
                    play={()=>startGame()}
                    stop={()=>reset()}/>
                <Container>
                    <Body>
                        <DragDropContext
                            onDragEnd={result => onDragEnd(result, columns, setColumns)}>
                            {Object.entries(columns).map(([columnId, column], index) => {
                                return (
                                    <Stack key={columnId} full={column.full}>
                                        <div style={{ width: "100%", height: 50 }}>
                                            <Droppable droppableId={columnId} key={columnId} isDropDisabled={column.disabled || status !== 1}>
                                            {(provided, snapshot) => {
                                                return (
                                                <div
                                                    {...provided.droppableProps}
                                                    ref={provided.innerRef}
                                                    style={{ width: "100%", minHeight: "100%" }}>
                                                    {column.items.map((item, index) => {
                                                        return (
                                                            <Draggable
                                                            key={item.id}
                                                            draggableId={item.id}
                                                            index={index}
                                                            isDragDisabled={index !== 0 || status !== 1}
                                                            >
                                                            {(provided, snapshot) => {
                                                                return (
                                                                <Block
                                                                    type={item.type}
                                                                    snapshot={snapshot}
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    style={{
                                                                        ...provided.draggableProps.style,
                                                                        left: "0 !important",
                                                                        top: "0 !important"
                                                                    }}>
                                                                </Block>
                                                                );
                                                            }}
                                                            </Draggable>
                                                        );
                                                    })}
                                                    {provided.placeholder}
                                                </div>
                                                );
                                            }}
                                            </Droppable>
                                        </div>
                                    </Stack>
                                );
                            })}
                        </DragDropContext>
                        </Body>
                </Container>
                <GameScore 
                    options={{  
                        items: [
                            { title: "Score", icon: "fas fa-trophy", value: score },
                            { title: "Movimentos", icon: "fas fa-expand-arrows-alt", value: moves }
                        ]
                    }}/>
            </Area>
        </>
    );
};

export default View;