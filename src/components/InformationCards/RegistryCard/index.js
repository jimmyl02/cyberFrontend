import React, { Component } from "react";
import injectSheet from "react-jss";
import { Card, Icon } from "antd";

import { styles } from "./styles";

class unstyledRegistryCard extends Component {

    render() {

        const { classes, item, handleDelete } = this.props;

        return (
            <Card>
                <div className={classes.informationCard}>
                    <h4 className={classes.informationCardChild}>Description: </h4>
                    <p className={classes.informationCardChild}>{item.description}</p>
                    <Icon className={classes.informationCardChild} type="delete" theme="outlined"    
                        style={{ marginTop: "0.25em" }} onClick={() => handleDelete("registry", item.id)}/>
                </div>
                <div className={classes.informationCard}>
                    <h4 className={classes.informationCardChild}>Points: </h4>
                    <p className={classes.informationCardChild}>{item.points}</p>
                </div>
                <div className={classes.informationCard}>
                    <h4 className={classes.informationCardChild}>HKey: </h4>
                    <p className={classes.informationCardChild}>{item.hKey}</p>
                </div>
                <div className={classes.informationCard}>
                    <h4 className={classes.informationCardChild}>Path: </h4>
                    <p className={classes.informationCardChild}>{item.path}</p>
                </div>
                <div className={classes.informationCard}>
                    <h4 className={classes.informationCardChild}>Key: </h4>
                    <p className={classes.informationCardChild}>{item.key}</p>
                </div>
                <div className={classes.informationCard}>
                    <h4 className={classes.informationCardChild}>Checking index: </h4>
                    <p className={classes.informationCardChild}>{item.checkingIndex}</p>
                </div>
                <div className={classes.informationCard}>
                    <h4 className={classes.informationCardChild}>Condition: </h4>
                    <p className={classes.informationCardChild}>{item.condition}</p>
                </div>
                <div className={classes.informationCard}>
                    <h4 className={classes.informationCardChild}>Value to compare to: </h4>
                    <p className={classes.informationCardChild}>{item.expectedValue}</p>
                </div>
            </Card>
        );

    }
}

export const RegistryCard = injectSheet(styles)(unstyledRegistryCard);