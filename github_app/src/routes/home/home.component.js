import React, { Component } from 'react';

//Components
import Header from '../../components/header/header.component';
import Footer from '../../components/footer/footer.component';
import userDetails from '../../routes/userDetails/userDetails.component'
//Styles
import {Wrapper} from "../../utils/styles/global.style";
import {
    Container,
    UserLoginBox,
    UserInput,
    UserButton,
    UsersContainer} from './home.style';
import {Link} from 'react-router-dom'

class Home extends Component {
    state={
        users: [],
        inputValue: ''
    };

    componentDidMount(){
        console.log('state component mount', this.state)
    };
    componentDidUpdate(){
        console.log('state component update', this.state)
    };

    addNewUser = ()=>{
      console.log('addNewUser '+this.state.inputValue);
        this.setState({
            users:[...this.state.users, this.state.inputValue],
            inputValue: ''
        })

    };
    userOnChange = (event)=>{
        this.setState({inputValue: event.target.value});
    };

    renderUsers = () => this.state.users.map((item) => <div key={item}><Link to={`/user/${item}`}>{item}</Link></div>);

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
                        <UsersContainer>
                            {this.renderUsers()}
                        </UsersContainer>
                    </Wrapper>
                <Footer/>
            </Container>
        );
    }
}

export default Home;
