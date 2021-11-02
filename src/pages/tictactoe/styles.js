import styled, { keyframes } from 'styled-components';

export const Area = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: linear-gradient(to right, #0f2027, #1d4236, #0f2027);
`;

export const Container = styled.div`
    width: auto;
    height: auto;
`;

export const Body = styled.table`
    width: auto;
    height: auto;
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

export const Column = styled.td`
    border: 7px solid var(--color-dark); 
    width: 90px;
    height: 90px;
    text-align: center;

    :first-child {
        border-left: 0;
    }
    :last-child {
        border-right: 0;
    }
`;

export const Option = styled.span`
    font-size: 48px;
    font-family: 'Arial', sans-serif;
`;

export const Indicator = styled.div`
    width: 100%;
    height: auto;
    text-align: center;
    margin-bottom: 40px;

    span, b {
        font-size: 16px;
        color: var(--color-gray);
    }

    b {
        color: var(--color-white);
    }
`;

export const Score = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    margin-top: 40px;

    div {
        width: 33.3%;
        height: 60px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    span, b {
        font-size: 14px;
        color: var(--color-gray);
    }

    b {
        font-size: 20px;
        color: var(--color-white);
        margin-bottom: 5px;
    }
`;