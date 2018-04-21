import React, { Component } from 'react';

//Components
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';

//Styles
import {Wrapper} from "../../utils/styles/global.style";
import {Container, UserLoginBox, UserInput, UserButton} from './home.style';

class Home extends Component {
    state={
        users: [],
        value: ''

    };

    componentDidMount(){
        console.log('state component mount', this.state)
    };
    componentDidUpdate(){
        console.log('state component update', this.state)
    };

    addNewUser = ()=>{
      console.log('addNewUser '+this.state.value);
        this.setState({
            users:[...this.state.value, this.state.inputValue],
            inputValue: ''
        })

    };
    userOnChange = (event)=>{
        this.setState({value: event.target.value});
    };

    render() {
        return (
            <Container>
                <Header/>
                    <Wrapper>
                        <UserLoginBox>
                            <div>Please add Github user name to observable</div>
                                <UserInput ref="userInput" onChange={this.userOnChange} value={this.state.inputValue}/>
                                <UserButton onClick={this.addNewUser}>Add user</UserButton>
                        </UserLoginBox>
                    </Wrapper>
                <Footer/>
            </Container>
        );
    }
}

export default Home;
