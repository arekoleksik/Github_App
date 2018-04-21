import React, { Component } from 'react';
import {Head} from './header.style';
import {Wrapper} from "../../utils/styles/global.style";

class Header extends Component {
    render() {
        return (
            <Head>
                <Wrapper>
                    <a href="/">Github Users example App</a>
                </Wrapper>
            </Head>
        );
    }
}

export default Header;