import React, { Component } from "react";
import injectSheet from "react-jss";
import { Layout, Menu, List, Button, Modal, Input , notification} from "antd";
import { Link } from "react-router-dom";

import { styles } from "./styles";

import { ForensicsForm } from "../../components/Forms/ForensicsForm";
import { UsersForm } from "../../components/Forms/UsersForm";
import { GroupsForm } from "../../components/Forms/GroupsForm";
import { LocalPolicyForm } from "../../components/Forms/LocalPolicyForm";
import { CommandsForm } from "../../components/Forms/CommandsForm";
import { SharesForm } from "../../components/Forms/SharesForm";
import { ProgramsForm } from "../../components/Forms/ProgramsForm";
import { FeaturesAndServicesForm } from "../../components/Forms/FeaturesAndServicesForm";
import { FilesForm } from "../../components/Forms/FilesForm";
import { FirefoxForm } from "../../components/Forms/FirefoxForm";
import { RegistryForm } from "../../components/Forms/RegistryForm";
import { InputForm } from "../../components/Forms/InputForm";

import { ForensicsCard } from "../../components/InformationCards/ForensicsCard";
import { UsersCard } from "../../components/InformationCards/UsersCard";
import { GroupsCard } from "../../components/InformationCards/GroupsCard";
import { LocalPolicyCard } from "../../components/InformationCards/LocalPolicyCard";
import { CommandsCard } from "../../components/InformationCards/CommandsCard";
import { SharesCard } from "../../components/InformationCards/SharesCard";
import { ProgramsCard } from "../../components/InformationCards/ProgramsCard";
import { FeaturesAndServicesCard } from "../../components/InformationCards/FeaturesAndServicesCard";
import { FilesCard } from "../../components/InformationCards/FilesCard";
import { FirefoxCard } from "../../components/InformationCards/FirefoxCard";
import { RegistryCard } from "../../components/InformationCards/RegistryCard";

import { shift } from "./settings";

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
            reportName: "Sample report name",
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
            registryModal: false,
            importModal: false,
            exportModal: false
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

    parseInput = (input) => {
        const cleanedInput = input.replace(/(\r\n|\n|\r)/gm,"");
        try {
            const importObj = JSON.parse(atob(cleanedInput));
            this.setState({
                reportName: importObj.name,
                forensicsData: importObj.forensics,
                usersData: importObj.users,
                groupsData: importObj.groups,
                localpolicyData: importObj.localpolicy,
                commandsData: importObj.commands,
                sharesData: importObj.shares,
                programsData: importObj.programs,
                featuresAndServicesData: importObj.featuresAndServicesData,
                filesData: importObj.filesData,
                firefoxData: importObj.firefoxData,
                registryData: importObj.registryData
            });
            notification["success"]({
                message: "Config successfully loaded!",
                description:
                  "Your settings should now be displayed",
              });
        } catch {
            notification["error"]({
                message: "Unable to load config",
                description:
                  "Make sure the input config is the unencrypted output",
              });
        }
    }

    exportUnencrypted = () => {
        let exportObj = {
            name: this.state.reportName,
            forensics: this.state.forensicsData,
            users: this.state.usersData,
            groups: this.state.groupsData,
            localpolicy: this.state.localpolicyData,
            commands: this.state.commandsData,
            shares: this.state.sharesData,
            programs: this.state.programsData,
            featuresAndServices: this.state.featuresAndServicesData,
            files: this.state.filesData,
            firefox: this.state.firefoxData,
            registry: this.state.registryData
        };
        return btoa(JSON.stringify(exportObj));
    }

    caesarShift = (str, amount) => {

        // Method taken from https://gist.github.com/EvanHahn/2587465

        // Wrap the amount
        if (amount < 0)
            return this.caesarShift(str, amount + 26);
    
        // Make an output variable
        var output = '';
    
        // Go through each character
        for (var i = 0; i < str.length; i ++) {
    
            // Get the character we'll be appending
            var c = str[i];
    
            // If it's a letter...
            if (c.match(/[a-z]/i)) {
    
                // Get its code
                var code = str.charCodeAt(i);
    
                // Uppercase letters
                if ((code >= 65) && (code <= 90))
                    c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
    
                // Lowercase letters
                else if ((code >= 97) && (code <= 122))
                    c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
    
            }
    
            // Append
            output += c;
    
        }
    
        // All done!
        return output;
    
    };

    exportEncrypted = () => {
        let exportObj = {
            name: this.state.reportName,
            forensics: this.state.forensicsData,
            users: this.state.usersData,
            groups: this.state.groupsData,
            localpolicy: this.state.localpolicyData,
            commands: this.state.commandsData,
            shares: this.state.sharesData,
            programs: this.state.programsData,
            featuresAndServices: this.state.featuresAndServicesData,
            files: this.state.filesData,
            firefox: this.state.firefoxData,
            registry: this.state.registryData
        };
        let b64str = btoa(JSON.stringify(exportObj));
        return(this.caesarShift(b64str, shift));
    }

    handleSubmit = (values, actions) => {
        //console.log(values)
        
        switch(values.type) {
            case "forensics":
                this.setState({
                    forensicsData: [...this.state.forensicsData, {id: this.state.forensicsData.length + 1, description: values.description, points: values.points, filepath: values.filepath, answer: values.answer}]
                });
                break;
            case "users":
                this.setState({
                    usersData: [...this.state.usersData, {id: this.state.usersData.length + 1, description: values.description, points: values.points, username: values.username,
                        userPass: values.userPass, shouldExist: values.shouldExist, shouldChangePw: values.shouldChangePw, shouldChangeName: values.shouldChangeName, shouldPwExpire: values.shouldPwExpire}]
                });
                break;
            case "groups":
                this.setState({
                    groupsData: [...this.state.groupsData, {id: this.state.groupsData.length + 1, description: values.description, points: values.points, groupName: values.groupName,
                        shouldBeMember: values.shouldBeMember, username: values.username}]
                });
                break;
            case "localpolicy":
                this.setState({
                    localpolicyData: [...this.state.localpolicyData, {id: this.state.localpolicyData.length + 1, description: values.description, points: values.points,
                        policyName: values.policyName, condition: values.condition, expectedValue: values.expectedValue}]
                });
                break;
            case "commands":
                this.setState({
                    commandsData: [...this.state.commandsData, {id: this.state.commandsData.length + 1, description: values.description, points: values.points,
                        command: values.command, splitPosition: values.splitPosition, comparisonValue: values.comparisonValue, matchOrNot: values.matchOrNot}]
                });
                break;
            case "shares":
                this.setState({
                    sharesData: [...this.state.sharesData, {id: this.state.sharesData.length + 1, description: values.description, points: values.points, shareName: values.shareName,
                        sharePath: values.sharePath, authorized: values.authorized}]
                });
                break;
            case "programs":
                this.setState({
                    programsData: [...this.state.programsData, {id: this.state.programsData.length + 1, description: values.description, points: values.points, programName: values.programName,
                        programPath: values.programPath, authorized: values.authorized}]
                });
                break;
            case "featuresAndServices":
                this.setState({
                    featuresAndServicesData: [...this.state.featuresAndServicesData, {id: this.state.featuresAndServicesData.length + 1, description: values.description, points: values.points, servOrFeat: values.servOrFeat,
                        itemName: values.itemName, expectedEnabled: values.expectedEnabled}]
                });
                break;
            case "files":
                this.setState({
                    filesData: [...this.state.filesData, {id: this.state.filesData.length + 1, description: values.description, points: values.points, filePath: values.filePath, authorized: values.authorized}]
                });
                break;
            case "firefox":
                this.setState({
                    firefoxData: [...this.state.firefoxData, {id: this.state.firefoxData.length + 1, description: values.description, points: values.points, settingName: values.settingName}]
                });
                break;
            case "registry":
                this.setState({
                    registryData: [...this.state.registryData, {id: this.state.registryData.length + 1, description: values.description, points: values.points, hKey: values.hKey, path: values.path,
                        key: values.key, checkingIndex: values.checkingIndex, condition: values.condition, expectedValue: values.expectedValue}]
                });
                break;
            case "inputConfig":
                this.parseInput(values.configuration);
                break;
            default:
                console.log("WARNING: No submit type was specified, please contact Jimmy!")
        }
    }

    handleDelete = (type, id) => {
        switch(type) {
            case "forensics":
                this.setState({
                    forensicsData: this.state.forensicsData.filter(item => item.id !== id)
                });
                break;
            case "users":
                this.setState({
                    usersData: this.state.usersData.filter(item => item.id !== id)
                });
                break;
            case "groups":
                this.setState({
                    groupsData: this.state.groupsData.filter(item => item.id !== id)
                });
                break;
            case "localpolicy":
                this.setState({
                    localpolicyData: this.state.localpolicyData.filter(item => item.id !== id)
                });
                break;
            case "commands":
                this.setState({
                    commandsData: this.state.commandsData.filter(item => item.id !== id)
                });
                break;
            case "shares":
                this.setState({
                    sharesData: this.state.sharesData.filter(item => item.id !== id)
                });
                break;
            case "programs":
                this.setState({
                    programsData: this.state.programsData.filter(item => item.id !== id)
                });
                break;
            case "featuresAndServices":
                this.setState({
                    featuresAndServicesData: this.state.featuresAndServicesData.filter(item => item.id !== id)
                });
                break;
            case "files":
                this.setState({
                    filesData: this.state.filesData.filter(item => item.id !== id)
                });
                break;
            case "firefox":
                this.setState({
                    firefoxData: this.state.firefoxData.filter(item => item.id !== id)
                });
                break;
            case "registry":
                this.setState({
                    registryData: this.state.registryData.filter(item => item.id !== id)
                });
                break;
            default:
                console.log("WARNING: No delete type was specified, please contact Jimmy!")
        }
    }

    render() {

        const { classes } = this.props;

        return(
            <Layout style={{ minHeight: "100vh" }}>
                <Sider theme="light">
                    <Menu theme="light" mode="inline" defaultSelectedKeys={["edit"]}>
                        <Item className={classes.logo} disabled>Scorpio Scoring Engine</Item>
                        <Item key="edit">
                            <Link to="/scoringengine">
                                Edit Scoring Report
                            </Link>
                        </Item>
                        <Item key="scoreboard">
                            <Link to="/scoreboard">
                                Scoreboard
                            </Link>
                        </Item>
                    </Menu>
                </Sider>
                <Content className={classes.body}>
                    <div className={classes.sectionTitle}>
                        <h3 className={classes.sectionTitleChild}>Report name: </h3>
                        <Input size="large" style={{ width: "20%" }} className={classes.sectionTitleChild} value={this.state.reportName} onChange={(value) =>  this.setState({reportName: value.target.value})}/>
                        <Button className={classes.sectionTitleChild} onClick={() => this.showModal("importModal")}>Import Configuration</Button>
                        <Modal
                            title="Import configuration"
                            visible={this.state.importModal}
                            footer={null}
                            onCancel={() => this.cancelModal("importModal")}
                        >
                            <InputForm onSubmit={this.handleSubmit}/>
                        </Modal>
                        <Button className={classes.sectionTitleChild} onClick={() => this.showModal("exportModal")}>Export Configuration</Button>
                        <Modal
                            title="Export configuration"
                            visible={this.state.exportModal}
                            footer={null}
                            onCancel={() => this.cancelModal("exportModal")}
                        >
                            <h2>Unencrypted Configuration</h2>
                            <p>{this.exportUnencrypted()}</p>
                            <h2>Encrypted Configuration</h2>
                            <p>{this.exportEncrypted()}</p>
                        </Modal>
                    </div>
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
                            <ForensicsCard item={item} handleDelete={this.handleDelete}/>
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
                            <UsersCard item={item} handleDelete={this.handleDelete}/>
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
                            <GroupsCard item={item} handleDelete={this.handleDelete}/>
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
                        <LocalPolicyCard item={item} handleDelete={this.handleDelete}/>
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
                        <CommandsCard item={item} handleDelete={this.handleDelete}/>
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
                        <SharesCard item={item} handleDelete={this.handleDelete}/>
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
                        <ProgramsCard item={item} handleDelete={this.handleDelete}/>
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
                        <FeaturesAndServicesCard item={item} handleDelete={this.handleDelete}/>
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
                        <FilesCard item={item} handleDelete={this.handleDelete}/>
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
                        <FirefoxCard item={item} handleDelete={this.handleDelete}/>
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
                        <RegistryCard item={item} handleDelete={this.handleDelete}/>
                        </List.Item>
                    )}
                    />
                    <div className={classes.footerContainer}>
                    <p className={classes.footer}>Scorpio By: Clement Chan, Jimmy Li</p>
                    <p className={classes.footer}>Ubuntu Scoring By: Christo Bakis</p> 
                    <p className={classes.footer}>Web Application By: Jimmy Li</p>
                    </div>
                </Content>
            </Layout>

        );

    }

}

export const ScoringEngine = injectSheet(styles)(unstyledScoringEngine);