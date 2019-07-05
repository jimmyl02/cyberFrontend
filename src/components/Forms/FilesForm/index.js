import React, { Component } from "react";
import injectSheet from "react-jss";
import { Input, Form, Button, Select } from "antd";
import { Formik, Field as FormikField } from "formik";

import { styles } from "./styles";

const FormItem = Form.Item;
const Option = Select.Option;

class unstyledFilesForm extends Component {

    render() {

        const { classes, onSubmit } = this.props;

        return (
            <Formik
                initialValues={{ type: "files", description: "", points: 0, filePath: "", authorized: "" }}
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
                                <p className={classes.formikFieldChild}>File path</p>
                                <FormikField
                                    name="filePath"
                                    render={({ field }) => <Input {...field} className={classes.formikFieldChild} placeholder="ex. C:/Users/bob/malware.exe" />}
                                />
                            </div>
                        </FormItem>
                        <FormItem>
                            <div className={classes.formikField}>
                                <p className={classes.formikFieldChild}>Authorized</p>
                                <FormikField
                                    name="authorized"
                                    render={({ field }) => (
                                        <Select
                                          {...field}
                                          onChange={value => props.setFieldValue("authorized", value)}
                                          value={props.values.authorized}
                                        >
                                          <Option key={2} value="True">
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

export const FilesForm = injectSheet(styles)(unstyledFilesForm);