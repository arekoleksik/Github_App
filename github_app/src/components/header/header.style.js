import styled from 'styled-components'
import {colors} from "../../utils/styles/colors.style";

export const Head = styled.div`
    background-color: ${colors.dark};
    padding: 25px 0;
    
    a {
        text-decoration: none;
        color: ${colors.white};
            
        &:hover {
            color: ${colors.light}
        }
    }

`;

