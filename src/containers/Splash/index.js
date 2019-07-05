import React, { Component } from "react";
import injectSheet from "react-jss";
import { Link } from "react-router-dom";
import { Layout, Button } from "antd";

import { styles } from "./styles";

import Logo from "../../resources/scorpio.png";

const { Header } = Layout;

class unstyledSplash extends Component {

    render() {

        const { classes } = this.props;

        return(

            <div className={classes.body}>
                <Header className={ classes.headerBar }>
                    <div
                        style={{
                        display: 'flex',
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'inline'
                        }}
                    >
                        <img className={ classes.logo } src={ Logo } alt='Logo' />
                        <span
                        style={{
                            paddingLeft: 25,
                            fontSize: 20,
                            fontWeight: 'lighter'
                        }}
                        >
                            Scorpio
                        </span>
                    </div>
                </Header>
                <div className={classes.titleContainer}>
                    <h1>TOOLS FOR CYBERSECURITY EDUCATION</h1>
                    <div className={classes.buttonHolder}>
                        <Button size="large">
                            <Link to="/scoringengine">Scorpio Scoring Engine</Link>
                        </Button>
                    </div>
                </div>
            </div>

        );

    }

}

export const Splash = injectSheet(styles)(unstyledSplash);