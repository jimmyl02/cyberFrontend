import React, { Component } from "react";
import injectSheet from "react-jss";
import { Card, Icon } from "antd";

import { styles } from "./styles";

class unstyledFilesCard extends Component {

    render() {

        const { classes, item, handleDelete } = this.props;

        return (
            <Card>
                <div className={classes.informationCard}>
                    <h4 className={classes.informationCardChild}>Description: </h4>
                    <p className={classes.informationCardChild}>{item.description}</p>
                    <Icon className={classes.informationCardChild} type="delete" theme="outlined"    
                        style={{ marginTop: "0.25em" }} onClick={() => handleDelete("files", item.id)}/>
                </div>
                <div className={classes.informationCard}>
                    <h4 className={classes.informationCardChild}>Points: </h4>
                    <p className={classes.informationCardChild}>{item.points}</p>
                </div>
                <div className={classes.informationCard}>
                    <h4 className={classes.informationCardChild}>File path: </h4>
                    <p className={classes.informationCardChild}>{item.filePath}</p>
                </div>
                <div className={classes.informationCard}>
                    <h4 className={classes.informationCardChild}>Authorized: </h4>
                    <p className={classes.informationCardChild}>{item.authorized}</p>
                </div>
            </Card>
        );

    }
}

export const FilesCard = injectSheet(styles)(unstyledFilesCard);