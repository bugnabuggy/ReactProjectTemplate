import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { getRouts } from './router';
//import {} from 'react-router';


ReactDOM.render(
    <div className='container-div-width-100'>
        <Router>
            {getRouts()}
        </Router>
    </div>,
    document.getElementById('app')
);