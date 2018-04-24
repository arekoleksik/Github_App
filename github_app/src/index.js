import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './routes/home/home.component';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';
import userDetails from './routes/userDetails/userDetails.component'

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path="/" component={Home} />
            <Route path='/user/:userLogin' component={userDetails} />
        </div>
    </BrowserRouter>

    , document.getElementById('root'));
registerServiceWorker();
