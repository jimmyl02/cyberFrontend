import React, { Component } from "react";
import injectSheet from "react-jss";
import { Input, Form, Button, Select } from "antd";
import { Formik, Field as FormikField } from "formik";

import { styles } from "./styles";

const FormItem = Form.Item;
const Option = Select.Option;

class unstyledRegistryForm extends Component {

    render() {

        const { classes, onSubmit } = this.props;

        return (
            <Formik
                initialValues={{ type: "registry", description: "", points: 0, hKey: "", path: "", Key: "", checkingIndex: 0, comparison: "", expectedValue: "" }}
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
                                <p className={classes.formikFieldChild}>HKey</p>
                                <FormikField
                                    name="hKey"
                                    render={({ field }) => <Input {...field} className={classes.formikFieldChild} placeholder="ex. HKLM" />}
                                />
                            </div>
                        </FormItem>
                        <FormItem>
                            <div className={classes.formikField}>
                                <p className={classes.formikFieldChild}>Path</p>
                                <FormikField
                                    name="path"
                                    render={({ field }) => <Input {...field} className={classes.formikFieldChild} placeholder="ex. SOFTWARE\\Policies\\Microsoft\\WindowsFirewall\\DomainProfile" />}
                                />
                            </div>
                        </FormItem>
                        <FormItem>
                            <div className={classes.formikField}>
                                <p className={classes.formikFieldChild}>Key</p>
                                <FormikField
                                    name="key"
                                    render={({ field }) => <Input {...field} className={classes.formikFieldChild} placeholder="ex. EnableFirewall" />}
                                />
                            </div>
                        </FormItem>
                        <FormItem>
                            <div className={classes.formikField}>
                                <p className={classes.formikFieldChild}>Checking index</p>
                                <FormikField
                                    name="checkingIndex"
                                    render={({ field }) => <Input {...field} className={classes.formikFieldChild} placeholder="ex. 0" />}
                                />
                            </div>
                        </FormItem>
                        <FormItem>
                            <div className={classes.formikField}>
                                <p className={classes.formikFieldChild}>Condition</p>
                                <FormikField
                                    name="condition"
                                    render={({ field }) => (
                                        <Select
                                          {...field}
                                          onChange={value => props.setFieldValue("condition", value)}
                                          value={props.values.condition}
                                        >
                                          <Option key={1} value="=">
                                            {"="}
                                          </Option>
                                          <Option key={2} value="!=">
                                            {"!="}
                                          </Option>
                                          <Option key={4} value="<">
                                            {"<"}
                                          </Option>
                                          <Option key={5} value=">">
                                            {">"}
                                          </Option>
                                          <Option key={6} value="<=">
                                            {"<="}
                                          </Option>
                                          <Option key={7} value=">=">
                                            {">="}
                                          </Option>
                                          <Option key={8} value="path">
                                            {"path"}
                                          </Option>
                                          <Option key={9} value="!path">
                                            {"!path"}
                                          </Option>
                                          <Option key={10} value="exist">
                                            {"exist"}
                                          </Option>
                                          <Option key={11} value="!exist">
                                            {"!exist"}
                                          </Option>
                                        </Select>
                                      )}
                                />
                            </div>
                        </FormItem>
                        <FormItem>
                            <div className={classes.formikField}>
                                <p className={classes.formikFieldChild}>Expected value</p>
                                <FormikField
                                    name="expectedValue"
                                    render={({ field }) => <Input {...field} className={classes.formikFieldChild} placeholder="ex. 1" />}
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

export const RegistryForm = injectSheet(styles)(unstyledRegistryForm);