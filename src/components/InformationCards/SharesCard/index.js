import React, { Component } from "react";
import injectSheet from "react-jss";
import { Card, Icon } from "antd";

import { styles } from "./styles";

class unstyledSharesCard extends Component {

    render() {

        const { classes, item, handleDelete } = this.props;

        return (
            <Card>
                <div className={classes.informationCard}>
                    <h4 className={classes.informationCardChild}>Description: </h4>
                    <p className={classes.informationCardChild}>{item.description}</p>
                    <Icon className={classes.informationCardChild} type="delete" theme="outlined"    
                        style={{ marginTop: "0.25em" }} onClick={() => handleDelete("shares", item.id)}/>
                </div>
                <div className={classes.informationCard}>
                    <h4 className={classes.informationCardChild}>Points: </h4>
                    <p className={classes.informationCardChild}>{item.points}</p>
                </div>
                <div className={classes.informationCard}>
                    <h4 className={classes.informationCardChild}>Share name: </h4>
                    <p className={classes.informationCardChild}>{item.shareName}</p>
                </div>
                <div className={classes.informationCard}>
                    <h4 className={classes.informationCardChild}>Share path: </h4>
                    <p className={classes.informationCardChild}>{item.sharePath}</p>
                </div>
                <div className={classes.informationCard}>
                    <h4 className={classes.informationCardChild}>Authorized: </h4>
                    <p className={classes.informationCardChild}>{item.authorized}</p>
                </div>
            </Card>
        );

    }
}

export const SharesCard = injectSheet(styles)(unstyledSharesCard);