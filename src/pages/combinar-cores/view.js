import React, { useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import uuid from "uuid/v4";

import GameOptions from '../../components/game-options';

import { 
    Area,
    Container,
    Body,
    Stack,
    Block
} from './styles';

const View = () => {

    const [columns, setColumns] = useState({
        [uuid()]: {
          items: [
            { id: uuid() },
            { id: uuid() },
            { id: uuid() }
          ]
        },
        [uuid()]: {
          items: []
        },
        [uuid()]: {
          items: []
        },
        [uuid()]: {
          items: []
        },
        [uuid()]: {
          items: []
        }
    });
    
    const onDragEnd = (result, columns, setColumns) => {
      if (!result.destination) return;
      const { source, destination } = result;
    
      if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        setColumns({
          ...columns,
          [source.droppableId]: {
            ...sourceColumn,
            items: sourceItems
          },
          [destination.droppableId]: {
            ...destColumn,
            items: destItems
          }
        });
      } else {
        const column = columns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setColumns({
          ...columns,
          [source.droppableId]: {
            ...column,
            items: copiedItems
          }
        });
      }
    };

    useEffect(() => {
    }, []);

    return (
        <>
            <Area>
                <GameOptions 
                    title="Combinar Cores"/>
                <Container>
                    <Body>
                        <DragDropContext
                            onDragEnd={result => onDragEnd(result, columns, setColumns)}>
                            {Object.entries(columns).map(([columnId, column], index) => {
                                return (
                                    <Stack key={columnId}>
                                        <div style={{ width: "100%", height: 50 }}>
                                            <Droppable droppableId={columnId} key={columnId}>
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
                                                        >
                                                        {(provided, snapshot) => {
                                                            return (
                                                            <Block
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
            </Area>
        </>
    );
};

export default View;