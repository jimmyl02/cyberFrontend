import React, { Component } from "react";
import injectSheet from "react-jss";
import { Layout, Menu, List, Card, Button, Modal } from "antd";

import { styles } from "./styles";

import { ForensicsForm } from "../../components/ForensicsForm";
import { UsersForm } from "../../components/UsersForm";
import { GroupsForm } from "../../components/GroupsForm";
import { LocalPolicyForm } from "../../components/LocalPolicyForm";
import { CommandsForm } from "../../components/CommandsForm";
import { SharesForm } from "../../components/SharesForm";
import { ProgramsForm } from "../../components/ProgramsForm";
import { FeaturesAndServicesForm } from "../../components/FeaturesAndServicesForm";
import { FilesForm } from "../../components/FilesForm";
import { FirefoxForm } from "../../components/FirefoxForm";
import { RegistryForm } from "../../components/RegistryForm";

const {
    Sider, Content
} = Layout;

const {
    Item
} = Menu;

class unstyledScoringEngine extends Component {

    constructor(props) {

        super(props);

        // Format for data: description, points, required params maybe use delete so index are not updated [hacky but it works]
        this.state = {
            forensicsData: [],
            usersData: [],
            groupsData: [],
            localpolicyData: [],
            commandsData: [],
            sharesData: [],
            programsData: [],
            featuresAndServicesData: [],
            filesData: [],
            firefoxData: [],
            registryData: [],
            forensicsModal: false,
            usersModal: false,
            groupsModal: false,
            localpolicyModal: false,
            commandsModal: false,
            sharesModal: false,
            programsModal: false,
            featuresAndServicesModal: false,
            filesModal: false,
            firefoxModal: false,
            registryModal: false
        };

    }

    showModal = (modalName) => {
        this.setState({
            [modalName]: true
        });
    }

    cancelModal = (modalName) => {
        this.setState({
            [modalName]: false
        });
    }

    handleSubmit = (values, actions) => {
        console.log(values)
        
        switch(values.type) {
            case "forensics":
                this.setState({
                    forensicsData: [...this.state.forensicsData, {description: values.description, points: values.points, filepath: values.filepath, answer: values.answer}]
                });
                break;
            case "users":
                this.setState({
                    usersData: [...this.state.usersData, {description: values.description, points: values.points, username: values.username,
                        userPass: values.userPass, shouldChangeName: values.shouldChangeName, shouldPwExire: values.shouldPwExire}]
                });
                break;
            case "groups":
                this.setState({
                    groupsData: [...this.state.groupsData, {description: values.description, points: values.points, groupName: values.groupName,
                        shouldBeMember: values.shouldBeMember, username: values.username}]
                });
                break;
            case "localpolicy":
                this.setState({
                    localpolicyData: [...this.state.localpolicyData, {description: values.description, points: values.points,
                        policyName: values.policyName, condition: values.condition, expectedValue: values.expectedValue}]
                });
                break;
            case "commands":
                this.setState({
                    commandsData: [...this.state.commandsData, {description: values.description, points: values.points,
                        command: values.command, splitPosition: values.splitPosition, comparisonValue: values.comparisonValue, matchOrNot: values.matchOrNot}]
                });
                break;
            case "shares":
                this.setState({
                    sharesData: [...this.state.sharesData, {description: values.description, points: values.points, shareName: values.shareName,
                        sharePath: values.sharePath, authorized: values.authorized}]
                });
                break;
            case "programs":
                this.setState({
                    programsData: [...this.state.programsData, {description: values.description, points: values.points, programName: values.programName,
                        programPath: values.programPath, authorized: values.authorized}]
                });
                break;
            case "featuresAndServices":
                this.setState({
                    featuresAndServicesData: [...this.state.featuresAndServicesData, {description: values.description, points: values.points, servOrFeat: values.servOrFeat,
                        itemName: values.itemName, expectedEnabled: values.expectedEnabled}]
                });
                break;
            case "files":
                this.setState({
                    filesData: [...this.state.filesData, {description: values.description, points: values.points, filePath: values.filePath, authorized: values.authorized}]
                });
                break;
            case "firefox":
                this.setState({
                    firefoxData: [...this.state.firefoxData, {description: values.description, points: values.points, settingName: values.settingName}]
                });
                break;
            case "registry":
                this.setState({
                    registryData: [...this.state.registryData, {description: values.description, points: values.points, hKey: values.hKey, path: values.path,
                        key: values.key, checkingIndex: values.checkingIndex, condition: values.condition, expectedValue: values.expectedValue}]
                });
                break;
            default:
                console.log("WARNING: No type was specified, please contact Jimmy!")
        }
    }

    render() {

        const { classes } = this.props;

        return(
            <Layout style={{ minHeight: "100vh" }}>
                <Sider theme="light">
                    <Menu theme="light" mode="inline" defaultSelectedKeys={["edit"]}>
                        <Item className={classes.logo} disabled>Scorpio Scoring Engine</Item>
                        <Item key="edit">Edit Scoring Report</Item>
                        <Item key="scoreboard">Scoreboard</Item>
                    </Menu>
                </Sider>
                <Content className={classes.body}>
                    <h1>Report Name</h1>
                    <div className={classes.sectionTitle}>
                        <h3 className={classes.sectionTitleChild}>Forensics</h3>
                        <Button 
                            className={classes.sectionTitleChild} onClick={() => this.showModal("forensicsModal")}>Add New</Button>
                    </div>
                    <Modal
                        title="Add New"
                        visible={this.state.forensicsModal}
                        footer={null}
                        onCancel={() => this.cancelModal("forensicsModal")}
                    >
                        <ForensicsForm onSubmit={this.handleSubmit}/>
                    </Modal>
                    <List
                        bordered
                        dataSource={this.state.forensicsData}
                        renderItem={item => (
                            <List.Item>
                            <Card>{item.description}</Card>
                            </List.Item>
                        )}
                    />
                    <div className={classes.sectionTitle}>
                        <h3 className={classes.sectionTitleChild}>Users</h3>
                        <Button 
                            className={classes.sectionTitleChild} onClick={() => this.showModal("usersModal")}>Add New</Button>
                    </div>
                    <Modal
                        title="Add New"
                        visible={this.state.usersModal}
                        footer={null}
                        onCancel={() => this.cancelModal("usersModal")}
                    >
                        <UsersForm onSubmit={this.handleSubmit}/>
                    </Modal>
                    <List
                        bordered
                        dataSource={this.state.usersData}
                        renderItem={item => (
                            <List.Item>
                            <Card>{item.description}</Card>
                            </List.Item>
                        )}
                    />
                    <div className={classes.sectionTitle}>
                        <h3 className={classes.sectionTitleChild}>Groups</h3>
                        <Button 
                            className={classes.sectionTitleChild} onClick={() => this.showModal("groupsModal")}>Add New</Button>
                    </div>
                    <Modal
                        title="Add New"
                        visible={this.state.groupsModal}
                        footer={null}
                        onCancel={() => this.cancelModal("groupsModal")}
                    >
                        <GroupsForm onSubmit={this.handleSubmit}/>
                    </Modal>
                    <List
                        bordered
                        dataSource={this.state.groupsData}
                        renderItem={item => (
                            <List.Item>
                            <Card>{item.description}</Card>
                            </List.Item>
                        )}
                    />
                    <div className={classes.sectionTitle}>
                        <h3 className={classes.sectionTitleChild}>Local Policies</h3>
                        <Button 
                            className={classes.sectionTitleChild} onClick={() => this.showModal("localpolicyModal")}>Add New</Button>
                    </div>
                    <Modal
                        title="Add New"
                        visible={this.state.localpolicyModal}
                        footer={null}
                        onCancel={() => this.cancelModal("localpolicyModal")}
                    >
                        <LocalPolicyForm onSubmit={this.handleSubmit}/>
                    </Modal>
                    <List
                    bordered
                    dataSource={this.state.localpolicyData}
                    renderItem={item => (
                        <List.Item>
                        <Card>{item.description}</Card>
                        </List.Item>
                    )}
                    />
                    <div className={classes.sectionTitle}>
                        <h3 className={classes.sectionTitleChild}>Commands with Text Output</h3>
                        <Button 
                            className={classes.sectionTitleChild} onClick={() => this.showModal("commandsModal")}>Add New</Button>
                    </div>
                    <Modal
                        title="Add New"
                        visible={this.state.commandsModal}
                        footer={null}
                        onCancel={() => this.cancelModal("commandsModal")}
                    >
                        <CommandsForm onSubmit={this.handleSubmit} />
                    </Modal>
                    <List
                    bordered
                    dataSource={this.state.commandsData}
                    renderItem={item => (
                        <List.Item>
                        <Card>{item.description}</Card>
                        </List.Item>
                    )}
                    />
                    <div className={classes.sectionTitle}>
                        <h3 className={classes.sectionTitleChild}>Shares</h3>
                        <Button 
                            className={classes.sectionTitleChild} onClick={() => this.showModal("sharesModal")}>Add New</Button>
                    </div>
                    <Modal
                        title="Add New"
                        visible={this.state.sharesModal}
                        footer={null}
                        onCancel={() => this.cancelModal("sharesModal")}
                    >
                        <SharesForm onSubmit={this.handleSubmit} />
                    </Modal>
                    <List
                    bordered
                    dataSource={this.state.sharesData}
                    renderItem={item => (
                        <List.Item>
                        <Card>{item.description}</Card>
                        </List.Item>
                    )}
                    />
                    <div className={classes.sectionTitle}>
                        <h3 className={classes.sectionTitleChild}>Programs</h3>
                        <Button 
                            className={classes.sectionTitleChild} onClick={() => this.showModal("programsModal")}>Add New</Button>
                    </div>
                    <Modal
                        title="Add New"
                        visible={this.state.programsModal}
                        footer={null}
                        onCancel={() => this.cancelModal("programsModal")}
                    >
                        <ProgramsForm onSubmit={this.handleSubmit} />
                    </Modal>
                    <List
                    bordered
                    dataSource={this.state.programsData}
                    renderItem={item => (
                        <List.Item>
                        <Card>{item.description}</Card>
                        </List.Item>
                    )}
                    />
                    <div className={classes.sectionTitle}>
                        <h3 className={classes.sectionTitleChild}>Features and Services</h3>
                        <Button 
                            className={classes.sectionTitleChild} onClick={() => this.showModal("featuresAndServicesModal")}>Add New</Button>
                    </div>
                    <Modal
                        title="Add New"
                        visible={this.state.featuresAndServicesModal}
                        footer={null}
                        onCancel={() => this.cancelModal("featuresAndServicesModal")}
                    >
                        <FeaturesAndServicesForm onSubmit={this.handleSubmit} />
                    </Modal>
                    <List
                    bordered
                    dataSource={this.state.featuresAndServicesData}
                    renderItem={item => (
                        <List.Item>
                        <Card>{item.description}</Card>
                        </List.Item>
                    )}
                    />
                    <div className={classes.sectionTitle}>
                        <h3 className={classes.sectionTitleChild}>Files</h3>
                        <Button 
                            className={classes.sectionTitleChild} onClick={() => this.showModal("filesModal")}>Add New</Button>
                    </div>
                    <Modal
                        title="Add New"
                        visible={this.state.filesModal}
                        footer={null}
                        onCancel={() => this.cancelModal("filesModal")}
                    >
                        <FilesForm onSubmit={this.handleSubmit} />
                    </Modal>
                    <List
                    bordered
                    dataSource={this.state.filesData}
                    renderItem={item => (
                        <List.Item>
                        <Card>{item.description}</Card>
                        </List.Item>
                    )}
                    />
                    <div className={classes.sectionTitle}>
                        <h3 className={classes.sectionTitleChild}>Firefox Settings</h3>
                        <Button 
                            className={classes.sectionTitleChild} onClick={() => this.showModal("firefoxModal")}>Add New</Button>
                    </div>
                    <Modal
                        title="Add New"
                        visible={this.state.firefoxModal}
                        footer={null}
                        onCancel={() => this.cancelModal("firefoxModal")}
                    >
                        <FirefoxForm onSubmit={this.handleSubmit} />
                    </Modal>
                    <List
                    bordered
                    dataSource={this.state.firefoxData}
                    renderItem={item => (
                        <List.Item>
                        <Card>{item.description}</Card>
                        </List.Item>
                    )}
                    />
                    <div className={classes.sectionTitle}>
                        <h3 className={classes.sectionTitleChild}>Registry</h3>
                        <Button 
                            className={classes.sectionTitleChild} onClick={() => this.showModal("registryModal")}>Add New</Button>
                    </div>
                    <Modal
                        title="Add New"
                        visible={this.state.registryModal}
                        footer={null}
                        onCancel={() => this.cancelModal("registryModal")}
                    >
                        <RegistryForm onSubmit={this.handleSubmit} />
                    </Modal>
                    <List
                    bordered
                    dataSource={this.state.registryData}
                    renderItem={item => (
                        <List.Item>
                        <Card>{item.description}</Card>
                        </List.Item>
                    )}
                    />
                </Content>
            </Layout>

        );

    }

}

export const ScoringEngine = injectSheet(styles)(unstyledScoringEngine);