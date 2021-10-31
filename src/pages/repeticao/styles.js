import styled, { keyframes } from 'styled-components';

export const Area = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(to right, #0f2027, #2c5364, #0f2027);
`;

export const Container = styled.div`
    width: 300px;
    height: auto;
    border-radius: 10px;
    overflow: hidden;
    background: linear-gradient(to right, #4286f4, #373B44);
    border-left: 4px solid #162464;
    border-bottom: 4px solid #162464;
`;

export const Header = styled.div`
    padding: 25px;
    text-align: center;
    color: white;
    font-size: 20px;
    border-top: 1px solid #0b0f22;
    border-bottom: 1px solid #0b0f22;
    background: linear-gradient(to right, #4286f4, #373B44);
`;

const FlashBorder = keyframes`
    0% {
      border-color: #4286f4;
    }
    50% {
      border-color: transparent;
    }
    100% {
      border-color: #4286f4;
    }
`;

export const Options = styled.div`
    display: grid;
    grid-gap: 10px;
    padding: 20px;
    background-color: #16204d;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;

    border-top: 6px solid black;
    border-bottom: 6px solid black;
    border-color: transparent;
    animation: ${FlashBorder} 2s linear infinite;
`;

export const Option = styled.button`
    width: 80px;
    height: 80px;
    background-color: ${(props) => props.bless ? 'red' : '#27336b'};
    border-left: 4px solid #080d22;
    border-bottom: 4px solid #080d22;
    color: white;
    font-size: 36px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Arial, sans-serif;
    cursor: pointer;
    transition: background-color .1s;

    :hover {
        background-color: #4554a0;
    }
    :active {
        border-left: 2px solid #040713;
        border-bottom: 2px solid #040713;
    }
`;

export const Footer = styled.div`
    display: flex; 
    flex-direction: row;
`;

export const Buttons = styled.div`
    width: 80%;
    height: 80px;
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-rows: 1fr;
    grid-template-columns: .27fr .27fr .27fr;
    grid-gap: 10px;
    border-right: 1px solid #0b0f22;
`;

export const Button = styled.button`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.inative ? 'gray' : '#27336b'};
    border-left: 4px solid ${(props) => props.inative ? '#444444' : '#080d22'};
    border-bottom: 4px solid ${(props) => props.inative ? '#444444' : '#080d22'};
    border-radius: 10px;
    color: white;
    font-size: 20px;
    cursor: ${(props) => props.inative ? 'not-allowed' : 'pointer'};;
    transition: background-color .2s;

    :hover {
        background-color: ${(props) => props.inative ? 'gray' : '#4554a0'};1a1a1a
    }
    :active {
        border-left: 2px solid ${(props) => props.inative ? '#1a1a1a' : '#040713'};
        border-bottom: 2px solid ${(props) => props.inative ? '#1a1a1a' : '#040713'};
    }
`;

export const Score = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 20px;

    b {
        font-size: 24px;
    }
    span {
        font-size: 14px;
        color: var(--color-gray);
    }
`;