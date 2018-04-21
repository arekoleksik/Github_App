import styled from 'styled-components'
import {colors} from "../../utils/styles/colors.style";

export const UserDetailsContainer = styled.div`
    background-color: ${colors.white};
    
    a {
        text-decoration: none;
        color: ${colors.white};
            
        &:hover {
            color: ${colors.light}
        }
    }

`;

