import React, { Suspense, Fragment, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ChakraProvider, extendTheme, withDefaultColorScheme } from '@chakra-ui/react';

const Home = lazy(() => import('./Home'));
const About = lazy(() => import('./About'));

const customTheme = extendTheme(withDefaultColorScheme({ colorScheme: 'blue' }));

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ChakraProvider theme={customTheme}>
            <BrowserRouter>
                <Suspense fallback={Fragment}>
                    <Switch>
                        <Route strict exact path="/">
                            <Home />
                        </Route>
                        <Route strict exact path="/about">
                            <About />
                        </Route>
                    </Switch>
                </Suspense>
            </BrowserRouter>
        </ChakraProvider>
    </React.StrictMode>
);
