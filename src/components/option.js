import React, { useState } from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
    width: auto;
    height: auto;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    margin-bottom: 20px;
`;

const Label = styled.label`
    width: auto;
    height: auto;
    font-size: 14px;
    color: var(--color-gray);
`;

const Options = styled.div`
    width: auto;
    height: auto;
    display: flex;
    margin-top: 5px;
`;

const Option = styled.div`
    width: auto;
    height: auto;
    padding: 15px 17px 10px 17px;
    background-color: black;
    margin-right: 10px;
    border-radius: 5px;
    border-bottom: 2px solid ${(props) => props.selected ? 'var(--color-blue)' : 'transparent'};
    cursor: ${(props) => props.selected ? 'default' : 'pointer'};

    span {
        font-size: 16px;
        color: ${(props) => props.selected ? 'var(--color-white)' : 'var(--color-gray)'};
    }
`;

const Component = ({option}) => {

    const [current, setCurrent] = useState(option.current);

    const change = (value) => {
        if(current == value) return;
        option.current = value;
        setCurrent(value);
    }

    return (
        <Container>
            <Label>{option.display}</Label>
            <Options>
                {option.options.map((item, key) => 
                    <div key={key}>
                        {current == item.value &&
                            <Option onClick={()=>change(item.value)}
                                selected={true}>
                                <span>{item.display}</span>
                            </Option>
                        }
                        {current != item.value &&
                            <Option onClick={()=>change(item.value)}
                                selected={false}>
                                <span>{item.display}</span>
                            </Option>
                        }
                    </div>
                )}
            </Options>
        </Container>
    );
};

export default Component;