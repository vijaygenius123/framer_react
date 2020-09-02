import React, {useState} from 'react';
import './App.css';
import Home from "./components/Home";
import Base from "./components/Base";
import Header from "./components/Header";
import {Route, Switch} from 'react-router-dom'

function App() {
    const [pizza,setPizza] = useState({base: '', toppings: []})

    const addBase = (base) => {
        setPizza({...pizza, base})
    }

    return (
        <>
            <Header/>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/base">
                    <Base pizza={pizza} addBase={addBase}/>
                </Route>
            </Switch>
        </>
    );
}

export default App;
