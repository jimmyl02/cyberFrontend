import React, { Component } from "react";
import injectSheet from "react-jss";
import { Input, Form, Button } from "antd";
import { Formik, Field as FormikField } from "formik";

import { styles } from "./styles";

const FormItem = Form.Item;
const { TextArea } = Input;

class unstyledInputForm extends Component {

    render() {

        const { classes, onSubmit } = this.props;

        return (
            <Formik
                initialValues={{ type: "inputConfig", configuration: "" }}
                onSubmit={onSubmit}
            >
                {props => (
                    <form onSubmit={props.handleSubmit}>
                    <React.Fragment>
                        <FormItem>
                            <div className={classes.formikField}>
                                <p className={classes.formikFieldChild}>Configuration</p>
                                <FormikField
                                    name="configuration"
                                    render={({ field }) => <TextArea {...field} className={classes.formikFieldChild} placeholder="Configuration" />}
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

export const InputForm = injectSheet(styles)(unstyledInputForm);