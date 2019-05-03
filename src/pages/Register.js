import React, { Component } from "react";
import axios from 'axios';
import styled from 'styled-components';
import { Slider } from '../components';
import HeaderExample from "../components/HeaderExample";
import {
   Form,Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete,
} from 'antd';



const Container = styled.div`
  display: flex;
  height: 300px;
  align-items: center;
  flex-direction: column;
  background-color: white;
  padding-top: 30px;
  
`;

const StyledForm = styled(Form)`
  width: 550px;
`


const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const residences = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

class Register extends Component {

  state = {
    firstname: null,
    lastname: null,
    email: null,
    password: null,
    // repeatPassword: 'ads',
  };

  handleEmailChange = (event) =>{
    this.setState({ email: event.target.value })
  }

  handleNameChange = (event) =>{
    this.setState({ firstname: event.target.value })
  }

  handleSurnameChange = (event) =>{
    this.setState({ lastname: event.target.value })
  }

  handlePasswordChange = (event) =>{
    this.setState({ password: event.target.value })
  }

  handleRepeatPasswordChange = (event) =>{
    this.setState({ password: event.target.value })
  }



  handleSubmit = (event) => {
    event.preventDefault();

    const { email, password, firstname, lastname, repeatPassword } = this.state;
    
    const user = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password
    }
    let headers = {
        'Content-Type': 'application/json',
        'Authorization': 'JWT fefege...' 
    }
    console.log(user);

    axios.post('http://172.20.10.4/back/api/create_user.php', user)
    .then(res => {
      console.log('asd', user)
      console.log(res);
      this.props.history.push('/home')
    })
    .catch(res => {
      console.log('Registration failed')
    })

  }
  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };



  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }



  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86',
    })(
      <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    );

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
      <div>
        <HeaderExample />
      
      <Container>
        

        <StyledForm {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item
          label="Фамилия:"
       
        >
          {getFieldDecorator('firstname', {
            rules: [{
              type: 'text', message: 'The input is not valid First Name!',
            
              
            }, {
              required: true, message: 'Please input your First Name!',
              
            }],
          })(
            <Input name='lastName' onChange={this.handleSurnameChange}/>
          )}
        </Form.Item>
        <Form.Item
          label="Имя:"
        >
          {getFieldDecorator('lastname', {
            rules: [{
              type: 'text', message: 'The input is not valid Last Name!',
            }, {
              required: true, message: 'Please input your Last Name!',
            }],
          })(
            <Input name='firstName' onChange={this.handleNameChange} />
          )}
        </Form.Item>
        <Form.Item
          label="E-mail:"
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'The input is not valid E-mail!',
            }, {
              required: true, message: 'Please input your E-mail!',
            }],
          })(
            <Input name='email' onChange={this.handleEmailChange}/>
          )}
        </Form.Item>
        <Form.Item
          label="Пароль:"
        >
          {getFieldDecorator('password', {
            rules: [{
              required: true, message: 'Please input your password!',
            }, {
              validator: this.validateToNextPassword,
            }],
          })(
            <Input type="password" name='password' onChange={this.handlePasswordChange}/>
          )}
        </Form.Item>      

        <Form.Item {...tailFormItemLayout}>
          <Button type="submit" htmlType="submit">Register</Button>
        </Form.Item>
      </StyledForm>
      
      </Container>
      </div>
   

    );
  }
}

export default Form.create()(Register);
