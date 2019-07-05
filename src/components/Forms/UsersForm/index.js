import React, { Component } from "react";
import injectSheet from "react-jss";
import { Input, Form, Button, Select } from "antd";
import { Formik, Field as FormikField } from "formik";

import { styles } from "./styles";

const FormItem = Form.Item;
const Option = Select.Option;

class unstyledUsersForm extends Component {

    render() {

        const { classes, onSubmit } = this.props;

        return (
            <Formik
                initialValues={{ type: "users", description: "", points: 0, username: "", userPass: "",
                    shouldExist: "True", shouldChangePw: "False", shouldChangeName: "False", shouldPwExpire: "False" }}
                onSubmit={onSubmit}
            >
                {props => (
                    <form onSubmit={props.handleSubmit}>
                    <React.Fragment>
                        <FormItem>
                            <div className={classes.formikField}>
                                <p className={classes.formikFieldChild}>Description</p>
                                <FormikField
                                    name="description"
                                    render={({ field }) => <Input {...field} className={classes.formikFieldChild} placeholder="Description" />}
                                />
                            </div>
                        </FormItem>
                        <FormItem>
                            <div className={classes.formikField}>
                                <p className={classes.formikFieldChild}>Points</p>
                                <FormikField
                                    name="points"
                                    render={({ field }) => <Input {...field} className={classes.formikFieldChild} maxLength={3} placeholder="Points" />}
                                />
                            </div>
                        </FormItem>
                        <FormItem>
                            <div className={classes.formikField}>
                                <p className={classes.formikFieldChild}>Username</p>
                                <FormikField
                                    name="username"
                                    render={({ field }) => <Input {...field} className={classes.formikFieldChild} placeholder="Username" />}
                                />
                            </div>
                        </FormItem>
                        <FormItem>
                            <div className={classes.formikField}>
                                <p className={classes.formikFieldChild}>Current User Password</p>
                                <FormikField
                                    name="userPass"
                                    render={({ field }) => <Input {...field} className={classes.formikFieldChild} placeholder="Current User Password" />}
                                />
                            </div>
                        </FormItem>
                        <FormItem>
                            <div className={classes.formikField}>
                                <p className={classes.formikFieldChild}>Should the user exist</p>
                                <FormikField
                                    name="shouldExist"
                                    render={({ field }) => (
                                        <Select
                                          {...field}
                                          onChange={value => props.setFieldValue("shouldExist", value)}
                                          value={props.values.shouldExist}
                                        >
                                          <Option key={1} value="True">
                                            True
                                          </Option>
                                          <Option key={2} value="False">
                                            False
                                          </Option>
                                        </Select>
                                      )}
                                />
                            </div>
                        </FormItem>
                        <FormItem>
                            <div className={classes.formikField}>
                                <p className={classes.formikFieldChild}>Should the user change passwords</p>
                                <FormikField
                                    name="shouldChangePw"
                                    render={({ field }) => (
                                        <Select
                                          {...field}
                                          onChange={value => props.setFieldValue("shouldChangePw", value)}
                                          value={props.values.shouldChangePw}
                                        >
                                          <Option key={1} value="True">
                                            True
                                          </Option>
                                          <Option key={2} value="False">
                                            False
                                          </Option>
                                        </Select>
                                      )}
                                />
                            </div>
                        </FormItem>
                        <FormItem>
                            <div className={classes.formikField}>
                                <p className={classes.formikFieldChild}>Should the user change names</p>
                                <FormikField
                                    name="shouldChangeName"
                                    render={({ field }) => (
                                        <Select
                                          {...field}
                                          onChange={value => props.setFieldValue("shouldChangeName", value)}
                                          value={props.values.shouldChangeName}
                                        >
                                          <Option key={1} value="True">
                                            True
                                          </Option>
                                          <Option key={2} value="False">
                                            False
                                          </Option>
                                        </Select>
                                      )}
                                />
                            </div>
                        </FormItem>
                        <FormItem>
                            <div className={classes.formikField}>
                                <p className={classes.formikFieldChild}>Should the user's password expire</p>
                                <FormikField
                                    name="shouldPwExpire"
                                    render={({ field }) => (
                                        <Select
                                          {...field}
                                          onChange={value => props.setFieldValue("shouldPwExpire", value)}
                                          value={props.values.shouldPwExpire}
                                        >
                                          <Option key={1} value="True">
                                            True
                                          </Option>
                                          <Option key={2} value="False">
                                            False
                                          </Option>
                                        </Select>
                                      )}
                                />
                            </div>
                        </FormItem>
                        <FormItem>
                            <Button block htmlType="submit" type="primary" >
                            Submit
                            </Button>
                        </FormItem>
                    </React.Fragment>
                    </form>
                )}
            </Formik>
        );

    }
}

export const UsersForm = injectSheet(styles)(unstyledUsersForm);