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
    width: auto;
    height: auto;
`;

export const Header = styled.div`
    width: 100%;
    height: 50px;
    border-radius: 10px;
    margin-bottom: 40px;
    padding-top: 10px;
    padding-bottom: 10px;
    display: grid;
    grid-template-columns: .45fr .45fr;
    grid-template-rows: 1fr;
    align-items: center;
    justify-content: center;
    grid-gap: 20px;
    background-color: var(--color-dark);
`;

export const Indicator = styled.div`
    width: 100%;
    height: 70%;
    line-height: 40px;
    margin: 0 auto;
    background-color: var(--color-dark-blue);
    border-radius: 10px;
    border-bottom: 3px solid ${(props) => props.active ? 'var(--color-blue)' : '#3e3e3e'};

    span, b {
        font-size: 24px;
    }

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

export const Option = styled.td`
    border: 7px solid var(--color-dark-blue); 
    width: 90px;
    height: 90px;
    text-align: center;
    font-size: 48px;

    :first-child {
        border-left: 0;
    }
    :last-child {
        border-right: 0;
    }
`;