import React, { Component } from "react";
import { Row, Col, Form, Input, Button, Icon } from "antd";

const FormItem = Form.Item;

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.loginUser(values, this.props.history);
      }
    });
  };

  render() {
    // const { getFieldDecorator } = this.props.form;

    return (
      <div style={{ height: "calc(100vh - 86px)", width: '90%', margin: 'auto', marginTop: 20, backgroundColor: 'transparent', marginBottom: 20 }}>
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
                Login
                </Button>
              Or <a href="/register">register now!</a>
              </FormItem>
            </Form>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Login;
