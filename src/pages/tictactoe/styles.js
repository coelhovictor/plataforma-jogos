import styled, { keyframes } from 'styled-components';

export const Area = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to right, #0f2027, #1d4236, #0f2027);
`;

export const Container = styled.div`
    width: 300px;
    height: 400px;
`;

export const Header = styled.div`
    width: 100%;
    height: 15%;
    margin-bottom: 5%;
    display: grid;
    grid-template-columns: .5fr .5fr;
    grid-template-rows: 1fr;
    align-items: center;
    grid-gap: 20px;
`;

export const Indicator = styled.div`
    width: 100%;
    height: 70%;
    margin: 0 auto;
    background-color: var(--color-dark-blue);
    border-radius: 10px;
    border: 1px solid ${(props) => props.active ? 'var(--color-blue-three)' : '#3e3e3e'};
    border-bottom: 3px solid ${(props) => props.active ? 'var(--color-blue)' : '#3e3e3e'};
`;

export const Body = styled.table`
    width: 100%;
    height: 80%;
    margin: 0 auto;
    border-collapse: collapse;
`;

export const Row = styled.tr`
    :first-child td {
        border-top: 0;
    }
    :last-child td {
        border-bottom: 0;
    }
`;

export const Option = styled.td`
    border: 7px solid var(--color-dark-blue); 
    width: 40px;
    height: 40px;

    :first-child {
        border-left: 0;
    }
    :last-child {
        border-right: 0;
    }
`;