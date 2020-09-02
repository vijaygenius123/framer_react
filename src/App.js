import React from 'react';
import './App.css';
import Home from "./components/Home";
import Base from "./components/Base";
import Header from "./components/Header";
import {Route, Switch} from 'react-router-dom'

function App() {



    return (
        <>
            <Header/>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/base">
                    <Base/>
                </Route>
            </Switch>
        </>
    );
}

export default App;
