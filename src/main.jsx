import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import About from './About';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <Route strict exact path="/">
                    <Home />
                </Route>
                <Route strict exact path="/about">
                    <About />
                </Route>
            </Switch>
        </BrowserRouter>
    </React.StrictMode>
);
