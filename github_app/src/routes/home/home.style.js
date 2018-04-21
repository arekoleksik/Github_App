import styled from 'styled-components';
import {colors} from "../../utils/styles/colors.style";

export const Container = styled.div`

`;

export const UserLoginBox = styled.div`
    border: 1px solid ${colors.dark};
    border-radius: 5px;
    color: ${colors.dark};
    margin: 50px auto;
    padding: 20px;
    text-align: center;
    width: 500px;
`;

export const UserInput = styled.input`
    border: 1px solid ${colors.light};
    margin-top: 15px;
    padding: 5px
    
`;
export const UserButton = styled.button`
    background-color: ${colors.dark};
    color: ${colors.white};
    border: 0;
    padding: 6px;
    margin-top: 15px;
    &:hover{
    
    }
`;