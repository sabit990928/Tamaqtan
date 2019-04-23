import React, { Component } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Layout, Menu, Icon, Modal, Button } from "antd";
import { withRouter } from "react-router-dom";
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

const StyledModal = styled(Modal)`
  .ant-modal-footer {
    display: none;
  }
`

class HeaderExample extends Component {
  state = {
    current: "",
    isVisible: false
  };

  handleShowModal = () => {
    this.setState({
      isVisible: true
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      isVisible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      isVisible: false,
    });
  }
  
  handleLoginClick = () => {
    this.setState({
      isVisible: false,
    });
    this.props.history.push('/login');
  };

  handleSignUpClick = () => {
    this.props.history.push('/register');
    this.setState({
      isVisible: false,
    });
  }

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
          <PageLink onClick={this.handleShowModal} title="Вход" className="vhod">Вход</PageLink>
        </RightContainer>

        <StyledModal
          visible={this.state.isVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Button 
            type='primary' 
            style={{marginLeft: '15px', marginRight: '30px'}} 
            onClick={this.handleLoginClick}
          >Bход</Button>
          <Button type='primary' onClick={this.handleSignUpClick}>Регистрация</Button>
        </StyledModal>

      </Container>
    
    );
  }
}

export default withRouter(HeaderExample);
