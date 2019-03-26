import React, { Component } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";

const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: gray;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  left: 40px;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  width: 100%;
  padding-right: 30px
`;

const PageLink = styled.a`
  padding-right: 10px;
  color: white;
  font-size: 16px;
  text-decoration: none;
`;

class HeaderExample extends Component {
  state = {
    current: ""
  };

  handleClick = e => {
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <Container>
        <LeftContainer>
          <PageLink href="/login">Логин</PageLink>
          <PageLink href="/register">Регистрация</PageLink>
          <PageLink href="/home">Домой</PageLink>
          <PageLink href="/profile">Профиль</PageLink>
        </LeftContainer>
        <RightContainer>
          <PageLink href="/profile">Толегенов Нурбол</PageLink>
        </RightContainer>
      </Container>
    
    );
  }
}

export default HeaderExample;
