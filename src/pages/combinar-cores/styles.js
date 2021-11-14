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
    width: auto;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 5px; margin-right: 5px;
    padding: 15px;
    border-radius: 5px;
    background-color: var(--color-light-dark);
    border: 3px solid var(--color-dark);
    ${(props)=>{
        switch (props.full) {
            case 1:
                return `
                    border-color: var(--color-light-blue);
                `;
            case 2:
                return `
                    border-color: var(--color-light-pink);
                `;
            case 3:
                return `
                    border-color: var(--color-light-green);
                `;
            case 4:
                return `
                    border-color: var(--color-light-orange);
                `;
            case 5:
                return `
                    border-color: var(--color-dark-blue);
                `;
            default:
                break;
        }
    }}

    @media (max-width:600px) {
        height: 250px;
        padding: 10px;
    }  
    @media (max-width:400px) {
        height: 185px;
        padding: 5px;
    }  
`;

export const Block = styled.div`
    user-select: none;
    width: 50px;
    height: 50px;
    margin-bottom: 12px;
    color: white;
    border-radius: 50%;

    :hover {
        opacity: ${(props)=>props.isDragDisabled ? 1 : .4}
    }

    ${(props)=>{
        switch (props.type) {
            case 1:
                return `
                    background-color: var(--color-light-blue);
                `;
            case 2:
                return `
                    background-color: var(--color-light-pink);
                `;
            case 3:
                return `
                    background-color: var(--color-light-green);
                `;
            case 4:
                return `
                    background-color: var(--color-light-orange);
                `;
            case 5:
                return `
                    background-color: var(--color-dark-blue);
                `;
            default:
                break;
        }
    }}

    @media (max-width:600px) {
        width: 40px;
        height: 40px;
    }  
    @media (max-width:400px) {
        width: 30px;
        height: 30px;
        margin-bottom: 8px;
    }  
`;