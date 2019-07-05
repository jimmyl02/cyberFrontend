import React, { Component } from "react";
import injectSheet from "react-jss";
import { Card, Icon } from "antd";

import { styles } from "./styles";

class unstyledLocalPolicyCard extends Component {

    render() {

        const { classes, item, handleDelete } = this.props;

        return (
            <Card>
                <div className={classes.informationCard}>
                    <h4 className={classes.informationCardChild}>Description: </h4>
                    <p className={classes.informationCardChild}>{item.description}</p>
                    <Icon className={classes.informationCardChild} type="delete" theme="outlined"    
                        style={{ marginTop: "0.25em" }} onClick={() => handleDelete("localpolicy", item.id)}/>
                </div>
                <div className={classes.informationCard}>
                    <h4 className={classes.informationCardChild}>Points: </h4>
                    <p className={classes.informationCardChild}>{item.points}</p>
                </div>
                <div className={classes.informationCard}>
                    <h4 className={classes.informationCardChild}>Policy name: </h4>
                    <p className={classes.informationCardChild}>{item.policyName}</p>
                </div>
                <div className={classes.informationCard}>
                    <h4 className={classes.informationCardChild}>Condition: </h4>
                    <p className={classes.informationCardChild}>{item.condition}</p>
                </div>
                <div className={classes.informationCard}>
                    <h4 className={classes.informationCardChild}>Expected value: </h4>
                    <p className={classes.informationCardChild}>{item.expectedValue}</p>
                </div>
            </Card>
        );

    }
}

export const LocalPolicyCard = injectSheet(styles)(unstyledLocalPolicyCard);