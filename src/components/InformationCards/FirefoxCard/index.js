import React, { Component } from "react";
import injectSheet from "react-jss";
import { Card, Icon } from "antd";

import { styles } from "./styles";

class unstyledFirefoxCard extends Component {

    render() {

        const { classes, item, handleDelete } = this.props;

        return (
            <Card>
                <div className={classes.informationCard}>
                    <h4 className={classes.informationCardChild}>Description: </h4>
                    <p className={classes.informationCardChild}>{item.description}</p>
                    <Icon className={classes.informationCardChild} type="delete" theme="outlined"    
                        style={{ marginTop: "0.25em" }} onClick={() => handleDelete("firefox", item.id)}/>
                </div>
                <div className={classes.informationCard}>
                    <h4 className={classes.informationCardChild}>Points: </h4>
                    <p className={classes.informationCardChild}>{item.points}</p>
                </div>
                <div className={classes.informationCard}>
                    <h4 className={classes.informationCardChild}>Setting name: </h4>
                    <p className={classes.informationCardChild}>{item.settingName}</p>
                </div>
            </Card>
        );

    }
}

export const FirefoxCard = injectSheet(styles)(unstyledFirefoxCard);