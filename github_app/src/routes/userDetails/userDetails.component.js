import React, { Component } from 'react';

// Styles
import {
    Container,
} from './userDetails.styles';

import { Wrapper } from '../../utils/styles/global.style';

// Components
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import {githubConfig} from '../../config/config'

class userDetails extends Component {
    state = {
        details: {}
    };
    componentDidMount() {
        fetch(
            githubConfig.apiUrl +
            'users/' +
            this.props.match.params.userLogin +
            '?client_id=' +
            githubConfig.clientId +
            '&client_secret=' +
            githubConfig.clientSecret
        )
            .then(resp => resp.json())

            .then(result => {
                console.log(result);
                this.setState({
                details:result
            })});
    };
    render(){
        return (
            <userDetails>
                <Header/>
                <Wrapper>
                    {this.state.details.login}
                    {this.state.details.id}
                </Wrapper>

                <Footer/>
            </userDetails>
        );

    }
}

export default userDetails;