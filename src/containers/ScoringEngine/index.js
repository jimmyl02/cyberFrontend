import React, { Component } from "react";
import injectSheet from "react-jss";
import { Layout, Menu } from "antd";

import { styles } from "./styles";

const {
    Sider
} = Layout;

const {
    SubMenu, Item
} = Menu;

class unstyledScoringEngine extends Component {

    render() {

        const { classes } = this.props;

        return(

            <Layout style={{ minHeight: "100vh" }}>
                <Sider theme="light">
                    <Menu theme="light" mode="inline">
                        <Item className={classes.logo} disabled>Scoring Engine</Item>
                        <SubMenu
                            key="forensics"
                            title={<span>Forensics</span>}
                        >
                            
                        </SubMenu>
                        <SubMenu
                            key="usersandgroups"
                            title={<span>Users and Groups</span>}
                        >
                            
                        </SubMenu>
                        <SubMenu
                            key="localpolicies"
                            title={<span>Local Policies</span>}
                        >
                            
                        </SubMenu>
                        <SubMenu
                            key="commands"
                            title={<span>Commads with Text Matching</span>}
                        >
                            
                        </SubMenu>
                        <SubMenu
                            key="shares"
                            title={<span>Shares</span>}
                        >
                            
                        </SubMenu>
                        <SubMenu
                            key="programs"
                            title={<span>Programs</span>}
                        >
                            
                        </SubMenu>
                        <SubMenu
                            key="features"
                            title={<span>Features</span>}
                        >
                            
                        </SubMenu>
                        <SubMenu
                            key="files"
                            title={<span>Files</span>}
                        >
                            
                        </SubMenu>
                        <SubMenu
                            key="firefox"
                            title={<span>Firefox Settings</span>}
                        >
                            
                        </SubMenu>
                        <SubMenu
                            key="registry"
                            title={<span>Registry</span>}
                        >
                            
                        </SubMenu>
                    </Menu>
                </Sider>
            </Layout>

        );

    }

}

export const ScoringEngine = injectSheet(styles)(unstyledScoringEngine);