import React, { Component } from "react";
import { Form, Input, Button, Icon, Row, Col } from "antd";

const FormItem = Form.Item;

class Register extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.registerUser(values, this.props.history);
      }
    });
  };

  render() {
    // const { getFieldDecorator } = this.props.form;

    return (
      <Row type="flex" justify="center">
        <Col span={6}>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <FormItem>
              {/* {getFieldDecorator("username", {
                rules: [
                  { required: true, message: "Please input your username!" }
                ]
              })( */}
                <Input
                  prefix={
                    <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  placeholder="Username"
                />
              {/* )} */}
            </FormItem>
            <FormItem>
              {/* {getFieldDecorator("password", {
                rules: [
                  { required: true, message: "Please input your Password!" }
                ]
              })( */}
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                  }
                  type="password"
                  placeholder="Password"
                />
              {/* )} */}
            </FormItem>
            <FormItem>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                Register
              </Button>
              Or <a href="/login">login now!</a>
            </FormItem>
          </Form>
        </Col>
      </Row>
    );
  }
}

export default Register;