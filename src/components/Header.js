import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";

class Header extends Component {
  state = {
    current: ""
  };

  handleClick = e => {
    this.setState({
      current: e.key
    });
  };

  renderContent() {
  
    return (
      <a href="/login">
        <Icon type="login" /> Login
      </a>
    );
  }

  render() {
    return (
      <Layout.Header style={{ height: 46 }}>
        {this.renderContent()}
      </Layout.Header>
    );
  }
}

export default Header;
