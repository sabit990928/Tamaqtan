import React, { Component } from "react";
import styled from 'styled-components';

import { withRouter } from "react-router-dom";
import './home.css';
import '../pages/welcome.css'
import {  Icon, Modal,Form, Input, Checkbox, Dropdown, Menu } from 'antd';

import { connect } from 'react-redux';
import { loginUser, logoutUser } from '../actions/auth';

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
  padding-right: 20px;  
  font-size: 15px;
  text-decoration: none;
  color: white;
  margin-left: 20px;
  
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
  };
  
  handleLogout = () => {
    this.props.logoutUser();
  }
  
  handleEmailChange = (event) =>{
    this.setState({ email: event.target.value })
  }
  
  handlePasswordChange = (event) =>{
    this.setState({ password: event.target.value })
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    
    const { email, password, result } = this.state;
    const { loginUser, history, auth } = this.props;
    
    const user = {
      email: email,
      password: password
    }
    
    console.log(user)
    this.props.loginUser(user, history);
    this.setState({ visible: false })
  }
  
  render() {
    const { getFieldDecorator } = this.props.form;
    const { auth } = this.props;
    const { visible, loading } = this.state;
    const menu = (
      <Menu>
        {/* <Menu.Item key="0">
          <a href="/profile" className="link">Мой профиль</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="" className="link">Мое меню</a>
        </Menu.Item> */}
        {/* <Menu.Divider /> */}
        <Menu.Item onClick={this.handleLogout} key="3"><a href="" className="link" href="/home">Выйти</a></Menu.Item>
      </Menu>
    );
    this.props.auth && console.log(auth, 'user')
    return (
      <Container>
        <LeftContainer>
        <PageLink href="/home" title="Tamaqtan" className="logo">TAMAQTAN</PageLink>    
        </LeftContainer>

        <RightContainer>  
          {
            auth && auth.is_user.localeCompare("2") === 0 ?
            <div>
              <PageLink href="/tamaq" title="Блюдо">Блюдо</PageLink>      
              {/* <PageLink href="/menu" title="Меню">Меню</PageLink>   
              <PageLink href="/clients" title="Клиенты">Клиенты</PageLink>    */}
            </div>
          :
          <div>
              <PageLink href="/randomFood" title="Случайное блюдо">Случайное блюдо</PageLink>
            </div>
          }
          {
            auth && auth.is_user.localeCompare("1") === 0 && <div>
            
              <PageLink href="/welcome" title="Главная">Категорий</PageLink>      
              <PageLink href="/recipes" title="Рецепты">Рецепты</PageLink>
              <PageLink href="/weekly" title="Неделя">Меню на неделю</PageLink> 

            </div>

          }

          {auth ? <div style={{ "display": "flex", "flexDirection": "row"}}>
            <Dropdown overlay={menu} trigger={['click']}>
              <a className="loginn" href="#" style={{ 'marginLeft': '400px'}}>
                {auth.firstname} <Icon type="down" />
              </a>
            </Dropdown>
            
          </div>
          : <PageLink title="Вход" className="vhod" onClick={this.showModal}>Вход</PageLink>
          }
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

const mapStateToProps = (state) => ({
  auth: state.auth
})

const EnhancedHeader = withRouter(HeaderExample);

export default connect(mapStateToProps, { loginUser, logoutUser })(Form.create()(EnhancedHeader));
