import React, { Component } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Layout, Menu, Icon } from "antd";
import './home.css';

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #2E9AFE;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 30%;
  left: 40px;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
  width: 70%;
  
  
`;

const PageLink = styled.a`
  padding-right: 10px;  
  font-size: 15px;
  text-decoration: none;
  color: white;
  padding-right: 15 px;
  margin-left: 65px;
  
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
        <PageLink href="/home" title="Tamaqtan" className="logo">TAMAQTAN</PageLink>    
        </LeftContainer>

        <RightContainer>    
          <PageLink href="/home" title="Главная">Главная</PageLink>      
          <PageLink href="#" title="Рецепты">Рецепты</PageLink>
          <PageLink href="#" title="Супер поиск">Супер поиск</PageLink>
          <PageLink href="/login" title="Вход" className="vhod">Вход</PageLink>
        </RightContainer>
      </Container>
    
    );
  }
}

export default HeaderExample;
