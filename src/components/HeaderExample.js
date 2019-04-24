import React, { Component } from "react";
import styled from 'styled-components';
import { Link } from "react-router-dom";

import { withRouter } from "react-router-dom";
import './home.css';
import {  Icon, Modal,Form, Input, Button, Checkbox,} from 'antd';
import axios from 'axios';
import ReactDOM from 'react-dom';

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
    loading: false,
    visible: false,
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  }

  handleCancel = () => {
    this.setState({ visible: false });
  }


  state = {
    email: '',
    password: '',
    result: null
  };

  handleEmailChange = (event) =>{
    this.setState({ email: event.target.value })
  }

  handlePasswordChange = (event) =>{
    this.setState({ password: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { email, password, result } = this.state;

    const user = {
      email: email,
      password: password
    }

    console.log(user)
    
// http://localhost/rest-api-authentication-example/api/login.php
    // axios.post(`http://10.8.130.113/tamaqtan/test.php`, { user })
    axios.post(`http://172.20.10.4/back/api/login.php`, user)
      .then(res => {
        this.setState({ result: res})
        console.log("Data", res)  
        this.props.history.push('/welcome')
      })
      .catch(res =>{
        console.log("Exception", res)
      }
      )
  }



  render() {
    const { getFieldDecorator } = this.props.form;
    const { visible, loading } = this.state;
    return (
      <Container>
        <LeftContainer>
        <PageLink href="/home" title="Tamaqtan" className="logo">TAMAQTAN</PageLink>    
        </LeftContainer>

        <RightContainer>    
          <PageLink href="/home" title="Главная">Главная</PageLink>      
          <PageLink href="/recipes" title="Рецепты">Рецепты</PageLink>
          <PageLink href="#" title="Супер поиск">Супер поиск</PageLink>
          <PageLink title="Вход" className="vhod" onClick={this.showModal}>Вход</PageLink>
        </RightContainer>
        <div>
        
        
          <Modal
            visible={visible}
            title="Вход"
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={[

            ]}
            width = {350}
            
          >
        
        <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item name="email" on>
              {getFieldDecorator('email', {
                rules: [{ required: true, message: 'Пожалуйста, введите ваше имя пользователя!' }],
              })(
                <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} type="text" placeholder="Логин" name="email" onChange={this.handleEmailChange}/>
              )}
            </Form.Item>
            
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Пожалуйста, введите ваш пароль!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Пароль" name='password'onChange={this.handlePasswordChange}/>
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>Запомнить пароль</Checkbox>
              )}
              <a className="login-form-forgot" href="#">Забыли пароль?</a>
              <button type='submit' className="login-form-button">
                Вход
              </button>
               <a href="/register">Зарегистрироваться</a>
            </Form.Item>
      </Form>
        </Modal>
        
      </div>  
      </Container>


    
    );
  }
}

const EnhancedHeader = withRouter(HeaderExample);

export default Form.create()(EnhancedHeader);
