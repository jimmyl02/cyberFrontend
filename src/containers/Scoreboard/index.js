import React, { Component } from "react";
import injectSheet from "react-jss";
import moment from "moment";
import { Layout, Menu, Input, Button, Table } from "antd";
import { Link } from "react-router-dom";

import { styles } from "./styles";

const {
  Sider, Content
} = Layout;

const {
  Item
} = Menu;

class unstyledScoreboard extends Component {

  constructor(props) {

    super(props);

    this.state = {
      data: [],
      name: "",
      imageName: ""
    };

  }

  async componentDidMount() {

    fetch("http://107.170.200.206/api/user/getScores")
      .then((results) => {
        return results.json();
      })
      .then((jsonResults) => {
        let newData = [];

        for(let entry in jsonResults){
          let data = jsonResults[entry];
          data["key"] = entry;
          const dateString = new Date(data["startTime"]);
          data["startTime"] = moment(dateString).format('MMMM Do YYYY, h:mm:ss a');
          newData.push(data);
        }

        //console.log(newData);

        this.setState({data: jsonResults});
      });

  }

  onChangeName = (e) => {
    this.setState({ name: e.target.value });
  }

  onChangeImageName = (e) => {
    this.setState({ imageName: e.target.value });
  }

  onSubmit = (e) => {
    let addedQueryString = "?";
    if(this.state.name){
      addedQueryString += "name=" + this.state.name + "&";
    }
    if(this.state.imageName){
      addedQueryString += "imageName=" + this.state.imageName;
    }
    fetch("http://107.170.200.206/api/user/getScores" + addedQueryString)
      .then((results) => {
        return results.json();
      })
      .then((jsonResults) => {
        let newData = [];

        for(let entry in jsonResults){
          let data = jsonResults[entry];
          data["key"] = entry;
          const dateString = new Date(data["startTime"]);
          data["startTime"] = moment(dateString).format('MMMM Do YYYY, h:mm:ss a');
          newData.push(data);
        }

        //console.log(newData);

        this.setState({data: jsonResults});
      });
  }

  render() {

    const { classes } = this.props;

    const columns = [{
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name)
    }, {
      title: "Image Name",
      dataIndex: "imageName",
      key: "imageName",
      sorter: (a, b) => a.imageName.localeCompare(b.imageName)
    }, {
      title: "Score",
      dataIndex: "score",
      key: "score",
      sorter: (a, b) => a.score - b.score
    },  {
      title: "Total Time",
      dataIndex: "totalTime",
      key: "totalTime",
      sorter: (a, b) => a.totalTime.localeCompare(b.totalTime)
    }, {
      title: "Start Time",
      dataIndex: "startTime",
      key: "startTime"
    }];

    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider theme="light">
              <Menu theme="light" mode="inline" defaultSelectedKeys={["scoreboard"]}>
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
            <div className={classes.scoreboard}>
            <header className="scoreboardHeader">
              <div className={classes.header}>
                <h1>Troy High School Cyber Scoreboard</h1>
              </div>
            </header>
            <div className={classes.parameters}>
              <Input
                placeholder="Enter your name"
                value={this.state.name}
                onChange={this.onChangeName}
                className={classes.parameterItem}
              />
              <Input
                placeholder="Enter the image name"
                value={this.state.imageName}
                onChange={this.onChangeImageName}
                className={classes.parameterItem}
              />
              <Button type="primary" onClick={this.onSubmit} className={classes.parameterItem}>Submit</Button>
            </div>
            <Table dataSource={this.state.data} columns={columns}/>
            <div className={classes.footerContainer}>
              <p className={classes.footer}>Scorpio By: Clement Chan, Jimmy Li</p>
              <p className={classes.footer}>Ubuntu Scoring By: Christo Bakis</p> 
              <p className={classes.footer}>Web Application By: Jimmy Li</p>
            </div>
          </div>
          </Content>
      </Layout>
    );
  }
}

export const Scoreboard = injectSheet(styles)(unstyledScoreboard);