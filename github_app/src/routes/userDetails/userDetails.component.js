import React, { Component } from 'react';
import { render } from 'react-dom';
import {UserDetailsContainer} from './userDetails.style';
import {Wrapper} from "../../utils/styles/global.style";
import Header from '../../components/header/header.component'
import Footer from '../../components/footer/footer.component'

class userDetails extends Component {
    render() {
        return (
            <UserDetailsContainer>
                    <Header/>
                    <Wrapper>
                        <div> Detale</div>
                    </Wrapper>
                    <Footer/>
            </UserDetailsContainer>
        );
    }
}

export default userDetails;