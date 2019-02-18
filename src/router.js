import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Splash } from './containers/Splash';
import { Scoreboard } from './containers/Scoreboard';
import { ScoringEngine } from './containers/ScoringEngine';

//Tmp import
import { ScoringEngineAuth } from './containers/ScoringEngineAuth';


export class RootRouter extends Component {

    render() {

        return (

            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Splash} />
                    <Route path='/scoreboard' component={Scoreboard} />
                    <Route path='/scoringengine' component={ScoringEngine} />
                    <Route path='/login' component={ScoringEngineAuth}/>
                    <Route path='/createreport' component={ScoringEngineAuth} />
                </Switch>
            </BrowserRouter>

        );

    }

}