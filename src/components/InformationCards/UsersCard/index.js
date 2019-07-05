import React, { Component } from "react";
import injectSheet from "react-jss";
import { Card, Icon } from "antd";

import { styles } from "./styles";

class unstyledUsersCard extends Component {

    render() {

        const { classes, item, handleDelete } = this.props;

        return (
            <Card>
                <div className={classes.informationCard}>
                    <h4 className={classes.informationCardChild}>Description: </h4>
                    <p className={classes.informationCardChild}>{item.description}</p>
                    <Icon className={classes.informationCardChild} type="delete" theme="outlined"    
                        style={{ marginTop: "0.25em" }} onClick={() => handleDelete("users", item.id)}/>
                </div>
                <div className={classes.informationCard}>
                    <h4 className={classes.informationCardChild}>Points: </h4>
                    <p className={classes.informationCardChild}>{item.points}</p>
                </div>
                <div className={classes.informationCard}>
                    <h4 className={classes.informationCardChild}>Username: </h4>
                    <p className={classes.informationCardChild}>{item.username}</p>
                </div>
                <div className={classes.informationCard}>
                    <h4 className={classes.informationCardChild}>User password: </h4>
                    <p className={classes.informationCardChild}>{item.userPass}</p>
                </div>
                <div className={classes.informationCard}>
                    <h4 className={classes.informationCardChild}>Should they exist: </h4>
                    <p className={classes.informationCardChild}>{item.shouldExist}</p>
                </div>
                <div className={classes.informationCard}>
                    <h4 className={classes.informationCardChild}>Should they change their password: </h4>
                    <p className={classes.informationCardChild}>{item.shouldChangePw}</p>
                </div>
                <div className={classes.informationCard}>
                    <h4 className={classes.informationCardChild}>Should they change their name: </h4>
                    <p className={classes.informationCardChild}>{item.shouldChangeName}</p>
                </div>
                <div className={classes.informationCard}>
                    <h4 className={classes.informationCardChild}>Should their password expire: </h4>
                    <p className={classes.informationCardChild}>{item.shouldPwExpire}</p>
                </div>
            </Card>
        );

    }
}

export const UsersCard = injectSheet(styles)(unstyledUsersCard);