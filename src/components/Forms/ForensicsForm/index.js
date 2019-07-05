import React, { Component } from "react";
import injectSheet from "react-jss";
import { Input, Form, Button } from "antd";
import { Formik, Field as FormikField } from "formik";

import { styles } from "./styles";

const FormItem = Form.Item;

class unstyledForensicsForm extends Component {

    render() {

        const { classes, onSubmit } = this.props;

        return (
            <Formik
                initialValues={{ type: "forensics", description: "", points: 0, filepath: "", answer: "" }}
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
                                    name="filepath"
                                    render={({ field }) => <Input {...field} className={classes.formikFieldChild} placeholder="File Path" />}
                                />
                            </div>
                        </FormItem>
                        <FormItem>
                            <div className={classes.formikField}>
                                <p className={classes.formikFieldChild}>Answer</p>
                                <FormikField
                                    name="answer"
                                    render={({ field }) => <Input {...field} className={classes.formikFieldChild} placeholder="Answer" />}
                                />
                            </div>
                        </FormItem>
                        <FormItem>
                            <Button block htmlType="submit" type="primary">
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

export const ForensicsForm = injectSheet(styles)(unstyledForensicsForm);