import styled from 'styled-components';

export const Area = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: linear-gradient(to right, #050124,#31074a,#050124);
`;

export const Container = styled.div`
    width: auto;
    height: auto;
`;

export const Body = styled.div`
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
`;

export const Stack = styled.div`
    width: 70px;
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 10px; margin-right: 10px;
    padding: 10px;
    border-radius: 5px;
    background-color: var(--color-dark);
`;

export const Block = styled.div`
    user-select: none;
    padding: 16px;
    margin: 0 0 8px 0;
    min-height: 50px;
    background-color: ${(props)=>props.snapshot.isDragging? "#263B4A" : "#456C86"};
    color: white;
`;