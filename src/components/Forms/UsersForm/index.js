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
                initialValues={{ type: "users", description: "", points: 0, username: "", option: "", argument: "" }}
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
                                <p className={classes.formikFieldChild}>Should the user's password expire</p>
                                <FormikField
                                    name="option"
                                    render={({ field }) => (
                                        <Select
                                          {...field}
                                          onChange={value => props.setFieldValue("option", value)}
                                          value={props.values.option}
                                        >
                                          <Option key={1} value="authorized">
                                            Authorized (Requires True / False)
                                          </Option>
                                          <Option key={2} value="passwd">
                                            Change Password (Requires old password)
                                          </Option>
                                          <Option key={2} value="chname">
                                            Change Name (Requires old name)
                                          </Option>
                                          <Option key={2} value="pwexp">
                                            Password Expires
                                          </Option>
                                        </Select>
                                      )}
                                />
                            </div>
                        </FormItem>
                        <FormItem>
                            <div className={classes.formikField}>
                                <p className={classes.formikFieldChild}>Argument</p>
                                <FormikField
                                    name="argument"
                                    render={({ field }) => <Input {...field} className={classes.formikFieldChild} placeholder="Argument" />}
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