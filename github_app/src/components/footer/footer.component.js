import React, { Component } from 'react';
import {Foot} from './footer.style';
import {Wrapper} from "../../utils/styles/global.style";


class Footer extends Component {
    render() {
        return (
            <Foot>
                <Wrapper>
                    Ⓒ Copyright 2018 - Arkadiusz Oleksik
                </Wrapper>
            </Foot>
        );
    }
}

export default Footer;