import styled, { keyframes } from 'styled-components';

export const Area = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: linear-gradient(to right, #201b15, #855b2c, #201b15);
`;

export const Container = styled.div`
    width: auto;
    height: auto;
    overflow: hidden;
    position: relative;
`;

export const Body = styled.div`
    width: auto;
    height: auto;
`;

export const Row = styled.div`
    width: auto;
    height: auto;
    display: flex;
`;

export const Spot = styled.div`
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgba(161, 161, 161, .1);
    position: relative;
`;

export const AppleAnimated = keyframes`
    0% {
        transform: scale(1.10);
    }
    50% {
        transform: scale(1.60);
    }
    100% {
        transform: scale(1.10);
    }
`;

export const Apple = styled.img`
    width: 90%;
    height: 90%;
    animation: ${AppleAnimated} 2s linear infinite;
`;

export const Score = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    margin-top: 20px;

    div {
        width: 50%;
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