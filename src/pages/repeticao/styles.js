import styled, { keyframes } from 'styled-components';

export const Area = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: linear-gradient(to right, #0f2027, #2c5364, #0f2027);
`;

export const Container = styled.div`
    width: 300px;
    height: auto;
    border-radius: 10px;
    overflow: hidden;
    background: linear-gradient(to right, #1e5bbf, #373B44);
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
    background-color: ${(props) => props.bless ? 'var(--color-blue)' : '#27336b'};
    border-left: ${(props) => props.bless ? '2px solid #040713' : '4px solid #080d22'};
    border-bottom: ${(props) => props.bless ? '2px solid #040713' : '4px solid #080d22'};
    color: white;
    font-size: 36px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Arial, sans-serif;
    cursor: pointer;
    transition: background-color .1s;

    :active {
        border-left: 2px solid #040713;
        border-bottom: 2px solid #040713;
    }
`;

export const Footer = styled.div`
    display: flex; 
    flex-direction: row;
`;

export const Score = styled.div`
    width: 50%;
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