import React, { Component } from "react";
import injectSheet from "react-jss";
import { Input, Form, Button, Select } from "antd";
import { Formik, Field as FormikField } from "formik";

import { styles } from "./styles";

const FormItem = Form.Item;
const Option = Select.Option;

class unstyledLocalPolicyForm extends Component {

    render() {

        const { classes, onSubmit } = this.props;

        return (
            <Formik
                initialValues={{ type: "localpolicy", description: "", points: 0, policyName: "", condition: "", expectedValue: "" }}
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
                                <p className={classes.formikFieldChild}>Policy name</p>
                                <FormikField
                                    name="policyName"
                                    render={({ field }) => <Input {...field} className={classes.formikFieldChild} placeholder="ex. MinimumPasswordAge, ClearTextPassword" />}
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
                                          <Option key={8} value="!contain">
                                            {"!contain"}
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
                                    render={({ field }) => <Input {...field} className={classes.formikFieldChild} placeholder="Expected value" />}
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

export const LocalPolicyForm = injectSheet(styles)(unstyledLocalPolicyForm);