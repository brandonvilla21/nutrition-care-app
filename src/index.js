import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import CssBaseline from '@material-ui/core/CssBaseline';

import { BrowserRouter } from 'react-router-dom';

const app = (
    <div>
        <CssBaseline />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </div>
);

ReactDOM.render( app, document.getElementById('root') );
registerServiceWorker();
