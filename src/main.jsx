import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ChakraProvider, extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

import Home from './Home';
import About from './About';

const customTheme = extendTheme(withDefaultColorScheme({ colorScheme: 'blue' }));

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ChakraProvider theme={customTheme}>
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
        </ChakraProvider>
    </React.StrictMode>
);
