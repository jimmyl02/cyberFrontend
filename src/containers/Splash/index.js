import React, { Component } from "react";
import injectSheet from "react-jss";
import { Link } from "react-router-dom";

import { styles } from "./styles";

class unstyledSplash extends Component {

    render() {

        const { classes } = this.props;

        return(

            <div className={classes.splitContainer}>
                <div className={classes.splitHalfLeft}>
                    <Link to="/scoringengine">
                        <h1>Scoring Engine</h1>
                    </Link>
                </div>
                <div className={classes.splitHalfRight}>
                    <Link to="/scoreboard">
                        <h1>Scoreboard</h1>
                    </Link>
                </div>
            </div>

        );

    }

}

export const Splash = injectSheet(styles)(unstyledSplash);