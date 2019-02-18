import React, { Component } from "react";
import injectSheet from "react-jss";
import { Input, Card, Button, Alert } from "antd";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Redirect } from "react-router";

import { styles } from "./styles";

const mapStateToProps = (state) => {
    return {
      report: state.report.report,
      jwt: state.report.jwt
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      setReport: (report) => {
        dispatch({
          type: 'SET_REPORT',
          payload: report
        });
      },
      setJwt: (jwt) => {
        dispatch({
          type: 'SET_JWT',
          payload: jwt,
        });
      }
    };
  };

class unstyledScoringEngineAuth extends Component {

    constructor(props){

        super(props);

        this.state = {
            reportname: "",
            password: "",
            unauth: false,
            redirect: false
        };

    }

    onChangeReportname = (e) => {
        this.setState({ reportname: e.target.value });
    }

    onChangePassword = (e) => {
        this.setState({ password: e.target.value });
    }

    onSubmit = async (e) => {

        let payload = {
            reportName: this.state.reportname,
            password: this.state.password
        };

        const data = JSON.stringify(payload);

        const options = {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: data
        };

        const submittedLogin = await fetch("http://107.170.200.206/api/scoringengine/loginReport", options);
        
        if(submittedLogin.status === 200){

            const jwtObj = await submittedLogin.json();

            this.props.setReport(this.state.reportname);
            this.props.setJwt(jwtObj.token);
            this.setState({ redirect: true });

        }else{
            this.setState({ unauth: true });
        }

    }

    render() {

        const { classes } = this.props;

        if(this.state.redirect){
            return <Redirect to="/scoringengine" />
        }

        return(
            <div className={ classes.authBody }>
                <Card>
                    <h1>Login</h1>
                    {
                        (this.state.unauth) ?
                        <Alert type='error' message="Incorrect report name / password" banner /> : null
                    }
                    <Input
                        placeholder="Enter the name of your report"
                        value={ this.state.reportname }
                        onChange={ this.onChangeReportname }
                        className={ classes.input }
                    />
                    <Input.Password
                        placeholder="Enter your password"
                        value={ this.state.password }
                        onChange={ this.onChangePassword }
                        className={ classes.input }
                    />
                    <Link to="/createreport">
                        <p className={ classes.register }>or create a report now</p>
                    </Link>
                    <Button type="primary" onClick={this.onSubmit}>Submit</Button>
                </Card>
            </div>
        );

    }
}

const styledScoringEngineAuth = injectSheet(styles)(unstyledScoringEngineAuth);
export const ScoringEngineAuth = connect(mapStateToProps, mapDispatchToProps)(styledScoringEngineAuth);